<template>
    <LoadingScreen v-if="isLoading" />
    <div v-else class="flex flex-col">
        <OverviewBanner />
        <OverviewContent />
        <OverviewCarousel />
        <OverviewCaroussel2 />
        <OverviewMap/>
        <HomeProduct/>
        <HomeGeneralEnquiry/>
        <HomeNew/>
    </div>
</template>

<script setup>
const isLoading = ref(true)
onMounted(() => {
    setTimeout(() => {
        isLoading.value = false
    }, 1500)
})
</script>

<style lang="scss" scoped>

</style>