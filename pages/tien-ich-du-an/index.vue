<template>
    <LoadingScreen v-if="isLoading" />
    <div v-else class="flex-flex-col">
        <UtilitiBanner></UtilitiBanner>
        <UtilitiCarousel></UtilitiCarousel>
        <UtilitiCarousel2></UtilitiCarousel2>
        <UtilitiCarousel3></UtilitiCarousel3>
        <UtilitiCarousel4></UtilitiCarousel4>
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