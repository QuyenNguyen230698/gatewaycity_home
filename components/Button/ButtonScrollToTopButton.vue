<template>
    <button
      @click="scrollToTop"
      class="fixed bottom-8 right-3 lg:right-8 bg-black-hole text-white p-2 rounded-full shadow-lg hover:bg-custom-green transition-colors translate-all duration-500 ease-in-out z-30"
      :class="{ 'opacity-0 pointer-events-none animate-jump-out': !isVisible, 'opacity-100 animate-jump-in': isVisible }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </template>
  
  <script setup>
  
  const isVisible = ref(false)
  
  const checkScroll = () => {
    isVisible.value = window.pageYOffset > 300
  }
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  onMounted(() => {
    window.addEventListener('scroll', checkScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll)
  })
  </script>