<template>
    <div class="flex flex-col bg-custom-green">
        <div class="relative w-full pb-48 md:pb-80 lg:pb-44">
            <div class="container mx-auto w-full grid grid-cols-1 md:grid-cols-2">
                <div class="col-span-1 md:px-6">
                    <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1765350331/Media%20Gateway%20City/pyevep6ewxkmkntseslx.png" alt="text" class="w-full h-full object-contain md:px-4" />
                </div>
            </div>
            <div class="flex flex-col absolute top-0 left-0 right-0 z-10">
                <!-- Title -->
                <div class="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 py-4 md:py-10 overflow-hidden">
                    <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="col-span-1 md:px-12 pb-4 md:pb-0">
                        <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1765355067/Media%20Gateway%20City/w92gznlgd22sxfozbnwq.png" alt="text" class="w-full h-auto object-contain px-12 md:px-4" />
                    </div>
                    <div class="col-span-1 px-10 md:px-0">
                        <p data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-white text-xs md:text-sm lg:text-base"><span class="font-montserrat-bold uppercase">SENSE FESTI VĨNH LONG</span> – Trung tâm thương mại – giải trí lớn nhất miền Tây</p>
                        <br>
                        <p data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-white text-xs md:text-sm lg:text-base">Vị trí chiến lược: cửa ngõ trung tâm hành chính mới, giữa cầu Mỹ Thuận 1 và 2, liền kề cao tốc TP.HCM – Cần Thơ</p>
                        <br>
                        <p data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-white text-xs md:text-sm lg:text-base">
                            Tiện ích nổi bật:
                            <br>
                            Trung tâm mua sắm và đại siêu thị quy mô lớn
                            <br>
                            Sân khấu nhạc nước ngoài trời cho lễ hội, sự kiện
                            <br>
                            Khu ẩm thực đa dạng từ địa phương đến quốc tế
                            <br>
                            Không gian giải trí trong nhà và ngoài trời
                            <br>
                            Sense Festi Vĩnh Long sẽ trở thành biểu tượng mua sắm – giải trí – văn hóa của miền Tây, gia tăng mạnh mẽ giá trị cho Gateway City.
                        </p>
                    </div>
                </div>
                <!-- Carousel -->
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
    'https://res.cloudinary.com/dpcigceaq/image/upload/v1765355439/Media%20Gateway%20City/d0lraq5ky0lb3hh6doos.png',
    'https://res.cloudinary.com/dpcigceaq/image/upload/v1765355438/Media%20Gateway%20City/n3rjg1oardfdtmemw0uk.jpg',
    'https://res.cloudinary.com/dpcigceaq/image/upload/v1765355440/Media%20Gateway%20City/xfuolgrd1kbxx01tltbp.png',
    'https://res.cloudinary.com/dpcigceaq/image/upload/v1765355446/Media%20Gateway%20City/jr9twaowo9cdsplg98s7.png',
    'https://res.cloudinary.com/dpcigceaq/image/upload/v1765355438/Media%20Gateway%20City/bq0aiplh6wfr8v30vy4p.png'
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
.bg-img {
    background-image: url('https://res.cloudinary.com/dpcigceaq/image/upload/v1765350331/Media%20Gateway%20City/pyevep6ewxkmkntseslx.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>