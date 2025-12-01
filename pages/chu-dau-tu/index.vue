<template>
    <LoadingScreen v-if="isLoading" />
    <section v-else class="flex flex-col">
        <div class="w-full h-96 md:h-35r lg:h-full lg:min-h-screen relative bg-custom-green">
            <NuxtImg src="/image/chudautu/chudautu2.jpg" alt="banner" class="w-full h-96 md:h-35r lg:h-full lg:min-h-screen object-cover absolute inset-0" />
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        </div>
        <div class="container mx-auto flex flex-col overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center py-4 md:py-8 lg:py-16">
                <NuxtImg data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" src="/image/gatewaycity/thanhdo-group-nobg.png" alt="" class="w-full h-full object-contain md:pr-14 col-span-1" format="png" quality="85" loading="lazy" />
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-col gap-2 md:gap-4 col-span-1">
                    <div class="flex flex-col">
                        <h2 class="text-xl md:text-2xl lg:text-4xl">Tập đoàn Thành Đô</h2>
                        <h3 class="text-base md:text-lg">Kiến tạo giá trị bền vững cho tương lai đô thị Việt Nam</h3>
                    </div>
                    <h4 class="text-justify text-base md:text-lg">Thành Đô Group là tập đoàn phát triển bất động sản và đầu tư đa ngành, định hình bởi tầm nhìn dài hạn, chiến lược khác biệt và khát vọng tiên phong trong kiến tạo các đô thị hiện đại. Với tinh thần “lấy con người làm trung tâm, lấy giá trị thật làm nền tảng”, Thành Đô Group đã từng bước khẳng định vị thế của mình trên thị trường bằng những dự án quy mô, chất lượng và giàu giá trị bền vững.</h4>
                </div>
            </div>
        </div>
        <div class="bg-custom-green w-full py-8 lg:py-16 overflow-hidden">
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-col gap-6 md:gap-8 lg:gap-10 text-white col-span-1">
                    <h2 class="text-3xl md:text-4xl lg:text-5xl text-center">•Tầm Nhìn</h2>
                    <p class="text-base text-justify">Trở thành tập đoàn đầu tư – phát triển đô thị hàng đầu Việt Nam, tiên phong trong việc dẫn dắt xu hướng đô thị mới, đóng góp vào sự phát triển thịnh vượng và bền vững của các địa phương.</p>
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-col gap-6 md:gap-8 lg:gap-10 text-white col-span-1">
                    <h2 class="text-3xl md:text-4xl lg:text-5xl text-center">•Sứ Mệnh</h2>
                    <p class="text-base text-center">
                        Kiến tạo những khu đô thị văn minh, hiện đại và giàu bản sắc.
                        <br>
                        <br>
                        Mang đến giá trị sống nâng cao cho cộng đồng cư dân.
                        <br>
                        <br>
                        Tạo ra các cơ hội đầu tư tăng trưởng dài hạn và an toàn.
                        <br>
                        <br>
                        Đồng hành cùng địa phương trong phát triển hạ tầng – kinh tế – xã hội.
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-col gap-6 md:gap-8 lg:gap-10 text-white col-span-1">
                    <h2 class="text-3xl md:text-4xl lg:text-5xl text-center">•Giá Trị Cốt Lõi</h2>
                    <p class="text-base text-center">
                        <span class="font-montserrat-bold text-base">Uy tín:</span> Cam kết rõ ràng, thực thi chuẩn mực, lấy chữ tín làm trọng tâm.
                        <br>
                        <br>
                        <span class="font-montserrat-bold text-base">Chất lượng:</span> Mỗi dự án đều hướng tới tiêu chuẩn cao về quy hoạch, tiện ích, pháp lý và vận hành.
                        <br>
                        <br>
                        <span class="font-montserrat-bold text-base">Bền vững:</span> Kiến tạo giá trị lâu dài cho nhà đầu tư, cư dân và cộng đồng địa phương.
                        <br>
                        <br>
                        <span class="font-montserrat-bold text-base">Đổi mới:</span> Ứng dụng tư duy hiện đại, công nghệ và mô hình quản trị tiên tiến.
                    </p>
                </div>
            </div>
        </div>
        <div class="w-full container mx-auto bg-transparent overflow-hidden flex flex-col gap-6 md:py-10 lg:py-6">
            <h2 data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-3xl md:text-4xl lg:text-5xl py-4">Lĩnh Vực Hoạt Động</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-col gap-2 lg:gap-6 w-full h-full col-span-1">
                    <h2 class="text-lg md:text-xl lg:text-3xl">1. Phát triển BĐS đô thị</h2>
                    <h4 class="text-base md:text-lg text-justify">Thành Đô Group phát triển nhiều dự án đô thị quy mô lớn tại các khu vực giàu tiềm năng, định hình phong cách sống mới, gắn với xu hướng phát triển của kinh tế ven biển, công nghiệp – dịch vụ và thương mại.</h4>
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="col-span-1 lg:px-14">
                    <NuxtImg src="/image/gatewaycity/banner1.jpg" alt="" class="w-full h-26r md:h-96 lg:h-25r object-cover" format="webp" quality="85" loading="lazy" />
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="col-span-1 lg:px-14">
                    <NuxtImg src="/image/chudautu/chudautu1.jpg" alt="" class="w-full h-26r md:h-96 lg:h-25r object-cover" format="webp" quality="85" loading="lazy" />
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-col gap-2 lg:gap-6 w-full h-full col-span-1">
                    <h2 class="text-lg md:text-xl lg:text-3xl">2. Đầu tư hạ tầng & khu công nghiệp</h2>
                    <h4 class="text-base md:text-lg text-justify">Tập đoàn tham gia đầu tư hệ thống hạ tầng, logistics và các khu công nghiệp thế hệ mới, tạo động lực thu hút dòng vốn FDI, thúc đẩy tăng trưởng kinh tế địa phương.</h4>
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-col gap-2 lg:gap-6 w-full h-full col-span-1">
                    <h2 class="text-lg md:text-xl lg:text-3xl">3. Dịch vụ – thương mại – du lịch</h2>
                    <h4 class="text-base md:text-lg text-justify">Phát triển chuỗi tiện ích đi kèm, từ thương mại – dịch vụ – lưu trú đến vận hành khu đô thị, góp phần hoàn thiện hệ sinh thái bền vững.</h4>
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="col-span-1 lg:px-14">
                    <NuxtImg src="/image/chudautu/banner-chudautu.jpg" alt="" class="w-full h-26r md:h-96 lg:h-25r object-cover" format="webp" quality="85" loading="lazy" />
                </div>
            </div>
        </div>
        <div class="bg-custom-green w-full py-8 lg:py-16 overflow-hidden">
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-col gap-6 md:gap-8 lg:gap-10 text-white col-span-1">
                    <h2 class="text-xl md:text-3xl lg:text-5xl">Dấu ấn phát triển</h2>
                    <p class="text-base">
                        Trong hành trình phát triển, Thành Đô Group đã góp phần tạo nên những chuyển biến tích cực cho các địa phương bằng:
                        <br>
                        • Các khu đô thị được quy hoạch đồng bộ.
                        <br>
                        • Hạ tầng giao thông – kỹ thuật hoàn thiện.
                        <br>
                        • Dòng vốn đầu tư mới chảy về các vùng đang trỗi dậy.
                        <br>
                        • Cộng đồng cư dân an cư ổn định, nâng cao chất lượng sống.
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-col gap-6 md:gap-8 lg:gap-10 text-white col-span-1">
                    <h2 class="text-xl md:text-3xl lg:text-5xl">Chiến lược phát triển</h2>
                    <p class="text-base">
                        • Mở rộng quỹ đất tại những khu vực giàu tiềm năng tăng trưởng.
                        <br>
                        • Tập trung phát triển các dự án đô thị quy mô lớn theo mô hình đô thị – cảng biển – công nghiệp.
                        <br>
                        • Hạ tầng giao thông – kỹ thuật hoàn thiện.
                        <br>
                        • Hợp tác chiến lược với các đơn vị tư vấn, thiết kế, tài chính và quản lý vận hành hàng đầu.
                        <br>
                        • Tiếp tục mở rộng sang lĩnh vực hạ tầng và dịch vụ đô thị.
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="gap-6 md:gap-8 lg:gap-10 text-white col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2">
                    <h2 class="text-xl md:text-3xl lg:text-5xl col-span-1 md:col-span-2">Cam kết với khách hàng & nhà đầu tư</h2>
                    <p class="text-base text-justify col-span-1">
                        Thành Đô Group cam kết phát triển những sản phẩm có giá trị thật, pháp lý minh bạch, tiến độ đảm bảo, chất lượng bền vững – mang đến sự an tâm cho khách hàng và gia tăng giá trị lâu dài cho nhà đầu tư.
                    </p>
                </div>
            </div>
        </div>
        <HomeNew :doitac="false"></HomeNew>
    </section>
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