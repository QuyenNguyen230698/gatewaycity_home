<template>
  <div class="bg-img text-white">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 pt-4 lg:pt-8">
        <!-- banner & title -->
        <div
          data-aos="fade-up"
          data-aos-offset="20"
          data-aos-delay="50"
          class="col-span-12 grid grid-cols-12 w-full items-center md:pb-4"
        >
        <div class="col-span-12 md:col-span-6">
          <NuxtLink external to="/" class="w-fit">
            <NuxtImg
              src="/Logo.svg"
              quality="75"
              loading="eager"
              alt="logo"
              class="h-auto w-24 md:w-32 lg:w-52 object-contain"
            />
          </NuxtLink>
        </div>
          <div
            class="col-span-12 md:col-span-6 w-full md:text-end flex flex-col h-full md:justify-between md:pb-8"
          >
            <p class="text-sm lg:text-base tracking-widest text-gray-300 py-2 lg:py-0">GATEWAY CITY | <span class="text-white text-sm lg:text-base font-montserrat-bold">ALL-IN-COMPOUND</span> ĐẦU TIÊN TẠI MIỀN TÂY</p>
            <div class="flex flex-col lg:gap-1">
              <h4 class="text-lg lg:text-2xl tracking-wide pb-1">Liên Hệ</h4>
              <p class="text-xs lg:text-sm flex md:justify-end items-center gap-2">
                <span class="hover:underline cursor-pointer">0919 542 618</span>
                <NuxtImg
                src="/image/logo/Phone_white.svg"
                alt="Quality"
                class="w-6 h-6 object-contain"
              />
              </p>
              <p class="text-xs lg:text-sm flex md:justify-end items-center gap-2">
                <span class="hover:underline cursor-pointer">Tân Vĩnh Thuận, Tân Ngãi, Tỉnh Vĩnh Long</span>
                <NuxtImg
                src="/image/logo/Location_white.svg"
                alt="Quality"
                class="w-6 h-6 object-contain"
              />
              </p>
            </div>
          </div>
        </div>
        <!-- communicate -->
        <div class="col-span-12 grid grid-cols-12 py-4 overflow-hidden items-center">
          <div class="col-span-12 md:col-span-10 lg:col-span-8 grid grid-cols-12 pb-4 md:pb-0 gap-1 md:gap-0"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50">
            <NuxtLink to="/" class="col-span-6 md:col-span-2 hover:underline cursor-pointer">
              Tổng Quan
            </NuxtLink>
            <NuxtLink to="/" class="col-span-6 md:col-span-2 hover:underline cursor-pointer md:text-center">
              Chủ Đầu Tư
            </NuxtLink>
            <NuxtLink to="/" class="col-span-6 md:col-span-2 hover:underline cursor-pointer md:text-center">
              Sản Phẩm
            </NuxtLink>
            <NuxtLink to="/" class="col-span-6 md:col-span-2 hover:underline cursor-pointer md:text-center">
              Vị Trí
            </NuxtLink>
            <NuxtLink to="/" class="col-span-6 md:col-span-2 hover:underline cursor-pointer md:text-center">
              Tiện Ích
            </NuxtLink>
            <NuxtLink to="/" class="col-span-6 md:col-span-2 hover:underline cursor-pointer md:text-center">
              Liên Hệ
            </NuxtLink>
          </div>
          <nav
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            class="col-span-12 md:col-span-2 lg:col-span-4 flex space-x-4 md:justify-end"
            aria-label="Social Media Links"
          >
            <a
              href="https://www.youtube.com/@tranduccorp"
              target="_blank"
              aria-label="YouTube"
              title="YouTube"
            >
              <NuxtImg
                src="/image/logo/Youtube_white.svg"
                alt="Quality"
                class="w-6 h-6 object-contain"
              />
            </a>
            <a
              href="https://www.facebook.com/moduluxhomes"
              target="_blank"
              aria-label="Facebook"
              title="Facebook"
            >
              <NuxtImg
                src="/image/logo/FB_white.svg"
                alt="Quality"
                class="w-6 h-6 object-contain"
              />
            </a>
            <a
              href="https://www.instagram.com/moduluxhomes_/"
              target="_blank"
              aria-label="Instagram"
              title="Instagram"
            >
              <NuxtImg
                src="/image/logo/IG_white.svg"
                alt="Quality"
                class="w-6 h-6 object-contain"
              />
            </a>
          </nav>
        </div>
      </div>
      <div
        class="border-t border-white py-4 overflow-hidden z-10"
      >
        <div
          class="flex flex-col md:flex-row gap-1 md:items-center md:justify-between text-sm text-gray-300"
        >
          <p class="text-xs">© 2025 Gateway City - Vĩnh Long. **All rights reserved.**</p>
          <div class="flex space-x-4">
            <a
              href="/terms"
              class="cursor-pointer text-xs hover:underline"
              aria-label="Terms & conditions"
              title="Terms & conditions"
              >Terms & conditions</a
            >
            <a
              href="/privacy-policy"
              class="cursor-pointer text-xs hover:underline"
              aria-label="Privacy Policy"
              title="Privacy Policy"
              >Privacy Policy</a
            >
          </div>
        </div>
      </div>
    </div>
    <ToastMessage
      ref="toastRef"
      :typeToast="currentToastType"
      :message="toastMessage"
      :show="showToast"
      :width="`w-2/3 lg:w-fit`"
      class="z-40"
    />
  </div>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

