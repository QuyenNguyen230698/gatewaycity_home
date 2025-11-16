<template>
  <button
    ref="buttonRef"
    class="group relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-custom-green hover:bg-pyramid-gold text-white border border-pyramid-gold font-medium text-sm overflow-hidden cursor-pointer transition-all duration-500 shadow-md hover:shadow-xl focus:outline-none"
    aria-label="Xem thêm"
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
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

const buttonRef = ref(null)
const circleRef = ref(null)
let ctx = null

// Bán kính và chu vi
const radius = 50
const circumference = 2 * Math.PI * radius

onMounted(() => {
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
</script>

<style scoped>
button {
  padding: 0;
}
</style>