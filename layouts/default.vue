<template>
  <ClientOnly>
    <div>
      <HeaderApp @open-search="showSearchModal" />
      <slot />
      <FooterApp />
      <ButtonScrollToTopButton />
      <ModalSearch ref="modalSearch" />
    </div>
  </ClientOnly>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';

const modalSearch = ref(null);

// Hàm để mở modal tìm kiếm
const showSearchModal = () => {
  modalSearch.value?.show();
};

// Expose hàm showSearchModal cho các component con (nếu cần)
defineExpose({
  showSearchModal,
});

// Khởi tạo AOS khi component được mount
onMounted(() => {
  nextTick().then(() => {
    setTimeout(() => {
      AOS.init({
        once: false,
        offset: 5,
        delay: 0,
        duration: 1000,
        easing: 'ease',
        mirror: true,
      });
      window.addEventListener('scroll', () => {
        AOS.refresh();
      });
    }, 1);
  });
});
</script>

<style lang="scss" scoped>
/* Thêm style nếu cần */
</style>
