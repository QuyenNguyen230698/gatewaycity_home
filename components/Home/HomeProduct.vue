<template>
  <div class="w-full pt-4 lg:pt-8 flex flex-col justify-center items-center">
    <h1 data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-2xl md:text-5xl text-custom-green text-center mb-6 md:mb-8">Sản phẩm</h1>
    <!-- Tab Buttons -->
    <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-wrap justify-center gap-2 md:gap-8 lg:gap-16 mb-6 md:mb-8">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="[
          'px-4 py-1 md:px-6 md:py-2 text-xs md:text-sm font-medium transition-all duration-500 rounded-full font-montserrat-medium',
          activeTab === index
            ? 'bg-custom-green text-white border border-pyramid-gold'
            : 'bg-white hover:bg-custom-green hover:text-white border border-pyramid-gold'
        ]"
      >
        {{ tab.title }}
      </button>
    </div>

    <!-- Tab Content -->
    <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="grid grid-cols-10 h-35r w-full">
      <!-- Text Section (3/10) -->
      <div class="col-span-10 md:col-span-3 grid grid-cols-4 justify-center items-center bg-img py-4 h-15r md:h-full">
        <h3 data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-2xl md:text-2xl lg:text-4xl text-center md:text-start text-white col-span-4 md:col-start-2 md:col-end-5 lg:col-end-4">
          {{ tabs[activeTab].title }}
        </h3>
        <ul class="hidden md:block space-y-2 lg:space-y-4 text-white md:col-start-2 md:col-end-4">
          <li v-for="(feature, i) in tabs[activeTab].features" :key="i" class="flex flex-col items-start">
            <p data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-sm lg:text-base">{{ feature.title }}</p>
            <h3 data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-sm lg:text-base">{{ feature.des }}</h3>
          </li>
        </ul>
        <ul class="md:hidden gap-2 text-white col-span-4 grid grid-cols-2">
          <li v-for="(feature, i) in tabs[activeTab].features" :key="i" class="flex flex-col items-start"
          :class="{'pl-8': (i + 1) % 2 === 1,'pr-8': (i + 1) % 2 === 0 }">
            <p data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-xs md:text-sm lg:text-base">{{ feature.title }}</p>
            <h3 data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-xs md:text-sm lg:text-base">{{ feature.des }}</h3>
          </li>
        </ul>
      </div>

      <!-- Carousel Section (7/10) -->
      <div class="col-span-10 md:col-span-7 relative bg-gray-50 overflow-hidden h-20r md:h-full">
        <div class="relative h-full">
          <!-- Images -->
          <transition-group name="fade" tag="div" class="absolute inset-0 w-full h-full">
            <img
              v-for="(img, i) in tabs[activeTab].images"
              :key="i"
              v-show="currentImage === i"
              :src="img"
              alt="Product image"
              class="w-full h-full object-cover"
            />
          </transition-group>

          <!-- Prev Button -->
          <button
            @click="prevImage"
            class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-transparent hover:bg-white/80 border border-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Next Button -->
          <button
            @click="nextImage"
            class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-transparent hover:bg-white/80 border border-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Dots Indicator -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 gap-2 hidden">
            <button
              v-for="(img, i) in tabs[activeTab].images"
              :key="i"
              @click="currentImage = i"
              :class="[
                'w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300',
                currentImage === i ? 'bg-pyramid-gold w-6 md:w-8' : 'bg-white/60'
              ]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// === TAB DATA ===
const tabs = [
  {
    title: 'BIỆT THỰ ĐƠN LẬP',
    features: [
        {
            title: 'TỔNG DIỆN TÍCH ĐẤT',
            des: '188m2 - 238m2',
        },
        {
            title: 'TỔNG DIỆN TÍCH SÀN SỬ DỤNG (*)',
            des: '340m2 - 360m2',
        },
        {
            title: 'SỐ TẦNG',
            des: '1 Trệt, 2 Lầu',
        },
        {
            title: 'SỐ PHÒNG',
            des: '4 Phòng Ngủ - 5 WC',
        },
    ],
    images: [
      '/image/gatewaycity/biet-thu-don-lap.jpg',
      '/image/gatewaycity/biet-thu-don-lap.jpg',
      '/image/gatewaycity/biet-thu-don-lap.jpg'
    ]
  },
  {
    title: 'BIỆT THỰ SONG LẬP',
    features: [
        {
            title: 'TỔNG DIỆN TÍCH ĐẤT',
            des: '200m2 - 300m2',
        },
        {
            title: 'TỔNG DIỆN TÍCH SÀN SỬ DỤNG (*)',
            des: '400m2 - 450m2',
        },
        {
            title: 'SỐ TẦNG',
            des: '1 Trệt, 2 Lầu',
        },
        {
            title: 'SỐ PHÒNG',
            des: '4 Phòng Ngủ - 5 WC',
        },
    ],
    images: [
      '/image/gatewaycity/biet-thu-song-lap.jpg',
      '/image/gatewaycity/biet-thu-song-lap.jpg',
      '/image/gatewaycity/biet-thu-song-lap.jpg'
    ]
  },
  {
    title: 'NHÀ PHỐ THƯƠNG MẠI',
    features: [
        {
            title: 'TỔNG DIỆN TÍCH ĐẤT',
            des: '188m2 - 238m2',
        },
        {
            title: 'TỔNG DIỆN TÍCH SÀN SỬ DỤNG (*)',
            des: '340m2 - 360m2',
        },
        {
            title: 'SỐ TẦNG',
            des: '1 Trệt, 2 Lầu',
        },
        {
            title: 'SỐ PHÒNG',
            des: '4 Phòng Ngủ - 5 WC',
        },
    ],
    images: [
      '/image/gatewaycity/thanh-pho-thuong-mai.jpg',
      '/image/gatewaycity/thanh-pho-thuong-mai.jpg',
      '/image/gatewaycity/thanh-pho-thuong-mai.jpg'
    ]
  }
]

// === STATE ===
const activeTab = ref(0)
const currentImage = ref(0)

// === CAROUSEL LOGIC ===
const nextImage = () => {
  const len = tabs[activeTab.value].images.length
  currentImage.value = (currentImage.value + 1) % len
}

const prevImage = () => {
  const len = tabs[activeTab.value].images.length
  currentImage.value = (currentImage.value - 1 + len) % len
}

// Reset carousel khi đổi tab
watch(activeTab, () => {
  currentImage.value = 0
})

// Auto-play (tùy chọn)
let interval = null
// onMounted(() => {
//   interval = setInterval(nextImage, 10000)
// })
// onUnmounted(() => {
//   clearInterval(interval)
// })
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.bg-img {
    background-image: url('https://res.cloudinary.com/dpcigceaq/image/upload/v1765350331/Media%20Gateway%20City/pyevep6ewxkmkntseslx.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>