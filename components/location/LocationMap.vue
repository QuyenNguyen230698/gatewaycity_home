<template>
    <div class="flex flex-col">
        <div class="relative w-full h-full">
            <!-- video -->
            <div v-if="isVideo" class="w-full h-64 md:h-35r lg:h-full lg:min-h-screen relative">
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