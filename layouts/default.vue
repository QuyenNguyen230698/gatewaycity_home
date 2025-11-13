<template>
  <ClientOnly>
      <template>
        <div>
          <HeaderApp @open-search="showSearchModal" />
          <slot />
          <FooterApp />
          <ButtonScrollToTopButton />
          <ModalSearch ref="modalSearch" />
        </div>
      </template>
  </ClientOnly>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';

const route = useRoute();
const popUp = ref(null);
const drawerRef = ref(null);
const modalSearch = ref(null);
const isAnyDrawerOpen = computed(() => drawerRef.value?.isAnyDrawerOpen);

// Kiểm tra xem route hiện tại có phải là projects/{slug}
const isProjectRoute = computed(() => {
  return route.path.startsWith('/projects/') && route.params.slug;
});

// Hàm để mở modal tìm kiếm
const showSearchModal = () => {
  modalSearch.value.show();
};

// Hàm để xử lý logic khi route thay đổi
const handleRouteChange = () => {
  nextTick().then(() => {
    if (isProjectRoute.value) {
      popUp.value?.show();
    } else {
      popUp.value?.hide();
    }
  });
};

// Expose hàm showSearchModal cho các component con
defineExpose({
  showSearchModal,
});

// Khởi tạo AOS và xử lý scroll
onMounted(() => {
  nextTick().then(() => {
    setTimeout(() => {
      handleRouteChange(); // Gọi lần đầu khi component được mount
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

// Theo dõi thay đổi route bằng watch
watch(() => route.path, () => {
  handleRouteChange();
});

// Hoặc sử dụng onBeforeRouteUpdate để xử lý khi route thay đổi
onBeforeRouteUpdate((to) => {
  nextTick().then(() => {
    if (to.path.startsWith('/projects/') && to.params.slug) {
      popUp.value?.show();
    } else {
      popUp.value?.hide();
    }
  });
});
</script>

<style lang="scss" scoped>
/* Thêm style nếu cần */
</style>