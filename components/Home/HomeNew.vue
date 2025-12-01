<template>
    <div class="w-full h-full container mx-auto overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16 py-8 md:py-16 justify-stretch">
            <div class="col-span-1 flex flex-col gap-6 h-full">
                <h2 data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-2xl lg:text-4xl">Tin Tức</h2>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-col gap-3 w-full h-full">
                    <NuxtImg src="/image/gatewaycity/tintuc.png" class="w-full h-64 md:h-96 object-cover"/>
                    <h3 class="text-base md:text-lg lg:text-xl">GATEWAY CITY VĨNH LONG CÔNG BỐ TIẾN ĐỘ MỚI – HOÀN THIỆN HẠ TẦNG LÕI & TIỆN ÍCH TRỌNG ĐIỂM</h3>
                    <p class="text-sm md:text-base lg:text-base font-montserrat-medium">Gateway City Vĩnh Long vừa cập nhật tiến độ xây dựng mới nhất trong tháng này, đánh dấu nhiều hạng mục trọng điểm bước vào giai đoạn hoàn thiện. Hiện tại, tuyến đường nội khu chính đã được trải nhựa, hệ thống điện – nước âm và chiếu sáng công cộng đã lắp đặt gần như hoàn tất. Khu vực quảng trường trung tâm và tuyến phố ven sông đang thi công cảnh quan, dự kiến sẽ ra mắt trong thời gian tới. Bên cạnh đó, khu biệt thự và nhà phố thương mại đang được nhà thầu đẩy nhanh tiến độ để bàn giao đúng kế hoạch. Việc hạ tầng được hoàn thiện đồng bộ giúp dự án đạt tính hiện hữu cao, tạo thêm niềm tin cho khách hàng và thể hiện cam kết mạnh mẽ của chủ đầu tư trong việc xây dựng một quần thể All-In-Compound đầu tiên tại miền Tây.</p>
                    <NuxtLink to="" class="font-montserrat-regular w-fit text-sm flex items-center gap-1 md:pt-2">Thông tin chi tiết
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </NuxtLink>
                </div>
            </div>
            <div class="col-span-1 flex flex-col gap-6 h-full">
                <h2 data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-2xl lg:text-4xl">Sự Kiện</h2>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-col gap-3 w-full h-full">
                    <NuxtImg src="/image/gatewaycity/sukien.png" class="w-full h-64 md:h-96 object-cover"/>
                    <h3 class="text-base md:text-lg lg:text-xl">SỰ KIỆN – KHỞI CÔNG TRUNG TÂM THƯƠNG MẠI “NGHÌN TỈ” TẠI GATEWAY CITY</h3>
                    <p class="text-sm md:text-base lg:text-base font-montserrat-medium">Ngày 2/8/2025, tại khu đô thị Gateway City Vĩnh Long đã diễn ra lễ khởi công Trung tâm Thương mại SenseFesti với tổng vốn đầu tư gần 1.000 tỉ đồng, do Saigon Co.op (SCID) kết hợp cùng Tập đoàn Thành Đô phát triển. Đây sẽ là một trong những tổ hợp mua sắm – giải trí – ẩm thực hiện đại nhất miền Tây, đồng thời là tiện ích thương mại trọng điểm của Gateway City.</p>
                    <NuxtLink to="" class="font-montserrat-regular w-fit text-sm flex items-center gap-1 md:pt-2">Thông tin chi tiết
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </NuxtLink>
                </div>
            </div>
            <div v-if="doitac" class="col-span-1 flex flex-col gap-2">
                <h2 data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-2xl lg:text-4xl">Chủ đầu tư</h2>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex justify-center items-center py-10">
                    <NuxtImg src="/image/gatewaycity/thanhdogroup.png" class="w-full h-full object-cover"/>
                </div>
            </div>
            <div v-if="doitac" class="col-span-1 flex flex-col gap-2">
                <h2 data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-2xl lg:text-4xl">Đối tác</h2>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="grid grid-cols-3">
                    <NuxtImg src="/image/gatewaycity/brandliftasia.png" class="w-full h-full object-contain"/>
                    <NuxtImg src="/image/gatewaycity/hdbank.png" class="w-full h-full object-contain"/>
                    <NuxtImg src="/image/gatewaycity/scid.png" class="w-full h-full object-contain"/>
                    <NuxtImg src="/image/gatewaycity/vas.png" class="w-full h-full object-contain"/>
                    <NuxtImg src="/image/gatewaycity/hoaphat.png" class="w-full h-full object-contain"/>
                    <NuxtImg src="/image/gatewaycity/dic.png" class="w-full h-full object-contain"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    doitac: {
        type: Boolean,
        default: true
    }
})
</script>

<style lang="scss" scoped>

</style>