<template>
  <dialog id="search-modal" class="modal items-center h-auto">
    <div
      class="modal-box h-auto w-11/12 max-w-3xl overflow-hidden rounded shadow-even flex flex-col p-0 bg-white text-black"
    >
      <!-- Search Bar -->
      <div class="w-full h-10 px-3 py-6 flex flex-row items-center justify-center border-b border-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <!-- Search Input -->
        <input
          ref="searchInput"
          type="text"
          placeholder="Search..."
          class="input text-lg outline-none focus:outline-none border-none input-md w-full max-w-5xl bg-white text-black"
          v-model="searchInputValue"
          @input="handleInput"
        />
        <svg
          v-if="searchInputValue"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 cursor-pointer hover:text-custom-green"
          @click="clearInput"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </div>
      <!-- Search Results -->
      <div class="flex flex-col gap-2 w-full h-full items-start justify-start px-4 py-2">
        <div :class="searchInputValue.length > 0 ? 'h-72' : 'h-28'" class="text-nowrap overflow-hidden flex flex-col w-full pb-4 overflow-y-auto scroll-smooth scrollable">
          <div class="flex flex-col">
            <div class="text-lg">
              <span class="font-montserrat-medium">Recommended</span>
            </div>
            <NuxtLink
              v-for="result in recommendedData"
              :key="'result-' + result.id"
              :to="result.slug"
              class="flex flex-row gap-2 h-fit items-start hover:text-custom-green"
              @click="closeModal"
            >
              <div class="flex flex-col items-start justify-center w-full">
                <div class="breadcrumbs text-base py-1">
                  <ul class="w-full max-w-full overflow-x-hidden">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="m2.25 12l8.955-8.955a1.124 1.124 0 0 1 1.59 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                    </li>
                    <li>{{ result.name }}</li>
                    <li v-if="result.child">{{ result.child }}</li>
                    <li v-if="result.description" class="w-full max-w-full">
                      <p class="max-w-xs md:max-w-md lg:max-w-lg truncate">{{ result.description }}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="text-sm font-normal">
            <span v-if="searchInputValue.length > 0">Results <span>({{ filteredResults.length }} items)</span></span>
          </div>
          <p v-if="filteredResults.length === 0" class="text-base text-gray-600 py-1 text-center">
            No results found
          </p>
          <NuxtLink
            v-for="result in filteredResults"
            v-if="searchInputValue.length > 0"
            :key="'result-' + result.id"
            :to="result.slug"
            class="flex flex-row gap-2 h-fit items-start hover:text-custom-green"
            @click="closeModal"
          >
            <div class="flex flex-col items-start justify-center w-full">
              <div class="breadcrumbs text-base py-1">
                <ul class="w-full max-w-full overflow-x-hidden">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m2.25 12l8.955-8.955a1.124 1.124 0 0 1 1.59 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </li>
                  <li>{{ result.name }}</li>
                  <li v-if="result.child">{{ result.child }}</li>
                  <li v-if="result.description" class="w-full max-w-full">
                    <p class="max-w-xs md:max-w-md lg:max-w-lg truncate">{{ result.description }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- Close Modal -->
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<script setup>
import { ref, computed } from 'vue';

// Dữ liệu gán cứng cho tìm kiếm
const searchData = ref([
  { id: 1, name: 'About', slug: '/about', description: 'Learn about our company' },
  { id: 2, name: 'What We Do', slug: '/why-modulux', child: 'Why Modulux', description: 'Discover why Modulux is unique' },
  { id: 3, name: 'What We Do', slug: '/our-technology', child: 'Our Technology', description: 'Explore our innovative technology' },
  { id: 4, name: 'What We Do', slug: '/technical-specification', child: 'Standard Inclusions', description: 'See our standard offerings' },
  { id: 5, name: 'What We Do', slug: '/our-process', child: 'Our Process', description: 'Understand our process' },
  { id: 6, name: 'What We Do', slug: '/projects', child: 'Projects', description: 'View our projects' },
  { id: 6.1, name: 'What We Do', slug: '/projects/hawaii-garden-studio', child: 'Projects', description: 'Hawaii Garden Studio' },
  { id: 7, name: 'What We Do', slug: '/projects/ecolux', child: 'Projects', description: 'Ecolux' },
  { id: 8, name: 'What We Do', slug: '/projects/greenscape', child: 'Projects', description: 'NAHB IBS 2024 (Las Vegas)' },
  { id: 9, name: 'What We Do', slug: '/projects/nahb-ibs-lv', child: 'Projects', description: 'NAHB IBS 2025 (Las Vegas)' },
  { id: 10, name: 'What We Do', slug: '/projects/the-building-show-2024-canada', child: 'Projects', description: 'The Building Show 2024 (Canada)' },
  { id: 11, name: 'What We Do', slug: '/projects/hawaii-garden-villa', child: 'Projects', description: 'Hawaii Garden Villa' },
  { id: 12, name: 'What We Do', slug: '/projects/hawaii-garden-villa', child: 'Projects', description: 'Hawaii Garden Villa' },
  { id: 13, name: 'What We Do', slug: '/projects/hawaii-garden-executive', child: 'Projects', description: 'Hawaii Garden Executive' },
  { id: 14, name: 'Blog', slug: '/blogs', description: 'Read our latest blog posts' },
  { id: 15, name: 'Blog', slug: '/blogs/modulux-homes-the-comprehensive-solution-for-developers-and-general-contractors-to-accelerate-progress-optimize-costs-and-control-quality', child: 'Blogs', description: 'Modulux Homes The Comprehensive Solution for Developers and General Contractors to Accelerate Progress, Optimize Costs, and Control Quality' },
  { id: 16, name: 'Blog', slug: '/blogs/powering-modulux-homes-modern-prefabricated-home-solution', child: 'Blogs', description: 'Powering Modulux Homes Modern Prefabricated Home Solution' },
  { id: 17, name: 'Blog', slug: '/blogs/tranduc-corporation-breaks-ground-on-nam-tan-uyen-factory', child: 'Blogs', description: 'TranDuc Corporation breaks ground on Nam Tan Uyen factory' },
  { id: 18, name: 'Blog', slug: '/blogs/tranduc-at-sydney-build-expo-2025-vietnamese-pioneer-showcases-green-building-solutions', child: 'Blogs', description: 'TranDuc at Sydney Build Expo 2025: Vietnamese Pioneer Showcases Green Building Solutions' },
  { id: 19, name: 'Blog', slug: '/blogs/modulux-homes-impressive-presence-at-nahb-ibs-2025', child: 'Blogs', description: "Modulux Homes' Impressive Presence at NAHB IBS 2025" },
  { id: 20, name: 'Contact', slug: '/contact?type=project', description: 'Get in touch with us' },
  { id: 21, name: 'Faqs', slug: '/faqs', description: 'Our FAQs' },
]);
const recommendedData = ref([
  { id: 1, name: 'What We Do', slug: '/projects/nahb-ibs-lv', child: 'Projects', description: 'NAHB IBS 2025 (Las Vegas)' },
  { id: 2, name: 'What We Do', slug: '/projects/the-building-show-2024-canada', child: 'Projects', description: 'The Building Show 2024 (Canada)' },
]);

// References for search input and value
const searchInput = ref(null);
const searchInputValue = ref('');

// Computed property to filter search results
const filteredResults = computed(() => {
  const query = searchInputValue.value.toLowerCase().trim();
  if (!query) {
    // Nếu không có query, trả về tất cả kết quả không trùng lặp
    const seenItems = new Set();
    return searchData.value.filter((item) => {
      const uniqueIdentifier = `${item.name}-${item.child || ''}`;
      const isUnique = !seenItems.has(uniqueIdentifier);
      if (isUnique) {
        seenItems.add(uniqueIdentifier);
        return true;
      }
      return false;
    });
  }

  // Lọc dựa trên query
  return searchData.value.filter((item) => {
    const nameMatch = item.name.toLowerCase().includes(query);
    const childMatch = item.child?.toLowerCase().includes(query) || false;
    const descriptionMatch = item.description?.toLowerCase().includes(query) || false;
    return nameMatch || childMatch || descriptionMatch;
  });
});

// Handle input changes with debounce
const { $_ } = useNuxtApp();
const handleInput = $_.debounce((event) => {
  searchInputValue.value = event.target.value; // Cập nhật searchInputValue từ sự kiện input
}, 500);

// Clear search input
const clearInput = () => {
  if (searchInput.value) {
    searchInput.value.value = '';
    searchInputValue.value = '';
  }
};

// Close modal
const closeModal = () => {
  clearInput();
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.close();
  }
};

// Open modal
const showModal = () => {
  clearInput();
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.showModal();
  }
};

// Expose methods for parent component
defineExpose({
  show: showModal,
  close: closeModal,
});
</script>

<style lang="scss" scoped>

</style>