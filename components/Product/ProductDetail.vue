<template>
    <div class="flex flex-col">
        <!-- carousel Section-->
        <div class="grid grid-cols-10 h-35r lg:h-40r w-full">
            <!-- Text Section (3/10) -->
            <div class="col-span-10 md:col-span-3 grid grid-cols-4 justify-center items-center bg-img py-4">
                <h3 data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-2xl md:text-2xl lg:text-4xl text-white col-start-2 col-end-5 lg:col-end-4">
                {{ product.title }}
                </h3>
                <ul class="space-y-2 lg:space-y-4 text-white col-start-2 col-end-4">
                <li v-for="(feature, i) in product.features" :key="i" class="flex flex-col items-start">
                    <p data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-sm lg:text-base">{{ feature.title }}</p>
                    <h3 data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-sm lg:text-base">{{ feature.des }}</h3>
                </li>
                </ul>
            </div>

            <!-- Carousel Section (7/10) -->
            <div class="col-span-10 md:col-span-7 relative bg-custom-green overflow-hidden">
                <div class="relative h-64 md:h-35r lg:h-40r">
                <!-- Images -->
                <transition-group name="fade" tag="div" class="absolute inset-0">
                    <img
                    v-for="(img, i) in product.images"
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
                    v-for="(img, i) in product.images"
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
        <!-- Blueprint Section -->
        <div v-if="product.blueprint.length > 0" class="w-full bg-custom-green py-12 lg:py-20">
        <!-- Container giới hạn width tối đa -->
        <div class="container mx-auto px-4 lg:px-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            <!-- Mỗi item là 1 cột -->
            <div
                v-for="item in product.blueprint"
                :key="item.id"
                class="flex flex-col items-center"
            >
                <!-- Hình ảnh -->
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="w-full aspect-[4/3] overflow-hidden shadow-lg">
                <NuxtImg
                    :src="item.image"
                    alt="Blueprint"
                    class="w-full h-96 object-center object-cover transition-transform duration-500 hover:scale-105"
                />
                </div>

                <!-- Tên nằm dưới hình, căn giữa -->
                <h3 data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="mt-4 text-white uppercase text-lg xl:text-xl font-semibold tracking-wider text-center">
                {{ item.name }}
                </h3>
            </div>
            </div>
        </div>
        </div>
        <div v-else>
            <p class="text-white text-base text-center py-12 lg:py-20 bg-custom-green">Sản phẩm hiện đang cập nhật, vui lòng đợi</p>
        </div>
        <div v-if="product.blueprint.length > 0" class="flex flex-col bg-custom-green">

            <!-- Tabs -->
            <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50"
                class="flex flex-wrap justify-center gap-2 md:gap-8 lg:gap-16 mb-12 md:mb-20">
                <button
                    v-for="(tab, index) in tabs"
                    :key="index"
                    @click="switchTab(index)"
                    :class="[
                    'px-4 py-1 md:px-10 md:py-1 text-xs md:text-sm transition-all duration-500 rounded-full font-montserrat-medium',
                    activeTab === index
                        ? 'text-white border border-pyramid-gold bg-pyramid-gold'
                        : 'bg-custom-green hover:bg-pyramid-gold text-white border border-pyramid-gold'
                    ]"
                >
                    {{ tab.title }}
                </button>
            </div>

            <!-- Carousel -->
            <div ref="container" class="relative overflow-hidden pb-12 w-full">
                <div ref="track" class="flex gap-4 lg:gap-8 transition-transform duration-300 ease-out">
                    <!-- GSAP cần duplicating images để chạy loop -->
                    <template v-for="i in 2">
                        <div 
                            v-for="(img, index) in currentImages.slice(0,2)"
                            :key="`${i}-${index}`"
                            class="flex-shrink-0 w-2/3 md:w-1/2 lg:w-1/2 h-64 md:h-80 lg:h-30r"
                        >
                            <NuxtImg
                                :src="img"
                                class="w-full h-full shadow-lg object-cover"
                                width="1200"
                                height="800"
                                quality="80"
                                loading="lazy"
                            />
                        </div>
                    </template>
                </div>

                <div class="absolute left-0 right-0 bottom-0 w-full flex justify-center pb-1">
                      <button @click="actionShowImage(0)"
                            ref="buttonRef"
                            class="group relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-custom-green hover:bg-pyramid-gold text-white border border-pyramid-gold font-medium text-sm overflow-hidden cursor-pointer transition-all duration-500 shadow-md focus:outline-none"
                            aria-label="Xem thêm"
                            :class="isHidden ? 'hidden' : ''"
                        >
                            <!-- SVG Circle Border -->
                            <svg
                            class="absolute inset-0 w-full h-full pointer-events-none -rotate-90 z-10"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle
                                ref="circleRef"
                                cx="50"
                                cy="50"
                                r="50"
                                fill="none"
                                stroke="url(#gradient)"
                                stroke-width="1.5"
                                class="transition-all"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#ffffff" />
                                <stop offset="100%" stop-color="#ffffff" />
                                </linearGradient>
                            </defs>
                            </svg>

                            <!-- Nội dung nút -->
                            <span class="relative z-10 flex items-center">
                            Xem <br> thêm
                            </span>
                        </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from "gsap";
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const imageStore = useImageStore();