// Toast
const toastRef = ref(null);
const toastImageRef = ref(null); // Thêm ref cho ToastImage
const showToast = ref(false);
const showToastImage = ref(false); // Thêm biến để điều khiển hiển thị của ToastImage
const currentToastType = ref("");
const toastMessage = ref("");
const toastImageUrl = ref(""); // Thêm biến để lưu URL cho ToastImage
const showMessageToast = (type, message, url = "") => {
  currentToastType.value = type;
  toastMessage.value = message;
  showToast.value = !url; // Chỉ hiển thị Toast nếu không có URL
  showToastImage.value = !!url; // Hiển thị ToastImage nếu có URL
  toastImageUrl.value = url; // Gán URL cho ToastImage

  if (url !== "") {
    if (toastImageRef.value) {
      // Hiển thị ToastImage khi showMessageToast được gọi
      toastImageRef.value.show();
    }
  } else {
    if (toastRef.value) {
      toastRef.value.show();
    }
  }
};

// Form
const formFooter = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
});

const isSubmitting = ref(false);
// Hàm validate form
const validateForm = () => {
  const form = formFooter.value;

  if (!form.firstName || !form.lastName || !form.email || !form.phone) {
    showMessageToast(
      "error",
      "Please fill in first name, last name, email and phone."
    );
    return false;
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(form.email)) {
    showMessageToast("error", "Invalid email format.");
    return false;
  }

  return true;
};

const resetFormFooter = () => {
  formFooter.value = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
};
// Hàm submit
const submit = async () => {
  if (isSubmitting.value) {
    return;
  }

  isSubmitting.value = true;

  if (!validateForm()) {
    isSubmitting.value = false; // Đừng quên reset lại nếu validation fail
    return;
  }
};

onMounted(() => {
  nextTick().then(() => {
    setTimeout(() => {
      AOS.init({
        once: false,
        offset: 5,
        delay: 0,
        duration: 1000,
        easing: "ease",
        mirror: true,
      });
      window.addEventListener("scroll", () => {
        AOS.refresh();
      });
    }, 1);
  });
});
</script>

<style lang="scss" scoped>
.white-line::after {
  border-top: 1px solid #d1d5db;
  content: "";
  display: block;
  margin-top: 15px;
  width: 40px;
}
.tracking-footer {
  letter-spacing: 0.2em;
}
.bg-img {
  background-image: url('/image/gatewaycity/background.jpg');
  background-size: cover;
  background-position: center;
}
</style>
