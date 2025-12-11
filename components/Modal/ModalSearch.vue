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
      <div class="flex flex-col gap-2 w-full h-full items-start justify-start">
        <div :class="searchInputValue.length > 0 ? 'h-72 px-4 py-2' : ''" class="text-nowrap overflow-hidden flex flex-col w-full overflow-y-auto scroll-smooth scrollable">
          <!-- <div class="flex flex-col">
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
          </div> -->
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
            :to="result.slug.startsWith('/') ? result.slug : `/${result.slug}`"
            external
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
const recommendedData = ref([]);

// References for search input and value
const searchInput = ref(null);
const searchInputValue = ref('');
const searchData = ref([]);
const dataSearch = ref(null);

const fetchSearchResults = async (query) => {
    try {
        const config = useRuntimeConfig().public;
        const result = await $fetch(`${config.apiBase}/search/list`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ q: query }),
        });
        if (!result) {
            throw new Error('Network response was not ok');
        }
        return await result.data;
    } catch (error) {
        console.error('Error fetching search results:', error);
        return [];
    }
};

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
const handleInput = $_.debounce(async (event) => {
    searchInputValue.value = event.target.value;
    const query = searchInputValue.value.toLowerCase();
    dataSearch.value = await fetchSearchResults(query);
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
const showModal = async() => {
  clearInput();
  searchData.value = await fetchSearchResults('');
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