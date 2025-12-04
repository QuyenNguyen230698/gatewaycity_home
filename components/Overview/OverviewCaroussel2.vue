<template>
    <div class="flex flex-col bg-custom-green">
        <div class="relative w-full pb-24 md:pb-32 lg:pb-20">
            <div class="container mx-auto w-full grid grid-cols-1 md:grid-cols-2">
                <div class="col-start-2 md:px-6">
                    <NuxtImg src="/image/gatewaycity/background.jpg" alt="text" class="w-full md:h-full object-contain md:px-4" />
                </div>
            </div>
            <div class="flex flex-col absolute top-0 left-0 right-0 z-10">
                <!-- Title -->
                <div class="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 py-10 overflow-hidden">
                    <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="col-span-1 md:px-24 pb-4 md:pb-0 order-1 md:order-2">
                        <p data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-white font-montserrat-bold px-6 lg:px-12 text-xl md:text-2xl lg:text-4xl md:text-end">Quy Mô <br> & Phân Khu</p>
                    </div>
                    <div class="col-span-1 px-10 md:px-0 order-2 md:order-1">
                        <p data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-white text-sm lg:text-base"><span class="text-white font-montserrat-bold text-lg md:text-xl lg:text-3xl">• Khu A:</span> <br>
                        Trung tâm thương mại, công trình dịch vụ, căn hộ du lịch, nhà phố thương mại liên kế.</p>
                        <br>
                        <p data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-white text-sm lg:text-base"><span class="text-white font-montserrat-bold text-lg md:text-xl lg:text-3xl">• Khu B:</span> <br>
                        Biệt thự đơn lập, biệt thự song lập, nhà phố thương mại liên kế.</p>
                        <br>
                        <p data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-white text-sm lg:text-base"><span class="text-white font-montserrat-bold text-lg md:text-xl lg:text-3xl">• Tổng số sản phẩm:</span> <br>
                        304 căn và 1 trung tâm thương mại quy mô lớn nhất khu vực.</p>                  
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
                                ? 'w-2/3 md:w-1/3 lg:w-1/4'  // Hình 2: 50% của w-3/4 = 37.5%
                                : 'w-2/3 md:w-1/2 lg:w-1/2'      // Hình 1 & 3: giữ nguyên
                            ]"
                        >
                            <NuxtImg
                            :src="`/image/gatewaycity/carousel${n}.jpg`"
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
                        <HomeTest :isHidden="true"/>
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