<template>
    <div>
    <button
      @click="openModal"
      class="fixed bottom-20 right-3 lg:right-8 bg-black-hole text-white p-2 rounded-full shadow-lg hover:bg-custom-green transition-colors translate-all duration-500 ease-in-out z-30"
      :class="{ 'opacity-0 pointer-events-none animate-jump-out': !isVisible, 'opacity-100 animate-jump-in': isVisible }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
      </svg>
    </button>
    <dialog ref="popUp" class="modal items-center h-auto backdrop-blur-sm">
        <div
          class="modal-box relative text-center w-11/12 h-fit overflow-hidden rounded-lg p-0 max-w-2xl"
        >
          <form method="dialog">
            <button
              class="absolute top-3 right-3 focus-visible:outline-none"
            >
            <span
                class="flex justify-center items-center cursor-pointer text-white focus-visible:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="size-6 md:size-7 lg:size-8 focus:outline-none"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </span>
            </button>
          </form>
    
          <section class="w-full h-96 md:h-25r lg:h-30r bg-white">
            <NuxtImg
                :src="quoteProject.imageBanner"
                alt="Quote Banner"
                class="w-full h-full object-cover"
              />
          </section>
          <div class="absolute left-0 right-0 bottom-5 md:bottom-10 flex items-center justify-center">
            <button class="font-montserrat-bold bg-white rounded-full w-10/12 py-1 titlelg">Get a quote</button>
          </div>
        </div>
      </dialog>
  </div>
  <!-- <div>
    <button
      @click="openModal"
      class="fixed bottom-20 right-3 lg:right-8 bg-black-hole text-white p-2 rounded-full shadow-lg hover:bg-custom-green transition-colors translate-all duration-500 ease-in-out z-30"
      :class="{ 'opacity-0 pointer-events-none animate-jump-out': !isVisible, 'opacity-100 animate-jump-in': isVisible }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
      </svg>
    </button>
    <dialog ref="popUp" class="modal items-center h-auto backdrop-blur-sm">
        <div
          class="modal-box relative text-center w-11/12 h-fit overflow-hidden rounded-lg max-w-2xl"
          :class="popUpRender.useWidth + ' ' + popUpRender.usePadding"
        >
          <form method="dialog">
            <button
              class="focus:outline-none font-montserrat-regular absolute right-5 top-3 text-lg border bg-black-hole text-white hover:bg-stone-500 px-2 flex items-center justify-center"
              :class="isCloseIcon === true ? 'block' : 'hidden'"
            >
              {{ popUpRender.closebtn }}
            </button>
          </form>
    
          <section class="w-full bg-white">
            <NuxtLink :to="popUpRender.slug"
              class="w-full h-auto"
            >
              <NuxtImg
                :src="popUpRender.bannerDesktop"
                alt="Popup banner"
                class="w-full h-full"
              />
            </NuxtLink>
          </section>
        </div>
      </dialog>
  </div> -->
</template>

<script setup>

const route = useRoute();
const config = useRuntimeConfig();
const payload = async () => {
  try {
    const result = await $fetch(`${config.public.apiBase}/pop-up/list`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (result.data && result.data?.length > 0) {
      popUpRender.value = {
        slug: result.data[0].slug || "/",
        bannerDesktop: result.data[0].bannerDesktop || "https://imagedelivery.net/-tulz6ZB1FiuYVxo4sc-HQ/9d263162-745d-4456-709a-ad433e8dba00/2K",
        bannerMobile: result.data[0].bannerMobile || "https://imagedelivery.net/-tulz6ZB1FiuYVxo4sc-HQ/a1903794-1448-4cad-abff-96b5d5cd4200/2K",
        useWidth: result.data[0].useWidth || "max-w-2xl",
        usePadding: result.data[0].usePadding || "p-0",
        closeIcon: result.data[0].closeIcon === "true",
        closebtn: result.data[0].textbtn || "Close",
      };

      isCloseIcon.value = popUpRender.value.closeIcon;
    }
  } catch (error) {
    console.error("Lỗi tải dữ liệu popup:", error);
  }
};
const popUpRender = ref({
  "slug":"/",
  "bannerDesktop":"https://imagedelivery.net/-tulz6ZB1FiuYVxo4sc-HQ/a1903794-1448-4cad-abff-96b5d5cd4200/2K",
  "bannerMobile":"https://imagedelivery.net/-tulz6ZB1FiuYVxo4sc-HQ/a1903794-1448-4cad-abff-96b5d5cd4200/2K",
  "useWidth":"max-w-2xl",
  "usePadding":"p-0",
  "closeIcon":"true",
  "closebtn":"Close"
})
  
  const isCloseIcon = ref(popUpRender.value.closeIcon === "true" ? true : false);
  const isVisible = ref(false);
  const popUp = ref(null);
  const checkScroll = () => {
    isVisible.value = window.pageYOffset > 300;
  };
  
  const openModal = () => {
    popUp.value.showModal();
  };
  
  const closeModal = () => {
    popUp.value.close();
  };

  const { getProjectBySlug } = useProjects();

  // Computed để lấy item từ data dựa trên route.params.slug
  const quoteProject = computed(() => {
    return getProjectBySlug(route.params.slug);
  });
  
  onMounted(() => {
    window.addEventListener("scroll", checkScroll);
    setTimeout(() => {
      payload()
    }, 1)
  });
  
  onUnmounted(() => {
    window.removeEventListener("scroll", checkScroll);
  });
  
  defineExpose({
    show: openModal,
    close: closeModal,
  });
</script>