<template>
  <div class="flex flex-col w-full">
    <header data-aos="fade-down" data-aos-offset="20" data-aos-delay="50" class="fixed top-0 w-full z-50 bg-white shadow">
      <div class="navbar h-16 lg:h-20 justify-between items-center w-full container mx-auto">
        <div class="h-18 md:h-fit navbar-start md:justify-evenly lg:justify-start hidden lg:flex">
          <NuxtLink aria-label="logo" external to="/" @click="closeDropdown">
            <NuxtImg
              quality="75"
              loading="eager"
              src="/Logo.svg"
              aria-label="logo"
              alt="logo"
              class="h-18 max-w-full max-h-full object-contain"
            />
          </NuxtLink>
        </div>
        <div class="h-12 md:h-fit navbar-start md:justify-start flex lg:hidden">
          <NuxtLink aria-label="logo" external to="/" @click="closeDropdown">
            <NuxtImg
              quality="75"
              loading="eager"
              src="/Logo.svg"
              aria-label="logo"
              alt="logo"
              class="h-14 max-w-full max-h-full object-contain"
            />
          </NuxtLink>
        </div>
        <div class="h-full w-fit flex navbar-end lg:flex-row items-center justify-end">
          <!-- Mobile Menu -->
          <div class="flex gap-3 items-center lg:hidden">
            <div @click="openSearchModal" class="py-2 flex-grow flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <div class="drawer">
              <input id="my-drawer" type="checkbox" class="drawer-toggle" v-model="isDrawerOpen" />
              <div class="drawer-content">
                <label for="my-drawer" class="rounded-none bg-transparent border-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block h-8 w-8 stroke-current"
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
                <ul class="menu bg-white text-base w-full h-full overflow-y-scroll">
                  <li class="px-4 flex flex-row justify-between items-center w-full">
                    <NuxtLink aria-label="logo" to="/" @click="closeDrawer">
                      <NuxtImg
                        quality="75"
                        loading="eager"
                        src="/Logo_MDL.svg"
                        aria-label="logo"
                        alt="logo"
                        class="min-w-full h-18 object-contain"
                      />
                    </NuxtLink>
                    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay">
                      <span class="p-2 rounded-full text-white bg-neutral-800 hover:bg-neutral-500 cursor-pointer rotate-360">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          class="size-6"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </span>
                    </label>
                  </li>
                  <li class="py-1 px-6 text-nowrap text-xl flex flex-col">
                    <NuxtLink to="/about" aria-label="Sidebar Item 1" class="font-montserrat-medium" @click="closeDrawer">
                      {{ $t("app.menu.about") }}
                    </NuxtLink>
                    <span class="border-b border-custom-green w-16 my-2 p-0"></span>
                  </li>
                  <li @click="isCollapseOpen = !isCollapseOpen" class="cursor-pointer text-nowrap px-3">
                    <div class="collapse bg-transparent">
                      <input
                        type="checkbox"
                        id="collapse-toggle"
                        v-model="isCollapseOpen"
                        aria-expanded="false"
                        class="hidden"
                      />
                      <label
                        @click="isCollapseOpen = !isCollapseOpen"
                        for="collapse-toggle"
                        class="collapse-title px-3 py-0 min-h-0 text-xl font-montserrat-medium"
                      >
                        {{ $t("app.menu.WhatWeDo") }}
                        <i class="fa-solid fa-caret-down"></i>
                      </label>
                      <div
                        class="collapse-content px-3 py-0 min-h-0 flex flex-col gap-2 text-base"
                        v-show="isCollapseOpen"
                      >
                        <NuxtLink
                          aria-label="whymodulux"
                          to="/why-modulux"
                          class="py-2 text-nowrap"
                          @click="closeDrawerAndCollapse"
                        >
                          {{ $t("app.menu.WhyModulux") }}
                        </NuxtLink>
                        <NuxtLink
                          aria-label="OurTechnology"
                          to="/our-technology"
                          class="py-2 text-nowrap"
                          @click="closeDrawerAndCollapse"
                        >
                          {{ $t("app.menu.OurTechnology") }}
                        </NuxtLink>
                        <NuxtLink
                          aria-label="StandardInclusions"
                          to="/technical-specification"
                          class="py-2 text-nowrap"
                          @click="closeDrawerAndCollapse"
                        >
                        {{ $t("app.menu.TechnicalSpecification") }}
                        </NuxtLink>
                        <NuxtLink
                          aria-label="OurProcess"
                          to="/our-process"
                          class="py-2 text-nowrap"
                          @click="closeDrawerAndCollapse"
                        >
                          {{ $t("app.menu.OurProcess") }}
                        </NuxtLink>
                        <NuxtLink
                          aria-label="Projects"
                          to="/projects"
                          class="py-2 text-nowrap"
                          @click="closeDrawerAndCollapse"
                        >
                          {{ $t("app.menu.Projects") }}
                        </NuxtLink>
                        <NuxtLink
                          aria-label="FAQs"
                          to="/faqs"
                          class="py-2 text-nowrap"
                          @click="closeDrawerAndCollapse"
                        >
                          FAQs
                        </NuxtLink>
                      </div>
                    </div>
                    <span class="border-b border-custom-green w-16 my-2 ml-3 p-0"></span>
                  </li>
                  <li class="py-1 px-6 text-nowrap text-xl flex flex-col">
                    <NuxtLink aria-label="Blogs" to="/blogs" @click="closeDrawer" class="font-montserrat-medium">
                      {{ $t("app.menu.Blog") }}
                    </NuxtLink>
                    <span class="border-b border-custom-green w-16 my-2 p-0"></span>
                  </li>
                  <li class="py-1 px-6 text-nowrap text-xl flex flex-col">
                    <NuxtLink aria-label="contact" to="/contact?type=project" @click="closeDrawer" class="font-montserrat-medium">
                      {{ $t("app.menu.contact") }}
                    </NuxtLink>
                    <span class="border-b border-custom-green w-16 my-2 p-0"></span>
                  </li>
                </ul>
                <div class="flex gap-10 bg-white w-full justify-center items-center py-8" aria-label="Social Media Links">
                  <a
                    href="https://www.facebook.com/moduluxhomes"
                    target="_blank"
                    aria-label="Facebook"
                    title="Facebook"
                    @click="closeDrawerAndCollapse"
                  >
                    <i class="bi bi-facebook text-2xl hover:text-custom-green"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/@tranduccorp"
                    target="_blank"
                    aria-label="YouTube"
                    title="YouTube"
                    @click="closeDrawerAndCollapse"
                  >
                    <i class="bi bi-youtube text-2xl hover:text-custom-green"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/moduluxhomes_/"
                    target="_blank"
                    aria-label="Instagram"
                    title="Instagram"
                    @click="closeDrawerAndCollapse"
                  >
                    <i class="bi bi-instagram text-2xl hover:text-custom-green"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/tranduccorp"
                    target="_blank"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    @click="closeDrawerAndCollapse"
                  >
                    <i class="bi bi-linkedin text-2xl hover:text-custom-green"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- Desktop Menu -->
          <div class="hidden lg:flex lg:flex-row justify-end items-center lg:w-full lg:text-sm xl:text-base font-montserrat-bold">
            <div class="flex gap-8 w-full text-center justify-center items-center">
              <!-- About Us Menu Item -->
              <div class="text-nowrap flex-grow text-base min-h-10 w-14 flex justify-center items-center">
                <NuxtLink
                  aria-label="about"
                  to="/about"
                  :class="isActiveRoute('/about') ? 'font-montserrat-medium text-custom-green' : 'font-montserrat-hover'"
                  @click="closeDropdown"
                >
                  {{ $t("app.menu.about") }}
                </NuxtLink>
              </div>
              <!-- WhyModulux Dropdown Menu Item -->
              <div class="relative flex-grow">
                <div class="navbar-center text-nowrap flex cursor-pointer justify-center">
                  <ul class="menu">
                    <li>
                      <div @mouseenter="isDropdownOpen = true" @mouseleave="isDropdownOpen = false" class="pl-0 pr-0">
                        <span
                          class="text-nowrap w-24 text-base text-center cursor-pointer flex justify-center items-center"
                          :class="isDropdownActive || isDropdownOpen ? 'font-montserrat-medium text-custom-green' : 'font-montserrat-regular'"
                        >
                          {{ $t("app.menu.WhatWeDo") }}
                        </span>
                        <ul
                          v-if="isDropdownOpen"
                          class="absolute fade-up -left-2 top-10 rounded-lg transition-all bg-base-100 w-56 text-left z-50 shadow-even"
                        >
                          <li class="hover:text-custom-green text-base leading-none pt-2">
                            <NuxtLink
                              aria-label="whymodulux"
                              to="/why-modulux"
                              :class="isActiveRoute('/why-modulux') ? 'font-montserrat-medium text-custom-green' : 'font-montserrat-medium hover:text-custom-green'"
                              @click="closeDropdown"
                            >
                              {{ $t("app.menu.WhyModulux") }}
                            </NuxtLink>
                          </li>
                          <li class="hover:text-custom-green text-base leading-none">
                            <NuxtLink
                              aria-label="OurTechnology"
                              to="/our-technology"
                              :class="isActiveRoute('/our-technology') ? 'font-montserrat-medium text-custom-green' : 'font-montserrat-medium hover:text-custom-green'"
                              @click="closeDropdown"
                            >
                              {{ $t("app.menu.OurTechnology") }}
                            </NuxtLink>
                          </li>
                          <li class="hover:text-custom-green text-base leading-none">
                            <NuxtLink
                              aria-label="StandardInclusions"
                              to="/technical-specification"
                              :class="isActiveRoute('/technical-specification') ? 'font-montserrat-medium text-custom-green' : 'font-montserrat-medium hover:text-custom-green'"
                              @click="closeDropdown"
                            >
                            {{ $t("app.menu.TechnicalSpecification") }}
                            </NuxtLink>
                          </li>
                          <li class="hover:text-custom-green text-base leading-none">
                            <NuxtLink
                              aria-label="OurProccess"
                              to="/our-process"
                              :class="isActiveRoute('/our-process') ? 'font-montserrat-medium text-custom-green' : 'font-montserrat-medium hover:text-custom-green'"
                              @click="closeDropdown"
                            >
                              {{ $t("app.menu.OurProcess") }}
                            </NuxtLink>
                          </li>
                          <li class="hover:text-custom-green text-base leading-none">
                            <NuxtLink
                              aria-label="Projects"
                              to="/projects"
                              :class="isActiveRoute('/projects') ? 'font-montserrat-medium text-custom-green' : 'font-montserrat-medium hover:text-custom-green'"
                              @click="closeDropdown"
                            >
                              {{ $t("app.menu.Projects") }}
                            </NuxtLink>
                          </li>
                          <li class="hover:text-custom-green text-base leading-none pb-2">
                            <NuxtLink
                              to="/faqs"
                              :class="isActiveRoute('/faqs') ? 'font-montserrat-medium text-custom-green' : 'font-montserrat-medium hover:text-custom-green'"
                              @click="closeDropdown"
                            >
                              FAQs
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- Other Menu Items -->
              <div class="text-nowrap cursor-pointer flex-grow text-base min-h-10 flex justify-center items-center">
                <NuxtLink
                  aria-label="Blogs"
                  to="/blogs"
                  :class="isActiveRoute('/blogs') ? 'font-montserrat-medium text-custom-green' : 'font-montserrat-hover'"
                  @click="closeDropdown"
                >
                  {{ $t("app.menu.Blog") }}
                </NuxtLink>
              </div>
              <div class="text-nowrap cursor-pointer flex-grow text-base min-h-10 flex justify-center items-center">
                <NuxtLink
                  aria-label="contact"
                  to="/contact?type=project"
                  :class="isActiveRoute('/contact') ? 'font-montserrat-medium text-custom-green' : 'font-montserrat-hover'"
                  @click="closeDropdown"
                >
                  {{ $t("app.menu.contact") }}
                </NuxtLink>
              </div>
              <div style="width: 2px; height: 16px; background-color: #222222;"></div>
              <div @click="openSearchModal" class="flex-grow min-h-10 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="size-5 hover:text-custom-green duration-300 ease-in-out cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <div class="flex-grow min-h-10 flex justify-center items-center">
                <NuxtLink external
                  to="/contact?type=general"
                  class="font-montserrat-medium cursor-pointer text-nowrap bg-black text-white my-4 px-4 py-2 text-base hover:bg-stone-800 duration-300 ease-in-out"
                >
                  Enquire Now
                </NuxtLink>
                <!-- Nút mở menu cho Desktop -->
                  <div class="hidden lg:flex items-center justify-center ml-4">
                    <label for="my-drawer" class="cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block h-7 w-7 stroke-current"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const props = defineProps({
  isGeneralSliceShow: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['open-search']);

const activeDropdown = ref(null);
const isHovered = ref(false);
const isHeaderVisible = ref(true);
const isDropdownOpen = ref(false);
const isCollapseOpen = ref(false);
const isDrawerOpen = ref(false);
let lastScrollY = 0;

// Theo dõi isDrawerOpen để mở collapse khi drawer mở
watch(isDrawerOpen, (newValue) => {
  if (newValue) {
    isCollapseOpen.value = true;
  }
});

const closeDrawer = () => {
  isDrawerOpen.value = false;
};

const closeCollapse = () => {
  isCollapseOpen.value = false;
};

const closeDrawerAndCollapse = () => {
  closeDrawer();
  closeCollapse();
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

const openSearchModal = () => {
  emit('open-search');
  activeDropdown.value = null;
  isHovered.value = false;
};

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && currentScrollY > 20) {
    isHeaderVisible.value = false;
  } else if (currentScrollY < lastScrollY) {
    isHeaderVisible.value = true;
  }
  lastScrollY = currentScrollY;
};

// Lấy route hiện tại
const route = useRoute();

// Hàm kiểm tra route hiện tại có khớp với path hoặc là route con của path
const isActiveRoute = (path) => {
  return route.path === path || route.path.startsWith(`${path}/`);
};

// Kiểm tra nếu route hiện tại thuộc dropdown hoặc là route con của /projects
const isDropdownActive = computed(() => {
  const dropdownPaths = [
    '/why-modulux',
  ];
  return dropdownPaths.some((path) => route.path === path || route.path.startsWith(`${path}/`));
});

onMounted(() => {
  nextTick().then(() => {
    setTimeout(() => {
      AOS.init({
        once: false,
        offset: 5,
        delay: 0,
        duration: 1000,
        easing: 'ease',
        mirror: true,
      });
      window.addEventListener('scroll', () => {
        AOS.refresh();
      });
    }, 1);
  });
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
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
.collapse:not(.collapse-close) > :where(input[type="checkbox"]:checked ~ .collapse-content) {
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
</style>