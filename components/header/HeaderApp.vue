<template>
  <div class="flex flex-col w-full">
    <header
      class="fixed top-0 w-full z-50 transition-all duration-500 ease-in-out"
      :class="headerClasses"
    >
      <!-- Mobile Menu -->
      <div
        data-aos="fade-down"
        data-aos-offset="20"
        data-aos-delay="1500"
        class="navbar h-24 py-4 justify-between items-center w-full container mx-auto lg:hidden"
      >
        <div class="h-20 md:h-fit navbar-start w-fit lg:hidden">
          <div class="drawer w-fit">
            <input
              id="my-drawer"
              type="checkbox"
              class="drawer-toggle"
              v-model="isDrawerOpen"
            />
            <div class="drawer-content w-fit">
              <label
                for="my-drawer"
                class="rounded-full w-fit bg-transparent border border-pyramid-gold p-2 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block h-8 w-8 stroke-current text-pyramid-gold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>
            <div class="drawer-side flex flex-col z-50 min-h-screen">
              <ul
                class="bg-custom-green text-base w-full h-full overflow-y-scroll px-4"
              >
                <li
                  class="flex flex-row justify-between items-center w-full py-4"
                >
                  <NuxtLink aria-label="logo" external to="/" @click="closeDrawer">
                    <NuxtImg
                      quality="75"
                      loading="eager"
                      src="/Logo.svg"
                      aria-label="logo"
                      alt="logo"
                      class="min-w-full h-18 object-contain"
                    />
                  </NuxtLink>
                  <label
                    for="my-drawer"
                    aria-label="close sidebar"
                    class="drawer-overlay"
                  >
                    <span class="p-2 rounded-full text-white cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="size-8"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </label>
                </li>
                <li class="text-nowrap w-full pb-4">
                  <NuxtLink
                    to="/tong-quan"
                    external
                    @click="closeDrawer"
                    class="font-montserrat-medium col-start-2 text-white hover:text-pyramid-gold cursor-pointer transition-all duration-300"
                  >
                    <p class="text-2xl">Tổng Quan</p>
                  </NuxtLink>
                </li>
                <li class="text-nowrap w-full pb-4">
                  <NuxtLink
                    to="/chu-dau-tu"
                    external
                    @click="closeDrawer"
                    class="font-montserrat-medium col-start-2 text-white hover:text-pyramid-gold cursor-pointer transition-all duration-300"
                  >
                    <p class="text-2xl">Chủ Đầu Tư</p>
                  </NuxtLink>
                </li>
                <li class="text-nowrap w-full pb-4">
                  <NuxtLink
                    to="/vi-tri"
                    external
                    @click="closeDrawer"
                    class="font-montserrat-medium col-start-2 text-white hover:text-pyramid-gold cursor-pointer transition-all duration-300"
                  >
                    <p class="text-2xl">Vị Trí</p>
                  </NuxtLink>
                </li>
                <li class="text-nowrap w-full pb-4">
                  <NuxtLink
                    to="/tien-ich-du-an"
                    external
                    @click="closeDrawer"
                    class="font-montserrat-medium col-start-2 text-white hover:text-pyramid-gold cursor-pointer transition-all duration-300"
                  >
                    <p class="text-2xl">Tiện Ích</p>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="h-20 md:h-fit w-fit navbar-center md:justify-center flex lg:hidden"
        >
          <NuxtLink aria-label="logo" external to="/" @click="closeDropdown">
            <NuxtImg
              quality="75"
              loading="eager"
              src="/Logo.svg"
              aria-label="logo"
              alt="logo"
              class="h-20 max-w-full max-h-full object-contain"
            />
          </NuxtLink>
        </div>
        <div
          class="h-full w-fit flex navbar-end lg:flex-row items-center justify-end"
        >
          <div class="flex gap-3 items-center lg:hidden">
            <div
              @click="openSearchModal"
              class="py-2 flex-grow flex items-center justify-center rounded-full bg-transparent border border-pyramid-gold p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 text-pyramid-gold"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <!-- Desktop Menu -->
      <div
        data-aos="fade-down"
        data-aos-offset="20"
        data-aos-delay="1500"
        class="navbar h-25 py-4 items-center justify-center w-full container mx-auto hidden lg:block"
      >
        <!-- ==== NAVBAR 3 PHẦN ==== -->
        <div class="hidden lg:flex w-full h-full items-center justify-between">
          <!-- 1. START – nút menu + about -->
          <div class="navbar-start flex items-center gap-6">
            <!-- Nút menu (mở drawer desktop) -->
            <label
              for="my-drawer2"
              class="cursor-pointer px-4 py-1 rounded-full border border-pyramid-gold flex items-center justify-center gap-2 text-white hover:text-pyramid-gold transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block h-6 w-6 stroke-current text-pyramid-gold"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <p class="text-sm uppercase">Menu</p>
            </label>

            <!-- Contact -->
            <NuxtLink
              to="/lien-he"
              external
              @click="closeDrawer2"
              class="whitespace-nowrap text-white hover:text-pyramid-gold cursor-pointer transition-all duration-300"
            >
              <p class="text-sm uppercase">Contact Us</p>
            </NuxtLink>
          </div>

          <!-- 2. CENTER – logo -->
          <div class="navbar-center">
            <NuxtLink aria-label="logo" external to="/" @click="closeDrawer2">
              <NuxtImg
                quality="75"
                loading="eager"
                src="/Logo.svg"
                aria-label="logo"
                alt="logo"
                class="h-20 max-w-full object-contain"
              />
            </NuxtLink>
          </div>

          <!-- 3. END – WhatWeDo + search -->
          <div class="navbar-end flex items-center gap-6">
            <NuxtLink
              to=""
              @click="closeDropdown"
              class="whitespace-nowrap text-white hover:text-pyramid-gold cursor-pointer transition-all duration-300"
            >
              <a href="tel:0919542618" class="text-base">0919.542.618</a>
            </NuxtLink>
            <!-- WhatWeDo dropdown -->
            <div class="relative">
              <!-- Nút click để mở dropdown -->
              <div @click="toggleDropdown" class="cursor-pointer">
                <p
                  class="text-sm px-4 py-2 w-52 uppercase whitespace-nowrap flex gap-1 items-center justify-center text-white hover:text-pyramid-gold bg-pyramid-gold hover:bg-white cursor-pointer transition-all duration-300"
                  :class="isDropdownOpen ? 'rounded-t-3xl' : 'rounded-3xl'"
                >
                  <span>Chọn Sản Phẩm</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    :class="[
                      'size-4 transition-transform duration-300',
                      { 'rotate-180': isDropdownOpen },
                    ]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </p>
              </div>

              <!-- Dropdown menu -->
              <ul
                v-if="isDropdownOpen"
                v-click-away="closeDropdown"
                class="absolute right-0 top-9 bg-white z-50 text-left fade-down w-52 rounded-b-3xl shadow-lg"
              >
                <li class="text-sm pt-2 px-4">
                  <NuxtLink
                    to="/san-pham/biet-thu-don-lap"
                    external
                    :class="
                      isActiveRoute('/san-pham/biet-thu-don-lap')
                        ? 'font-montserrat-medium text-pyramid-gold'
                        : 'font-montserrat-medium hover:text-pyramid-gold'
                    "
                    @click="closeDropdown"
                  >
                    BIỆT THỰ ĐƠN LẬP
                  </NuxtLink>
                </li>
                <li class="hover:text-pyramid-gold text-sm py-2 px-4">
                  <NuxtLink
                    to="/san-pham/biet-thu-song-lap"
                    external
                    :class="
                      isActiveRoute('/san-pham/biet-thu-song-lap')
                        ? 'font-montserrat-medium text-pyramid-gold'
                        : 'font-montserrat-medium hover:text-pyramid-gold'
                    "
                    @click="closeDropdown"
                  >
                    BIỆT THỰ SONG LẬP
                  </NuxtLink>
                </li>
                <li class="hover:text-pyramid-gold text-sm px-4 pb-2">
                  <NuxtLink
                    to="/san-pham/nha-pho-thuong-mai"
                    external
                    :class="
                      isActiveRoute('/san-pham/nha-pho-thuong-mai')
                        ? 'font-montserrat-medium text-pyramid-gold'
                        : 'font-montserrat-medium hover:text-pyramid-gold'
                    "
                    @click="closeDropdown"
                  >
                    NHÀ PHỐ THƯƠNG MẠI
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div
              style="width: 2px; height: 16px; background-color: #ffffff"
            ></div>

            <!-- Search -->
            <div
              @click="openSearchModal"
              class="cursor-pointer p-2 rounded-lg text-white hover:text-pyramid-gold transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-6 duration-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <!-- ==== DRAWER DESKTOP -->
      <div class="drawer">
        <input
          id="my-drawer2"
          type="checkbox"
          class="drawer-toggle"
          v-model="isDrawerOpen2"
        />
        <div class="drawer-content"></div>

        <div class="drawer-side z-50">
          <label for="my-drawer2" class="drawer-overlay"></label>
          <div
            class="bg-custom-green w-full lg:w-1/3 min-h-screen shadow-2xl overflow-y-auto"
          >
            <ul
              class="bg-custom-green text-base w-full h-full overflow-y-scroll"
            >
              <li class="h-25 py-4 grid grid-cols-4 w-full">
                <div class="col-start-2 flex items-center gap-6">
                  <!-- Nút menu (mở drawer desktop) -->
                  <label
                    for="my-drawer2"
                    class="cursor-pointer px-4 py-1 rounded-full border border-pyramid-gold flex items-center justify-center gap-2 text-white hover:text-pyramid-gold transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="inline-block h-6 w-6 stroke-current text-pyramid-gold"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    <p class="text-sm uppercase">Menu</p>
                  </label>

                  <!-- Contact -->
                  <NuxtLink
                    to="/lien-he"
                    external
                    @click="closeDrawer2"
                    class="whitespace-nowrap text-white hover:text-pyramid-gold cursor-pointer transition-all duration-300"
                  >
                    <p class="text-sm uppercase">Contact Us</p>
                  </NuxtLink>
                </div>
              </li>
              <li class="text-nowrap grid grid-cols-4 w-full pb-4">
                <NuxtLink
                  to="/tong-quan"
                  external
                  @click="closeDrawer2"
                  class="font-montserrat-medium col-start-2 text-white hover:text-pyramid-gold cursor-pointer transition-all duration-300"
                >
                  <p class="text-3xl">Tổng Quan</p>
                </NuxtLink>
              </li>
              <li class="text-nowrap grid grid-cols-4 w-full pb-4">
                <NuxtLink
                  to="/chu-dau-tu"
                  external
                  @click="closeDrawer2"
                  class="font-montserrat-medium col-start-2 text-white hover:text-pyramid-gold cursor-pointer transition-all duration-300"
                >
                  <p class="text-3xl">Chủ Đầu Tư</p>
                </NuxtLink>
              </li>
              <li class="text-nowrap grid grid-cols-4 w-full pb-4">
                <NuxtLink
                  to="/vi-tri"
                  external
                  @click="closeDrawer2"
                  class="font-montserrat-medium col-start-2 text-white hover:text-pyramid-gold cursor-pointer transition-all duration-300"
                >
                  <p class="text-3xl">Vị Trí</p>
                </NuxtLink>
              </li>
              <li class="text-nowrap grid grid-cols-4 w-full pb-4">
                <NuxtLink
                  to="/tien-ich-du-an"
                  external
                  @click="closeDrawer2"
                  class="font-montserrat-medium col-start-2 text-white hover:text-pyramid-gold cursor-pointer transition-all duration-300"
                >
                  <p class="text-3xl">Tiện Ích</p>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, onUnmounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";

