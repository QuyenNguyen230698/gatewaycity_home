<template>
    <div class="flex flex-col bg-custom-green">
        <div class="relative w-full pb-40 md:pb-80 lg:pb-40">
            <div class="container mx-auto w-full grid grid-cols-1 md:grid-cols-2">
                <div class="col-span-1 md:px-6">
                    <NuxtImg src="/image/gatewaycity/background.jpg" alt="text" class="w-full h-full object-contain md:px-4" />
                </div>
            </div>
            <div class="flex flex-col absolute top-0 left-0 right-0 z-10">
                <!-- Title -->
                <div class="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 py-4 md:py-10 overflow-hidden">
                    <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="col-span-1 md:px-12 pb-4 md:pb-0">
                        <NuxtImg src="/image/tienich/text-1.png" alt="text" class="w-full h-auto object-contain px-4" />
                    </div>
                    <div class="col-span-1 px-4 md:px-0">
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
                            v-for="(n, index) in 3"
                            :key="n"
                            :class="[
                            'flex-shrink-0',
                            index === 1 
                                ? 'w-2/3 md:w-1/2 lg:w-1/2'
                                : 'w-2/3 md:w-1/2 lg:w-1/2'
                            ]"
                        >
                            <NuxtImg
                            :src="`/image/tienich/1carousel${n}.png`"
                            :alt="`Carousel image ${n}`"
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
                        <HomeTest />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const container = ref(null)
const track = ref(null)
const translateX = ref(0)
const isInView = ref(false)
const hasEntered = ref(false)
const entryDirection = ref(null)
let startProgress = 0

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
})

onUnmounted(() => {
  if (observer.value) observer.value.disconnect()
  window.removeEventListener('scroll', updateTranslate)
})
</script>

<style scoped>
img {
  image-rendering: -webkit-optimize-contrast;
}
.bg-img {
    background-image: url('/image/gatewaycity/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>