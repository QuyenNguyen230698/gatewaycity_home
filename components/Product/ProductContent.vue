<template>
    <div class="flex flex-col">
        <div class="relative w-full h-30r md:h-33r lg:h-full bg-custom-green">
            <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="w-full h-4/5 md:h-full container mx-auto grid grid-cols-12">
                <div class="col-span-12 md:col-start-4 md:col-end-10 lg:col-start-5 lg:col-end-9 w-full h-4/5 md:h-full">
                    <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1765350331/Media%20Gateway%20City/pyevep6ewxkmkntseslx.png" alt="text" class="w-full h-full object-cover" />
                </div>
            </div>
            <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="absolute left-0 right-0 top-0 md:top-20 h-full flex flex-col items-center">
                <h2 class="text-white text-2xl md:text-3xl lg:text-4xl py-4 lg:py-6 text-center">Tiện Ích Dự Án</h2>
                <p class="text-sm md:text-base text-white text-center w-full lg:w-1/2 px-6 pb-12"><span class="font-montserrat-bold text-sm md:text-base">Gateway City Vĩnh Long</span> sở hữu hệ tiện ích khép kín theo mô hình All-In-Compound, mang đến đầy đủ trải nghiệm sống – kinh doanh – nghỉ dưỡng trong cùng một quần thể. Dự án nổi bật với quảng trường trung tâm quy mô lớn, bến du thuyền và tuyến phố ven sông mang phong cách thương cảng hiện đại. Clubhouse tiêu chuẩn nghỉ dưỡng, hồ bơi, phòng gym và khu sinh hoạt cộng đồng đáp ứng nhu cầu chăm sóc sức khỏe và thư giãn hằng ngày...
                    <span class="text-sm md:text-base underline"><NuxtLink external to="/tien-ich-du-an">Xem thêm</NuxtLink></span>
                </p>
                <div class="">
                    <HomeCarousel2 />
                </div>
            </div>
        </div>
        <div class="h-24 lg:h-64 bg-white"></div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>