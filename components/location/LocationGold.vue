<template>
    <div class="flex flex-col">
        <div class="flex flex-col relative">
            <div class="w-full h-96 md:h-40r bg-custom-green flex flex-col gap-4 justify-center items-center">
                <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1765350129/Media%20Gateway%20City/ahcgawjch8r6gm74c2t0.png" alt="text" class="w-full h-full object-cover" />
            </div>
            <div class="w-full h-30r bg-custom-green hidden md:block"></div>
            <div class="bg-custom-green md:bg-transparent md:absolute  md:bottom-0 md:left-0 md:right-0 w-full z-10 grid grid-cols-12 justify-center items-center px-4 md:px-0">
                <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1765350331/Media%20Gateway%20City/pyevep6ewxkmkntseslx.png" alt="text" class="col-span-12 md:col-start-4 md:col-end-10 lg:col-start-5 lg:col-end-9 w-full h-auto object-contain" />
            </div>
            <div class="absolute top-40 right-0 left-0 z-20 w-full flex flex-col justify-center items-center">
                <NuxtImg data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" src="https://res.cloudinary.com/dpcigceaq/image/upload/v1765350150/Media%20Gateway%20City/ratczht9snmj5ddfcw2s.png" alt="text" class="w-3/4 lg:w-1/2 h-fit object-contain" />
                <span data-aos="fade-up" data-aos-offset="20" data-aos-delay="50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 md:size-8 lg:size-10 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                </span>
            </div>
            <div class="flex flex-col gap-6 md:gap-12 absolute -bottom-40 md:-bottom-48 lg:-bottom-80 left-0 right-0 justify-center items-center z-30">
                <!-- text -->
                <div class="flex flex-col gap-2 md:gap-6 w-full lg:w-1/2 px-12 md:px-6">
                    <p data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-white text-xs md:text-sm lg:text-base text-center">
                        <span class="font-montserrat-bold text-white text-lg lg:text-xl">Kết nối giao thông</span>
                        <br>
                        3 phút tới lối ra cao tốc TP. Hồ Chí Minh – Mỹ Thuận.
                        <br>
                        15 phút tới trung tâm hành chính TP. Vĩnh Long.
                        <br>
                        2 giờ 10 phút tới TP. Hồ Chí Minh.
                        <br>
                        Liền kề cầu Mỹ Thuận 1 và 2 – trục giao thông huyết mạch miền Tây.
                    </p>
                    <p data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-white text-xs md:text-sm lg:text-base text-center">
                        <span class="font-montserrat-bold text-white text-lg lg:text-xl">Hạ tầng khu vực</span>
                        <br>
                        Cầu Mỹ Thuận 2 hoàn thành năm 2023.
                        <br>
                        Cao tốc TP.HCM – Trung Lương – Mỹ Thuận đang mở rộng lên 6–8 làn xe, bổ sung làn dừng khẩn cấp và hạ tầng thông minh.
                        <br>
                        Cầu Cái Cam 2 đang thi công, cải thiện kết nối nội thành.
                    </p>
                    <p data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-white text-xs md:text-sm lg:text-base text-center">
                        <span class="font-montserrat-bold text-white text-lg lg:text-xl">Giá trị từ vị trí</span>
                        <br>
                        Nằm trên trục vận tải và thương mại quan trọng của khu vực.
                        <br>
                        Khả năng thu hút khách thuê và tăng giá trị bất động sản nhờ hạ tầng đồng bộ.
                        <br>
                        Tiềm năng khai thác du lịch đường sông và dịch vụ thương mại.
                    </p>
                </div>
                <!-- carousel -->
                <LocationCarousel />
            </div>
        </div>
        <div class="h-28 md:h-15r lg:h-20r w-full"></div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
img {
  image-rendering: -webkit-optimize-contrast;
}
.bg-map {
    background-image: url('https://res.cloudinary.com/dpcigceaq/image/upload/v1765350129/Media%20Gateway%20City/ahcgawjch8r6gm74c2t0.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>