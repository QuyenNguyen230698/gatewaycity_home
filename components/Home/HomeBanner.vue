<template>
    <section class="relative bg-white w-full h-full">
        <!-- video -->
        <div v-if="isVideo" class="w-full h-64 md:h-35r lg:h-full lg:min-h-screen relative">
            <video ref="video" preload="auto" webkit-playsinline="true" playsinline="true" autoplay muted loop
                class="object-cover w-full h-full absolute inset-0 aspect-square lg:aspect-auto" :src="videoSrc" title="Video TranDuc Corporation"
                alt="Video" style="object-position: top;">
              </video>
        </div>
        <!-- Banner Image -->
        <div v-if="isBanner" class="relative w-full h-35r lg:h-full lg:min-h-screen">
            <div class="absolute inset-0 overflow-hidden w-full h-full">
                <NuxtImg :src="bannerSrc" alt="Banner" width="1920" height="1080"
                    class="w-full h-full aspect-auto lg:aspect-video object-cover" format="webp" quality="85" loading="eager" priority fetchpriority="high" />
            </div>
            <div class="absolute bottom-10 w-full h-full flex flex-col justify-end z-30">
                <div class="container mx-auto pb-10 md:pb-20 lg:pb-40 relative flex flex-col gap-5">
                    <div class="w-full text-white flex flex-col gap-5">
                        <div class="flex flex-col">
                            <div><p data-aos="fade-up"
                            data-aos-offset="20"
                            data-aos-delay="50"
                                 class="title2xl uppercase font-quicksand-regular text-gray-200">{{ $t('banner.title') }}</p></div>
                            <div><p data-aos="fade-up"
                            data-aos-offset="20"
                            data-aos-delay="100"
                                 class="title2xl uppercase font-quicksand-bold">{{ $t('banner.description') }}</p></div>
                        </div>
                    </div>
                    <button data-aos="fade-up"
                    data-aos-offset="20"
                    data-aos-delay="150"
                     class="font-geoform-medium w-fit bg-white text-black px-4 py-2 text-base hover:bg-gray-300 duration-300 ease-in-out">
                        <NuxtLink to="/projects">{{ $t('banner.button') }}</NuxtLink>
                    </button>
                </div>
            </div>
        </div>
        <div class="absolute flex items-end inset-0 bg-gradient-to-t from-black/60  to-transparent z-10"></div>
    </section>
</template>

<script setup>

import AOS from 'aos';
import 'aos/dist/aos.css';

const props = defineProps({
    isBanner: {type: Boolean, default: true},
    isVideo: {type: Boolean, default: false}
})

const videoSrc = ref('https://api-gateway.tranduc.com/api/video/tdc-video.mp4')
const video = ref(null)
const bannerSrc = ref('https://imagedelivery.net/KHaby7r0MOA4Gt7v7Yk1jg/a52f1a20-b2bb-4d4d-a002-ea57f0b77500/2K')


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