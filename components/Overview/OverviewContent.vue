<template>
    <div class="flex flex-col">
        <!-- video Section -->
        <div class="flex flex-col overflow-hidden">
            <div class="relative w-full h-30r md:h-33r lg:h-full bg-custom-green">
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="w-full h-4/5 md:h-full container mx-auto grid grid-cols-12">
                    <div class="col-span-12 md:col-start-4 md:col-end-10 lg:col-start-5 lg:col-end-9 w-full h-4/5 md:h-full">
                        <NuxtImg src="/image/gatewaycity/background.jpg" alt="text" class="w-full h-full object-cover" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="absolute left-0 right-0 top-0 h-full flex flex-col items-center">
                    <h2 class="text-white text-2xl md:text-3xl lg:text-4xl py-6 lg:py-12 text-center">Tổng Quan</h2>
                    <p class="text-sm md:text-base text-white text-center w-full lg:w-1/2 px-6 pb-6 md:pb-12">
                        <span class="font-montserrat-bold text-sm md:text-base">Gateway City Vĩnh Long</span> là
                        <span class="font-montserrat-bold text-sm md:text-base">khu đô thị thương mại – dịch vụ – nghỉ dưỡng khép kín đầu tiên tại Đồng bằng Sông Cửu Long,</span> phát triển theo mô hình all-in-compound: tích hợp đầy đủ tiện ích, đảm bảo an ninh 24/7, kết hợp không gian sống, kinh doanh và nghỉ dưỡng trong cùng một quần thể.
                    </p>
                    <div class="flex flex-col gap-3 pb-6 md:pb-12">
                        <p class="text-xs md:text-sm text-white text-center">Cảm hứng đằng sau <span class="font-montserrat-bold text-sm md:text-base">GATEWAY CITY</span></p>
                        <a href="" target="_blank" class="text-sm md:text-base text-white text-center px-8 py-2 rounded-full bg-pyramid-gold hover:bg-pyramid-gold/80 transition-colors duration-300">TẢI E-BROCHURE</a>
                    </div>
                    <div class="flex flex-col gap-4 lg:gap-8 justify-center items-center w-4/5 lg:w-2/3">
                        <NuxtImg data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" src="/image/gatewaycity/videoBanner.png" alt="video" class="w-full h-fit object-contain" />
                        <h1 data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-white text-base md:text-3xl lg:text-4xl">Giới thiệu dự án Gateway City - Vĩnh Long</h1>
                    </div>
                </div>
            </div>
            <div class="h-32 md:h-20r lg:h-30r bg-custom-green"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>