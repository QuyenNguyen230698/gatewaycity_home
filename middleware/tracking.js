import { UAParser } from "ua-parser-js";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) {
    return;
  }

  // Kiểm tra nếu có ?sitemap=false trong URL
  if (to.query.sitemap === "false") {
    return;
  }

  let sessionId = getSessionId();
  if (!sessionId) {
    sessionId = generateSessionId();
    saveToLocalStorage("sessionId", sessionId);
  } else {
    sessionId = getFromLocalStorage("sessionId");
  }

  // Ensure sessionId is not null or empty
  if (!sessionId) {
    sessionId = generateSessionId();
    saveToLocalStorage("sessionId", sessionId);
  }

  const deviceFinger = await getDeviceFingerprint();

  let visitor = getFromLocalStorage("visitor");
  if (!visitor) {
    visitor = await getUserIP();
    saveToLocalStorage("visitor", visitor);
  }

  const startTime = Date.now();

  let path = to.path === "/" ? "/home" : to.path;
  saveToLocalStorage("path", path);

  const payload = await createPayload(sessionId, path, deviceFinger, visitor);
  const authToken = Cookies.get("token");
  if (visitor && deviceFinger) {
    const encryptedPayload = encryptPayload(payload);
    Cookies.set("tracking-visitor", encryptedPayload, {
      expires: 1,
      path: path,
    });
    await logVisit(encryptedPayload, authToken);
  } else {
    saveToLocalStorage("error", "Failed to get user IP or device fingerprint");
  }

  if (authToken && startTime) {
    let currentStartTime = startTime;

    const handleUnload = (event) => {
      const endTime = Date.now();
      const activeDuration = endTime - currentStartTime;
      const durationMinutes = (activeDuration / 60000).toFixed(2);

      const payload = {
        path,
        sessionId,
        deviceFinger,
        interactionDuration: activeDuration,
        interactionDurationMinutes: durationMinutes,
        authToken, // Bao gồm authToken trong payload
      };

      const config = useRuntimeConfig().public;
      const secretKey = useAppConfig().auth.jwtSecret;

      const encryptedPayload = CryptoJS.AES.encrypt(
        JSON.stringify(payload),
        secretKey
      ).toString();

      const url = `${config.apiBase}/visit/visit-log/duration`;
      const data = new Blob([JSON.stringify({ token: encryptedPayload })], {
        type: "application/json",
      });

      // Sử dụng navigator.sendBeacon để gửi dữ liệu
      navigator.sendBeacon(url, data);
    };

    // Thêm sự kiện beforeunload để bắt sự kiện đóng tab
    window.addEventListener("beforeunload", handleUnload);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        updateInteractionDuration(
          path,
          sessionId,
          deviceFinger,
          currentStartTime,
          authToken
        );
      } else {
        currentStartTime = Date.now(); // Cập nhật startTime khi tab trở lại hiển thị
      }
    };

    const handleOffline = () => {
      updateInteractionDuration(
        path,
        sessionId,
        deviceFinger,
        currentStartTime,
        authToken
      );
    };

    const handleOnline = () => {
      currentStartTime = Date.now(); // Cập nhật startTime khi người dùng trở lại trực tuyến
    };

    const handleBlur = () => {
      updateInteractionDuration(
        path,
        sessionId,
        deviceFinger,
        currentStartTime,
        authToken
      );
    };

    const handleFocus = () => {
      currentStartTime = Date.now(); // Cập nhật startTime khi cửa sổ nhận lại tiêu điểm
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    // Sử dụng router.beforeEach để theo dõi chuyển trang
    const router = useRouter();
    router.beforeEach((to, from, next) => {
      updateInteractionDuration(
        path,
        sessionId,
        deviceFinger,
        currentStartTime,
        authToken
      );
      next();
    });
  }
});

function getSessionId() {
  if (process.server) return "";
  const name = "sessionId=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(name)) {
      return cookie.substring(name.length);
    }
  }
  return "";
}

function generateSessionId() {
  if (process.server) return "";
  const id = Math.random().toString(36).substring(2);
  document.cookie = `sessionId=${id}; path=/`;
  return id;
}

async function getDeviceFingerprint() {
  try {
    const fpPromise = FingerprintJS.load();
    const fp = await fpPromise;
    const result = await fp.get();
    saveToLocalStorage("deviceFingerprint", result.visitorId);
    return result.visitorId;
  } catch (error) {
    console.error("Failed to get device fingerprint", error);
    return null; // Trả về null nếu có lỗi
  }
}

