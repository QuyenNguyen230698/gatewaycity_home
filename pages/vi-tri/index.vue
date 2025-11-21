<template>
    <LoadingScreen v-if="isLoading" />
    <div v-else class="flex flex-col">
        <LocationBanner />
        <LocationMap />
        <LocationGold />
        <HomeGeneralEnquiry></HomeGeneralEnquiry>
        <HomeNew></HomeNew>
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