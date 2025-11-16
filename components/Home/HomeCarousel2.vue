<template>
    <div class="flex flex-col bg-transparent">
        <div ref="container" class=" relative">
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
                    ? 'w-full md:w-3/4 lg:w-1/2'
                    : 'w-full md:w-3/4 lg:w-1/2'
                ]"
            >
                <NuxtImg
                :src="`/image/gatewaycity/bottomcarousel${n}.jpg`"
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
            <div class="absolute left-0 right-0 -bottom-12 w-full flex justify-center pb-1">
            <HomeTest />
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
</style>