<template>
    <div class="flex flex-col">
        <div class="w-full h-full min-h-screen relative bg-custom-green">
            <NuxtImg src="/image/gatewaycity/banner1.jpg" alt="banner" class="w-full h-full min-h-screen object-cover absolute inset-0" />
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
            <div class="absolute -bottom-28 left-0 right-0 w-full z-10">
                <div class="container">
                    <NuxtImg src="/image/gatewaycity/Text1.png" alt="text" class="w-3/4 h-fit object-contain" />
                </div>
            </div>
        </div>
        <div class="w-full h-full min-h-screen bg-custom-green">
            <div class="grid grid-cols-12 container mx-auto">
                <div class="col-span-6 w-full">
                    <h1 class="text-white text-5xl font-montserrat-medium mt-40">Tổng Quan</h1>
                </div>
                <div class="col-start-7 col-end-12 w-full h-full relative">
                    <NuxtImg src="/image/gatewaycity/background.jpg" alt="text" class="w-full h-full object-contain" />
                    <div class="absolute inset-0 mt-40 flex flex-col px-4">
                        <p class="text-pyramid-gold text-2xl">GATEWAY CITY VĨNH LONG LÀ KHU ĐÔ THỊ THƯƠNG MẠI – DỊCH VỤ – NGHỈ DƯỠNG KHÉP KÍN ĐẦU TIÊN TẠI ĐỒNG BẰNG SÔNG CỬU LONG,</p>
                        <p class="text-white text-2xl">PHÁT TRIỂN THEO MÔ HÌNH <br> ALL-IN-COMPOUND</p>
                        <p class="text-white text-xl py-16">Tích hợp đầy đủ tiện ích, đảm bảo an ninh 24/7, kết hợp không gian sống, kinh doanh và nghỉ dưỡng trong cùng một quần thể.</p>
                        <p class="text-white flex items-center gap-2 text-lg">Tìm hiểu thêm <a href="">GATEWAY CITY</a>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>