const props = defineProps({
  isGeneralSliceShow: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["open-search"]);

const activeDropdown = ref(null);
const isHovered = ref(false);
const isHeaderVisible = ref(true);
const isDropdownOpen = ref(false);
const isCollapseOpen = ref(false);
const isDrawerOpen = ref(false);
const isDrawerOpen2 = ref(false);
let lastScrollY = 0;

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

// Theo dõi isDrawerOpen để mở collapse khi drawer mở
watch(isDrawerOpen, (newValue) => {
  if (newValue) {
    isCollapseOpen.value = true;
  }
});

const closeDrawer = () => {
  isDrawerOpen.value = false;
};

const closeDrawer2 = () => {
  isDrawerOpen2.value = false;
};

const closeCollapse = () => {
  isCollapseOpen.value = false;
};

const closeDrawerAndCollapse = () => {
  closeDrawer();
  closeCollapse();
};

// const closeDropdown = () => {
//   isDropdownOpen.value = false;
// };

const openSearchModal = () => {
  emit("open-search");
  activeDropdown.value = null;
  isHovered.value = false;
};

const isAtTop = ref(true);

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  isAtTop.value = currentScrollY === 0; // Chỉ kiểm tra === 0

  // Ẩn/hiện header
  if (currentScrollY > lastScrollY && currentScrollY > 20) {
    isHeaderVisible.value = false;
  } else if (currentScrollY < lastScrollY) {
    isHeaderVisible.value = true;
  }
  lastScrollY = currentScrollY;
};

