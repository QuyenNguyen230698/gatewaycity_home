<template>
  <div class="bg-black text-white">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 py-4">
        <!-- banner & title -->
        <div
          data-aos="fade-up"
          data-aos-offset="20"
          data-aos-delay="50"
          class="col-span-12 grid grid-cols-12 w-full items-center"
        >
          <NuxtLink external to="/" class="col-span-12 lg:col-span-3 w-full">
            <NuxtImg
              src="/Logo.svg"
              quality="75"
              loading="eager"
              alt="logo"
              class="h-auto w-60 lg:w-full object-contain"
            />
          </NuxtLink>
          <p
            class="col-span-12 lg:col-span-4 lg:col-start-9 lg:col-end-13 text-xs md:text-sm font-montserrat-regular tracking-footer text-gray-300 w-full lg:text-end"
          >
            {{ $t("footer.title") }}
          </p>
        </div>
        <!-- form submit -->
        <div
          class="col-span-12 lg:col-span-3 w-full h-full flex flex-col justify-between gap-5 py-5 lg:py-2"
        >
          <h2
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            class="text-lg font-montserrat-medium"
          >
            {{ $t("footer.titleForm") }}
          </h2>
          <div class="grid grid-cols-12 gap-2 md:gap-1">
            <div
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              class="col-span-12 md:col-span-6 w-full"
            >
              <label for="firstname">{{ $t("footer.firstName") }}*</label>
              <input
                type="text"
                v-model="formFooter.firstName"
                class="w-full bg-transparent bg-black-gray min-h-10 focus:outline-none py-1 px-2 text-base"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              class="col-span-12 md:col-span-6 w-full"
            >
              <label for="lastname">{{ $t("footer.lastName") }}*</label>
              <input
                type="text"
                v-model="formFooter.lastName"
                class="w-full bg-transparent bg-black-gray min-h-10 focus:outline-none py-1 px-2 text-base"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              class="col-span-12 w-full md:mt-2 lg:mt-4"
            >
              <label for="email">{{ $t("footer.email") }}*</label>
              <input
                type="text"
                v-model="formFooter.email"
                class="w-full bg-transparent bg-black-gray min-h-10 focus:outline-none py-1 px-2 text-base"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              class="col-span-12 w-full md:mt-2 lg:mt-4"
            >
              <label for="phone">{{ $t("footer.phone") }}*</label>
              <input
                type="text"
                v-model="formFooter.phone"
                class="w-full bg-transparent bg-black-gray min-h-10 focus:outline-none py-1 px-2 text-base"
              />
            </div>
          </div>
          <button
            @click="submit"
            :disabled="isSubmitting"
            class="font-montserrat-medium w-full md:w-1/2 bg-white text-black px-4 py-2 text-base hover:bg-gray-300 duration-300 ease-in-out"
          >
            {{ isSubmitting ? "Submitting..." : "Submit" }}
          </button>
        </div>
        <!-- col 1 -->
        <div
          class="col-span-6 md:col-span-4 lg:col-span-3 lg:col-start-5 lg:col-end-7 flex flex-col gap-5 py-2"
        >
          <NuxtLink
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            external
            to="/about"
            class="text-lg lg:text-xl font-montserrat-medium hover:text-custom-green duration-300 ease-in-out cursor-pointer w-fit"
            >{{ $t("footer.about") }}</NuxtLink
          >
          <span
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            class="border-b border-white w-10"
          ></span>
          <div class="flex flex-col gap-2">
            <NuxtLink
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              class="text-lg lg:text-xl font-montserrat-medium w-fit"
              >{{ $t("footer.WhatWeDo") }}</NuxtLink
            >
            <NuxtLink
              external
              to="/why-modulux"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              class="text-sm hover:text-custom-green duration-300 ease-in-out cursor-pointer text-gray-300 w-fit"
              >{{ $t("footer.WhyModulux") }}</NuxtLink
            >
            <NuxtLink
              external
              to="/our-technology"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              class="text-sm hover:text-custom-green duration-300 ease-in-out cursor-pointer text-gray-300 w-fit"
              >{{ $t("footer.OurTechnology") }}</NuxtLink
            >
            <NuxtLink
              external
              to="/technical-specification"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              class="text-sm hover:text-custom-green duration-300 ease-in-out cursor-pointer text-gray-300 w-fit"
              >{{ $t("footer.TechnicalSpecification") }}</NuxtLink
            >
            <NuxtLink
              external
              to="/our-process"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              class="text-sm hover:text-custom-green duration-300 ease-in-out cursor-pointer text-gray-300 w-fit"
              >{{ $t("footer.OurProcess") }}</NuxtLink
            >
          </div>
          <span
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            class="border-b border-white w-10"
          ></span>
          <NuxtLink
            external
            to="/projects"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            class="text-lg lg:text-xl font-montserrat-medium hover:text-custom-green duration-300 ease-in-out cursor-pointer w-fit"
            >{{ $t("footer.Projects") }}</NuxtLink
          >
          <span
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            class="border-b border-white w-10"
          ></span>
          <NuxtLink
            external
            to="/blogs"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            class="text-lg lg:text-xl font-montserrat-medium hover:text-custom-green duration-300 ease-in-out cursor-pointer w-fit"
            >{{ $t("footer.Blog") }}</NuxtLink
          >
        </div>
        <!-- col 2 -->
        <div
          class="col-span-6 md:col-span-4 lg:col-span-3 lg:col-start-8 lg:col-end-10 flex flex-col gap-5 py-2"
        >
          <NuxtLink
            external
            to="/contact?type=project"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            class="text-lg lg:text-xl font-montserrat-medium hover:text-custom-green duration-300 ease-in-out cursor-pointer w-fit"
            >{{ $t("footer.contact") }}</NuxtLink
          >
          <span
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            class="border-b border-white w-10"
          ></span>
          <NuxtLink
            external
            to="/faqs"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            class="text-lg lg:text-xl font-montserrat-medium hover:text-custom-green duration-300 ease-in-out cursor-pointer w-fit"
            >{{ $t("footer.faqs") }}</NuxtLink
          >
        </div>
        <!-- col 3 -->
        <div
          class="col-span-12 md:col-span-4 lg:col-span-2 lg:col-start-11 lg:col-end-13 flex flex-col justify-between gap-5 py-3 md:py-2"
        >
          <div class="flex flex-col gap-2 lg:mb-5">
            <h2
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              class="text-lg lg:text-xl font-montserrat-medium"
            >
              {{ $t("footer.headOffice") }}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              class="flex items-start group text-gray-300 w-fit"
            >
              <NuxtImg
                src="/image/logo/Phone_white.svg"
                alt="Quality"
                class="w-6 h-6 object-contain"
              />
              <span class="text-sm ml-1"
                ><a
                  href="tel:+84988897997"
                  class="hover:underline cursor-pointer duration-300 ease-in-out"
                  >(+84) 988 897 997</a
                >
                /
                <a
                  href="tel:+84934826309"
                  class="hover:underline cursor-pointer duration-300 ease-in-out"
                  >(+84) 934 826 309</a
                ></span
              >
            </p>
            <p
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              class="flex items-start group text-gray-300 w-fit"
            >
              <NuxtImg
                src="/image/logo/Location_white.svg"
                alt="Quality"
                class="w-6 h-6 object-contain"
              />
              <span class="text-sm ml-1"
                >Unit 901, The Waterfront Saigon, 1-1A-2 Ton Duc Thang, Sai Gon
                Ward, Ho Chi Minh City, Vietnam</span
              >
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <h2
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              class="text-lg lg:text-xl font-montserrat-medium"
            >
              {{ $t("footer.factory") }}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              class="flex items-start group text-gray-300 w-fit"
            >
              <NuxtImg
                src="/image/logo/Phone_white.svg"
                alt="Quality"
                class="w-6 h-6 object-contain"
              />
              <span class="text-sm ml-1"
                ><a
                  href="tel:+84988897997"
                  class="hover:underline cursor-pointer duration-300 ease-in-out"
                  >(+84) 988 897 997</a
                >
                /
                <a
                  href="tel:+84934826309"
                  class="hover:underline cursor-pointer duration-300 ease-in-out"
                  >(+84) 934 826 309</a
                ></span
              >
            </p>
            <p
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              class="flex items-start group text-gray-300 w-fit"
            >
              <NuxtImg
                src="/image/logo/Location_white.svg"
                alt="Quality"
                class="w-6 h-6 object-contain"
              />
              <span class="text-sm ml-1"
                >Plot of land No. 555, map sheet No. 83, Trung Quarter, Binh Hoa
                Ward, Ho Chi Minh City, Vietnam</span
              >
            </p>
            <p
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-delay="50"
              class="flex items-start group text-gray-300 w-fit"
            >
              <NuxtImg
                src="/image/logo/Location_white.svg"
                alt="Quality"
                class="w-6 h-6 object-contain"
              />
              <span class="text-sm ml-1"
                >T1/21M, Group 1, Binh Thuan 2 Quarter, Thuan Giao Ward, Ho Chi
                Minh City, Vietnam</span
              >
            </p>
          </div>
        </div>
        <!-- communicate -->
        <div class="col-span-12 pt-6 overflow-hidden">
          <nav
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            class="flex space-x-4"
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
            <a
              href="https://www.linkedin.com/company/tranduccorp"
              target="_blank"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <NuxtImg
                src="/image/logo/Linkedin_white.svg"
                alt="Quality"
                class="w-6 h-6 object-contain"
              />
            </a>
          </nav>
        </div>
      </div>
      <div
        class="border-t border-gray-300 py-6 text-white overflow-hidden z-10 bg-black"
      >
        <div
          class="flex flex-col md:flex-row gap-1 md:items-center md:justify-between text-sm text-gray-300"
        >
          <p class="text-xs">© 2025 Modulux Homes. **All rights reserved.**</p>
          <div class="flex space-x-4">
            <a
              href="/terms"
              class="cursor-pointer text-xs"
              aria-label="Terms & conditions"
              title="Terms & conditions"
              >{{ $t("footer.terms") }}</a
            >
            <a
              href="/privacy-policy"
              class="cursor-pointer text-xs"
              aria-label="Privacy Policy"
              title="Privacy Policy"
              >{{ $t("footer.privacyPolicy") }}</a
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
</style>
