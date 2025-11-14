<template>
    <LoadingScreen v-if="isLoading" />
    <div v-else class="flex flex-col gap-4 md:gap-8 lg:gap-16">
        <HomeBanner :isBanner="true" :isVideo="false"></HomeBanner>
        <HomeMap :isVideo="true"></HomeMap>
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