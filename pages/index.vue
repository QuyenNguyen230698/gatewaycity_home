<template>
    <LoadingScreen v-if="isLoading" />
    <div v-else class="flex flex-col">
        <HomeBanner :isBanner="true" :isVideo="false"></HomeBanner>
        <HomeCarousel></HomeCarousel>
        <HomeMap :isVideo="true"></HomeMap>
        <HomeCarousel2></HomeCarousel2>
        <HomeGeneralEnquiry></HomeGeneralEnquiry>
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