async function getUserIP() {
  try {
    // Create a timeout promise that resolves after 2 seconds
    const timeoutPromise = new Promise(resolve => {
      setTimeout(() => {
        resolve({ ip: '127.0.0.1', timeout: true });
      }, 2000);
    });

    // Create the API call promise
    const apiPromise = fetch("https://ipinfo.io/json?client=tracking", {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    }).then(response => response.json());

    // Race between the timeout and the API call
    const result = await Promise.race([apiPromise, timeoutPromise]);
    
    // If we got actual API result (not the timeout result)
    if (!result.timeout) {
      saveToLocalStorage("visitor", result);
    }
    
    return result;
  } catch (error) {
    console.error("Failed to get user IP", error);
    return { ip: '127.0.0.1', error: true }; 
  }
}

function mapNewApiToOldFormat(newApiData) {
  return {
    ip: newApiData.query, // Lấy từ `query`
    city: newApiData.city, // Lấy từ `city`
    region: newApiData.regionName, // Lấy từ `regionName`
    country: newApiData.countryCode, // Lấy từ `countryCode`
    loc: `${newApiData.lat},${newApiData.lon}`, // Ghép `lat` và `lon`
    org: newApiData.as, // Lấy từ `as`
    postal: newApiData.zip, // Lấy từ `zip`
    timezone: newApiData.timezone, // Lấy từ `timezone`
    readme: "https://ipinfo.io/missingauth", // Giá trị cố định
  };
}

async function createPayload(sessionId, path, deviceFinger, visitorData) {
  const parser = new UAParser();
  const result = parser.getResult();
  const deviceType = result.device.type || "desktop";
  const deviceModel = `${result.device.vendor || ""} ${
    result.os.name || "Unknown Device"
  }`.trim();

  // Kiểm tra nếu đang chạy trên client-side để lấy referrer
  const referrer = process.client ? document.referrer || "direct" : "direct";

  // Sử dụng giá trị mặc định nếu visitorData là null
  const ipAddress = visitorData ? visitorData.ip : "unknown";
  const city = visitorData ? visitorData.city : "unknown";
  const region = visitorData ? visitorData.region : "unknown";
  const country = visitorData ? visitorData.country : "unknown";
  const loc = visitorData ? visitorData.loc : "unknown";
  const org = visitorData ? visitorData.org : "unknown";
  const postal = visitorData ? visitorData.postal : "unknown";
  const timezone = visitorData ? visitorData.timezone : "unknown";

  return {
    path,
    sessionId,
    referrer,
    deviceFinger,
    browser: result?.browser?.name,
    browserVersion: result?.browser?.version,
    os: result?.os?.name,
    osVersion: result?.os?.version,
    deviceType,
    deviceModel,
    ipAddress,
    city,
    region,
    country,
    loc,
    org,
    postal,
    timezone,
  };
}

function encryptPayload(payload) {
  const secretKey = useAppConfig().auth.jwtSecret;

  // Kiểm tra nếu secretKey không bị undefined
  if (!secretKey) {
    throw new Error("Encryption secret key is not defined");
  }

  return CryptoJS.AES.encrypt(JSON.stringify(payload), secretKey).toString();
}

async function logVisit(encryptedPayload, authToken) {
  try {
    const config = useRuntimeConfig().public;

    await $fetch(`${config.apiBase}/visit/visitor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ token: encryptedPayload }),
    });
  } catch (error) {
    console.error("Failed to create visit log", error);
    // Bỏ qua lỗi, không thực hiện thêm hành động nào
  }
}

async function updateInteractionDuration(
  path,
  sessionId,
  deviceFinger,
  currentStartTime,
  authToken
) {
  const endTime = Date.now();
  const activeDuration = endTime - currentStartTime;
  const durationMinutes = (activeDuration / 60000).toFixed(2);

  saveToLocalStorage("interactionDuration", {
    path,
    sessionId,
    deviceFinger,
    interactionDuration: activeDuration,
    interactionDurationMinutes: durationMinutes,
  });

  try {
    const config = useRuntimeConfig().public;
    const secretKey = useAppConfig().auth.jwtSecret;

    const payload = {
      path,
      sessionId,
      deviceFinger,
      interactionDuration: activeDuration,
      interactionDurationMinutes: durationMinutes,
    };

    const encryptedPayload = CryptoJS.AES.encrypt(
      JSON.stringify(payload),
      secretKey
    ).toString();

    // Kiểm tra nếu visitor đã tồn tại trong localStorage
    let visitor = getFromLocalStorage("visitor");
    if (!visitor) {
      visitor = await getUserIP();
      saveToLocalStorage("visitor", visitor);
    }

    await $fetch(`${config.apiBase}/visit/visit-log/duration`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ token: encryptedPayload }),
    });
  } catch (error) {
    console.error("Failed to log interaction duration", error);
    // Bỏ qua lỗi, không thực hiện thêm hành động nào
  }
}

function saveToLocalStorage(key, value) {
  if (process.client) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

function getFromLocalStorage(key) {
  if (process.client) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null;
}