// === COMPUTED CLASS - NHƯ MẪU ===
const headerClasses = computed(() => {
  return [
    isAtTop.value
      ? "bg-transparent"
      : "bg-custom-green/90 backdrop-blur-sm shadow-lg",
    !isHeaderVisible.value ? "translate-y-[-100%]" : "",
  ]
    .filter(Boolean)
    .join(" ");
});

// Lấy route hiện tại
const route = useRoute();

// Hàm kiểm tra route hiện tại có khớp với path hoặc là route con của path
const isActiveRoute = (path) => {
  return route.path === path || route.path.startsWith(`${path}/`);
};

// Kiểm tra nếu route hiện tại thuộc dropdown hoặc là route con của /projects
const isDropdownActive = computed(() => {
  const dropdownPaths = ["/why-modulux"];
  return dropdownPaths.some(
    (path) => route.path === path || route.path.startsWith(`${path}/`)
  );
});

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.pageYOffset > 0;
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
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Container cho header */
.header-container {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  transition: transform 0.3s ease-in-out;
}

/* Khi ẩn, trượt header lên trên */
.header-container.is-hidden {
  transform: translateY(-100%);
}

/* Container cho header */
.header-show {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  transform: translateY(36px);
  transition: transform 0.3s ease-in-out;
}

/* Khi scroll xuống, di chuyển về top-0 */
.header-show.is-slice {
  transform: translateY(0px);
}

