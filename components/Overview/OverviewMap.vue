<template>
    <div class="flex flex-col">
        <div class="relative">
            <div class="w-full h-96 md:h-40r bg-custom-green">
                <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1765350129/Media%20Gateway%20City/ahcgawjch8r6gm74c2t0.png" alt="text" class="w-full h-full object-cover" />
            </div>
            <div class="absolute inset-0 z-20 w-full flex flex-col justify-center items-center">
                <NuxtImg data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" src="https://res.cloudinary.com/dpcigceaq/image/upload/v1765350150/Media%20Gateway%20City/ratczht9snmj5ddfcw2s.png" alt="text" class="w-3/4 lg:w-1/2 h-fit object-contain" />
                <span data-aos="fade-up" data-aos-offset="20" data-aos-delay="50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 md:size-8 lg:size-10 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                </span>
            </div>
        </div>
        <div class="relative w-full h-full">
            <!-- video -->
            <div v-if="isVideo" class="w-full h-96 md:h-40r lg:h-full lg:min-h-screen relative">
                <video ref="video" preload="auto" webkit-playsinline="true" playsinline="true" autoplay muted loop
                    class="object-cover w-full h-full absolute inset-0 aspect-square lg:aspect-auto" :src="videoSrc" title="Video TranDuc Corporation"
                    alt="Video" style="object-position: top;">
                </video>
            </div>
        </div>
    </div>
</template>

<script setup>

import AOS from 'aos';
import 'aos/dist/aos.css';

const props = defineProps({
    isVideo: {type: Boolean, default: true}
})

const videoSrc = ref('https://res.cloudinary.com/dgkceewlq/video/upload/v1763050492/Gateway_Map_2_megnwx.mov')
const video = ref(null)


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

</style>