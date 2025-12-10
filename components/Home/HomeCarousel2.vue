<template>
    <div class="flex flex-col bg-transparent overflow-hidden">
        <div ref="container" class=" relative pb-12">
            <div
            ref="track"
            class="flex gap-4 lg:gap-8 transition-transform duration-300 ease-out"
            :style="{ transform: `translateX(${translateX}px)` }"
            >
            <div
                v-for="(image, index) in images.slice(0,3)"
                :key="image"
                :class="[
                'flex-shrink-0',
                index === 1 
                    ? 'w-2/3 md:w-1/2 lg:w-1/2'
                    : 'w-2/3 md:w-1/2 lg:w-1/2'
                ]"
            >
                <NuxtImg
                :src="image"
                :alt="`Carousel image ${index}`"
                class="w-full h-full shadow-lg object-cover"
                loading="lazy"
                width="1200"
                height="800"
                quality="80"
                />
            </div>
            </div>

            <!-- Button -->
            <div class="absolute left-0 right-0 bottom-0 w-full flex justify-center pb-1">
                <button @click="actionShowImage(0)"
                    ref="buttonRef"
                    class="group relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-custom-green hover:bg-pyramid-gold text-white border border-pyramid-gold font-medium text-sm overflow-hidden cursor-pointer transition-all duration-500 shadow-md focus:outline-none"
                    aria-label="Xem thêm"
                    :class="isHidden ? 'hidden' : ''"
                >
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
                    <span class="relative z-10 flex items-center">
                    Xem <br> thêm
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from "gsap";
const imageStore = useImageStore();
const container = ref(null)
const track = ref(null)
const translateX = ref(0)
const isInView = ref(false)
const hasEntered = ref(false)
const entryDirection = ref(null)
let startProgress = 0

let animation = null
const buttonRef = ref(null)
const circleRef = ref(null)
let ctx = null
// Bán kính và chu vi
const radius = 50
const circumference = 2 * Math.PI * radius

const images = [
    'https://res.cloudinary.com/dpcigceaq/image/upload/v1765351922/Media%20Gateway%20City/xpbqs7fx2mjd9i4sithy.jpg',
    'https://res.cloudinary.com/dpcigceaq/image/upload/v1765351929/Media%20Gateway%20City/r7yff3mvo9f1gwqleh2a.jpg',
    'https://res.cloudinary.com/dpcigceaq/image/upload/v1765351922/Media%20Gateway%20City/sommucyatrxujenestoo.jpg',
    'https://res.cloudinary.com/dpcigceaq/image/upload/v1765282952/Media%20Gateway%20City/vsmugwgweicb8kc1dybr.jpg',
    'https://res.cloudinary.com/dpcigceaq/image/upload/v1765285097/Media%20Gateway%20City/gqkdcy0xk2ggoooxoidb.jpg'
]

const actionShowImage = (index) => {
  let updatedImages = [...images];
  imageStore.setListImage(updatedImages, index);
  imageStore.setIsOpen(true);
};

// Tính chiều dài cần dịch
const getMaxTranslate = () => {
  if (!track.value || !container.value) return 0
  return -(track.value.scrollWidth - container.value.offsetWidth)
}

// Xác định hướng vào viewport
const detectEntryDirection = () => {
  if (!container.value) return
  const rect = container.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight

  if (rect.top >= 0 && rect.top < viewportHeight * 0.3) {
    return 'bottom'
  }
  if (rect.bottom > viewportHeight * 0.7) {
    return 'top'
  }
  return null
}

// Cập nhật translateX theo scroll
const updateTranslate = () => {
  if (!container.value || !track.value || !isInView.value) return

  const containerRect = container.value.getBoundingClientRect()
  const maxTranslate = getMaxTranslate()

  const scrollTop = window.scrollY
  const viewportTop = scrollTop
  const viewportBottom = scrollTop + window.innerHeight
  const elementTop = containerRect.top + scrollTop
  const elementBottom = elementTop + containerRect.height

  let progress = 0
  const total = window.innerHeight + containerRect.height
  const enteredFromTop = viewportBottom - elementTop
  const enteredFromBottom = elementBottom - viewportTop

  if (!hasEntered.value) {
    const direction = detectEntryDirection()
    startProgress = direction === 'top' ? 0 : direction === 'bottom' ? 1 : 0.5
    hasEntered.value = true
    entryDirection.value = direction
  }

  if (entryDirection.value === 'top') {
    progress = Math.max(0, Math.min(1, enteredFromTop / total))
  } else {
    progress = Math.max(0, Math.min(1, enteredFromBottom / total))
    progress = 1 - progress
  }

  translateX.value = maxTranslate * progress
}

// Intersection Observer
const observer = ref(null)
onMounted(() => {
  observer.value = new IntersectionObserver(
    ([entry]) => {
      isInView.value = entry.isIntersecting
      if (isInView.value && !hasEntered.value) {
        requestAnimationFrame(updateTranslate)
      }
    },
    { threshold: [0, 0.1, 0.5, 0.9, 1] }
  )

  if (container.value) {
    observer.value.observe(container.value)
  }

  window.addEventListener('scroll', updateTranslate, { passive: true })
      // Animation
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
  if (observer.value) observer.value.disconnect()
  window.removeEventListener('scroll', updateTranslate)
  if (animation) animation.kill()
})
</script>

<style scoped>
img {
  image-rendering: -webkit-optimize-contrast;
}
</style>