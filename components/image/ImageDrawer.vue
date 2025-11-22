<template>
  <div class="drawer-side fixed z-50 top-0 left-0 w-full h-[100vh]">
    <label
      for="btn-sort"
      aria-label="close sidebar"
      class="drawer-overlay bg-black-hole bg-opacity-70"
      @click="actionClose"
    ></label>
    <div
      class="menu flex flex-col bg-black-hole backdrop-blur-lg bg-opacity-70 w-full h-full overflow-hidden p-0 transition-transform duration-700 ease-in-out"
      :class="{ 'translate-x-0': imageStore.isOpen, 'translate-x-full': !imageStore.isOpen }"
    >
      <div class="flex flex-col w-full h-full">
        <!-- Main image display (carousel) -->
        <div
          class="w-full flex-1 relative overflow-hidden"
          @mousedown="startDrag"
          @mousemove="handleDrag"
          @mouseup="endDrag"
          @mouseleave="endDrag"
          @touchstart="startDrag"
          @touchmove="handleDrag"
          @touchend="endDrag"
        >
          <div
            class="flex h-full transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${imageStore.currentIndexImage * 100}%)` }"
          >
            <div
              v-for="(image, index) in paddedImages"
              :key="image.key"
              class="w-full h-full flex-shrink-0 relative flex items-center justify-center"
            >
              <NuxtImg
                :src="image.src"
                :alt="image.alt"
                preload
                class="max-w-full max-h-full object-contain select-none"
                :class="{ 'opacity-0': imageLoading[index], 'opacity-100': !imageLoading[index] }"
                draggable="false"
                @dragstart.prevent
                @load="handleImageLoad(index)"
                @error="handleImageError(index)"
              />
              <div
                v-if="imageLoading[index]"
                class="absolute inset-0 flex items-center justify-center bg-stone-100 bg-opacity-50"
              >
                <span class="loading loading-ring text-white w-6 h-6"></span>
              </div>
              <div
                v-if="!imageLoading[index] && !image.src"
                class="absolute inset-0 flex items-center justify-center text-red-500"
              >
                Failed to load image
              </div>
            </div>
          </div>
        </div>

        <!-- Thumbnail list at bottom center -->
        <div class="w-full h-20 relative">
          <div
            ref="thumbnailContainer"
            class="absolute bottom-1 left-1/2 -translate-x-1/2 w-full max-w-80 sm:max-w-80 md:max-w-96 lg:max-w-lg flex flex-row gap-1 bg-stone-100 bg-opacity-80 rounded-xl p-2 shadow-even overflow-x-auto"
          >
            <div
              v-for="(image, index) in paddedImages"
              :key="image.key"
              class="relative flex-shrink-0 cursor-pointer w-16 h-16"
              @click="setCurrentImageByIndex(index)"
              :aria-label="`Select image ${index + 1}`"
            >
              <NuxtImg
                :src="image.src"
                :alt="image.alt"
                class="w-16 h-16 object-cover bg-transparent rounded transition-all duration-300 ease-in-out"
                :class="{
                  'ring-2 ring-pyramid-gold ring-offset-2': index === imageStore.currentIndexImage,
                  'opacity-60 hover:opacity-100': index !== imageStore.currentIndexImage,
                }"
                draggable="false"
                @dragstart.prevent
              />
            </div>
          </div>
        </div>
      </div>

      <div class="absolute top-5 right-5">
        <span
          @click="actionClose"
          class="flex justify-center items-center cursor-pointer btn-ghost btn-circle p-2 rounded-full text-white bg-neutral-800 hover:bg-neutral-500"
          aria-label="Close"
        >
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
      </div>
    </div>
  </div>
</template>



<script setup>

// Khởi tạo store
const imageStore = useImageStore();
const emit = defineEmits(['close']);
const imageLoading = ref([]); // Mảng để theo dõi trạng thái loading của từng hình ảnh
const isDragging = ref(false);
const startX = ref(0);
const dragThreshold = 100;
const thumbnailContainer = ref(null); // Ref cho thumbnail container

// Computed properties
const listImage = computed(() => imageStore.getListImage || []);
// const paddedImages = computed(() => {
//   return listImage.value.map((item, index) => ({
//     src: item?.image && item.image !== '' ? item.image : '/placeholder.png',
//     alt: item?.alt || `Image ${index + 1}`,
//     key: `image-${index}-${Date.now()}`,
//   }));
// });

const paddedImages = computed(() => {
  return listImage.value.map((item, index) => ({
    src: item && item !== '' ? item : '/placeholder.png',
    alt: item?.alt || `Image ${index + 1}`,
    key: `image-${index}-${Date.now()}`,
  }));
});

// Khởi tạo trạng thái loading cho từng hình ảnh
watch(
  () => listImage.value,
  (newList) => {
    imageLoading.value = new Array(newList.length).fill(true);
  },
  { immediate: true }
);

// Căn giữa thumbnail được chọn
watch(() => imageStore.currentIndexImage, (newIndex) => {
  if (newIndex >= 0 && newIndex < listImage.value.length && thumbnailContainer.value) {
    const thumbnail = thumbnailContainer.value.children[newIndex];
    if (thumbnail) {
      thumbnail.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }
});

// Set current image by index
const setCurrentImageByIndex = (index) => {
  if (index === imageStore.currentIndexImage) return;
  if (index >= 0 && index < listImage.value.length) {
    imageStore.currentIndexImage = index;
  }
};

// Drag handlers
const startDrag = (event) => {
  event.preventDefault();
  if (event.type.includes('touch')) {
    startX.value = event.touches[0].clientX;
  } else {
    startX.value = event.clientX;
  }
  isDragging.value = true;
};

const handleDrag = (event) => {
  if (!isDragging.value) return;
  event.preventDefault();
};

const endDrag = (event) => {
  if (!isDragging.value) return;
  let endX;
  if (event.type.includes('touch')) {
    endX = event.changedTouches[0].clientX;
  } else {
    endX = event.clientX;
  }
  const diffX = endX - startX.value;
  
  if (Math.abs(diffX) > dragThreshold) {
    if (diffX > 0 && imageStore.currentIndexImage > 0) {
      setCurrentImageByIndex(imageStore.currentIndexImage - 1); // Previous
    } else if (diffX < 0 && imageStore.currentIndexImage < listImage.value.length - 1) {
      setCurrentImageByIndex(imageStore.currentIndexImage + 1); // Next
    }
  }
  isDragging.value = false;
};

// Handle image load/error
const handleImageLoad = (index) => {
  imageLoading.value[index] = false;
};

const handleImageError = (index) => {
  imageLoading.value[index] = false;
};

const actionClose = () => {
  imageStore.setIsOpen(false);
  imageStore.reset();
  emit('close');
};

// Khởi tạo index ban đầu
onMounted(() => {
  if (listImage.value.length > 0 && imageStore.currentIndexImage === 0) {
    setCurrentImageByIndex(0); // Đảm bảo highlight thumbnail đầu tiên
  }
});
</script>

<style scoped>
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
.overflow-x-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.drawer-side > div {
  transform: translateX(-100%);
  transition: transform 0.8s ease-in-out;
}
.drawer-side > div.is-open {
  transform: translateX(0);
}
.menu {
  transform: translate(-50%, -50%) scale(1) !important;
}

/* Cải thiện cuộn thumbnail trên mobile */
.overflow-x-auto {
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}
.overflow-x-auto > div {
  scroll-snap-align: center; /* Căn giữa thumbnail được chọn */
}
</style>