.bg-menu {
  background-color: #444444;
}
.menu {
  padding: 0;
}

.menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
}
.menu :where(li > details > summary):after {
  display: none;
}

.menu :where(li ul):before {
  display: none;
}
.collapse:focus-visible {
  outline: none;
}
.menu li > *:not(ul, .menu-title, details, .btn):active {
  background-color: transparent;
}
.collapse:not(.collapse-close)
  > :where(input[type="checkbox"]:checked ~ .collapse-content) {
  padding-bottom: 0;
}
.white-line::after {
  border-top: 1px solid #00b85f;
  content: "";
  display: block;
  margin-top: 15px;
  width: 40px;
}

.color-text {
  color: #ababab;
}
.color-section {
  color: #bfbfbf;
}

.rotate-360 {
  transition: transform 0.5s ease-in-out;
}

.rotate-360:hover {
  transform: rotate(180deg);
}

.rotate-360:not(:hover) {
  transform: rotate(0deg);
}

/* Các hiệu ứng transition */
.fade-up {
  animation: fadeUpAnimation 0.3s ease-in-out forwards;
}

/* Animation cho fade-up */
@keyframes fadeUpAnimation {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-down {
  animation: fadeDownAnimation 0.3s ease-in-out forwards;
}

/* Animation cho fade-down */
@keyframes fadeDownAnimation {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