const currentImage = ref(0)
const tabs = [
    { title: "TẦNG 01", key: "floor1" },
    { title: "TẦNG 02", key: "floor2" },
    { title: "TẦNG 03", key: "floor3" }
]

const activeTab = ref(0)
const track = ref(null)
let animation = null
const buttonRef = ref(null)
const circleRef = ref(null)
let ctx = null

// Bán kính và chu vi
const radius = 50
const circumference = 2 * Math.PI * radius

const currentImages = computed(() => {
    return props.product[tabs[activeTab.value].key].image
})

const actionShowImage = (index) => {
  let updatedImages = [...props.product[tabs[activeTab.value].key].image];
  imageStore.setListImage(updatedImages, index);
  imageStore.setIsOpen(true);
};

/* ---- Hàm tạo GSAP Animation chạy vô hạn ---- */
const initSlide = () => {
    if (!track.value) return

    // Reset GSAP nếu có animation cũ
    if (animation) {
        animation.kill()
        animation = null
    }

    // Chuẩn bị chạy slide
    const trackWidth = track.value.scrollWidth / 2  // Vì mình duplicated images

    animation = gsap.to(track.value, {
        x: -trackWidth,
        duration: 30,         // tốc độ, càng nhỏ càng nhanh
        ease: "linear",
        repeat: -1,
        modifiers: {
            x: (x) => `${parseFloat(x) % trackWidth}px`
        }
    })
}

/* ---- Khi đổi tab → re-init GSAP ---- */
const switchTab = (index) => {
    activeTab.value = index
    nextTick(() => initSlide())
}

onMounted(() => {
    nextTick(() => initSlide())
      ctx = gsap.context(() => {
    // Đặt trạng thái ban đầu: dashoffset = chu vi (ẩn hoàn toàn)
    gsap.set(circleRef.value, {
      strokeDasharray: circumference,
      strokeDashoffset: circumference
    })

    const button = buttonRef.value

    // Hover vào: chạy hiệu ứng 1 lần
    button.addEventListener('mouseenter', () => {
      gsap.to(circleRef.value, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: 'power2.out'
      })

      // Phóng to nhẹ
      gsap.to(button, {
        duration: 0.3,
        ease: 'back.out(1.4)'
      })
    })

    // Rời chuột: reset border + scale
    button.addEventListener('mouseleave', () => {
      // Reset border về trạng thái ban đầu
      gsap.to(circleRef.value, {
        strokeDashoffset: circumference,
        duration: 0.6,
        ease: 'power1.in'
      })

      // Trở về kích thước ban đầu
      gsap.to(button, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
    })
  })
})

onBeforeUnmount(() => {
  if (ctx) ctx.revert()
})

onUnmounted(() => {
    if (animation) animation.kill()
})

// === CAROUSEL LOGIC ===
const nextImage = () => {
  const len = props.product.images.length
  currentImage.value = (currentImage.value + 1) % len
}

const prevImage = () => {
  const len = props.product.images.length
  currentImage.value = (currentImage.value - 1 + len) % len
}

</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.bg-img {
    background-image: url('/image/gatewaycity/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
img {
  image-rendering: -webkit-optimize-contrast;
}
</style>