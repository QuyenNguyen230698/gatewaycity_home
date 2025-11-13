import { useTokenStore } from "~/store/token"; // Đảm bảo đường dẫn này là chính xác
import { decodeJwt } from "jose"; // Thay đổi cách import

export default defineNuxtRouteMiddleware(async (to, from) => {
  // Kiểm tra nếu có ?sitemap=false trong URL
  if (to.query.sitemap === "false") {
    return;
  }

  const tokenStore = useTokenStore();

  // Kiểm tra và làm mới token nếu cần
  if (tokenStore.token) {
    try {
      const decoded = decodeJwt(tokenStore.token);
      const currentTime = Math.floor(Date.now() / 1000);
      if (decoded.exp < currentTime) {
        await tokenStore.refreshToken();
      }
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }
});
