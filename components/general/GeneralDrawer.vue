<template>
    <!-- Image Drawer -->
    <div class="drawer drawer-custom-center">
        <input id="btn-image" type="checkbox" class="drawer-toggle" v-model="imageStore.isOpen"
            @change="imageStore.setIsOpen($event.target.checked)" />
        <div class="drawer-content"></div>
        <ImageDrawer @close="closeImage" />
    </div>

</template>

<script setup>
const imageStore = useImageStore();
// Computed property để kiểm tra xem có drawer nào đang mở hay không
const isAnyDrawerOpen = computed(() => {
    return (
        imageStore.isOpen
    );
});
// Export biến cho component cha
defineExpose({
    isAnyDrawerOpen
});

const closeImage = () => {
    imageStore.setIsOpen(false);
};
onMounted(() => {

});
</script>

<style lang="scss" >
.drawer-custom-top .drawer-top>.drawer-toggle:checked~.drawer-side>*:not(.drawer-overlay) {
    transform: translateY(0%);
}

.drawer-custom-top .drawer-top>.drawer-toggle~.drawer-side>*:not(.drawer-overlay) {
    transform: translateY(-100%);
}

.drawer-custom-top .drawer-side>*:not(.drawer-overlay) {
    transform: translateY(-100%);
}


/* New center-to-full-page drawer styles  For image */
.drawer-custom-center .drawer-side > *:not(.drawer-overlay) {
    transform: scale(0.5);
    opacity: 0;
    transform-origin: center;
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.5);
    width: 100%;
    height: 100%;
}

.drawer-custom-center .drawer-toggle:checked ~ .drawer-side > *:not(.drawer-overlay) {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
}

/* Ensure overlay covers the entire screen */
.drawer-custom-center .drawer-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
}

.drawer-custom-center .drawer-toggle:checked ~ .drawer-overlay {
    opacity: 1;
}
</style>
