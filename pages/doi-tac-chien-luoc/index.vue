<template>
    <LoadingScreen v-if="isLoading" />
    <section v-else class="flex flex-col">
        <div class="w-full h-96 md:h-35r lg:h-full lg:min-h-screen relative bg-custom-green">
            <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1766808901/Media%20Gateway%20City/teozush8hdgxklvihudy.jpg" alt="banner" class="w-full h-96 md:h-35r lg:h-full lg:min-h-screen object-cover absolute inset-0" />
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        </div>
        <div class="container mx-auto flex flex-col overflow-hidden py-8 md:py-14 lg:py-28">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center py-4 md:py-8 lg:py-16">
                <NuxtImg data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" src="https://res.cloudinary.com/dpcigceaq/image/upload/v1766150993/Media%20Gateway%20City/mzuqcatkgwynno7zbpap.png" alt="" class="w-full h-full object-contain pb-8 md:pb-0 md:pr-14 col-span-1" format="png" quality="85" loading="lazy" />
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-col gap-6 md:gap-8 col-span-1">
                    <div class="flex flex-col">
                        <h2 class="text-3xl lg:text-4xl">Giới thiệu BrandLift Asia</h2>
                    </div>
                    <h4 class="text-justify text-base md:text-lg">
                        <span class="font-montserrat-bold text-base md:text-lg">BrandLift Asia</span> là đơn vị tư vấn chiến lược và triển khai các giải
                        pháp <span class="font-montserrat-bold text-base md:text-lg">kinh doanh – tiếp thị – truyền thông thương hiệu tích hợp,</span>
                        hoạt động với vai trò như một tổng đại lý marketing đồng hành
                        cùng doanh nghiệp trên toàn bộ hành trình tăng trưởng.
                        BrandLift Asia không chỉ cung cấp dịch vụ truyền thông đơn lẻ,
                        mà xây dựng hệ sinh thái giải pháp gắn chặt giữa chiến lược
                        thương hiệu, hoạt động tiếp thị và mục tiêu kinh doanh, hướng
                        đến hiệu quả thực tế và giá trị bền vững trong dài hạn.
                    </h4>
                </div>
            </div>
        </div>
        <div class="bg-custom-green w-full py-14 lg:py-28 overflow-hidden">
            <div class="container mx-auto flex flex-col gap-16">
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-white gap-16 md:gap-0 grid grid-cols-1 md:grid-cols-2 w-full items-center">
                    <p class="text-base md:text-lg text-justify order-1">
                        Với triết lý lấy chiến lược làm nền tảng, lấy dữ liệu thị trường và
                        hành vi khách hàng làm trung tâm, BrandLift Asia hỗ trợ doanh
                        nghiệp xác lập định vị thương hiệu rõ ràng, nhất quán và phù hợp
                        với từng giai đoạn phát triển. Mỗi chiến lược được xây dựng đều
                        dựa trên nghiên cứu chuyên sâu, phân tích xu hướng ngành, năng
                        lực nội tại của doanh nghiệp và bối cảnh cạnh tranh, nhằm tạo ra
                        lợi thế khác biệt và khả năng mở rộng trong tương lai.
                    </p>
                    <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1766808901/Media%20Gateway%20City/qez7rl98ttvz5xhy5n0i.jpg" alt="Chiến lược phát triển" class="w-full h-auto object-contain order-2 md:order-1 md:px-8" />
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-white gap-16 md:gap-0 grid grid-cols-1 md:grid-cols-2 w-full items-center">
                    <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1766808901/Media%20Gateway%20City/diechyihbxxihojxoykk.jpg" alt="Chiến lược phát triển" class="w-full h-auto object-contain order-2 md:order-1 md:px-8" />
                    <p class="text-base md:text-lg text-justify order-1 md:order-2">
                        Sở hữu đội ngũ chuyên gia giàu kinh nghiệm trong các lĩnh vực
                        chiến lược thương hiệu, marketing tích hợp, nội dung sáng tạo,
                        truyền thông đa kênh và triển khai chiến dịch kinh doanh,
                        BrandLift Asia đóng vai trò là đối tác chiến lược lâu dài của doanh
                        nghiệp. Từ nghiên cứu thị trường, xác định chân dung khách hàng
                        mục tiêu, xây dựng hệ thống nhận diện thương hiệu, phát triển
                        thông điệp và nội dung, đến tổ chức và vận hành các chiến dịch
                        tiếp thị – truyền thông trên nhiều nền tảng, BrandLift Asia đảm
                        bảo mọi hoạt động đều được triển khai đồng bộ, nhất quán và tối
                        ưu hiệu quả.
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-white gap-16 md:gap-0 grid grid-cols-1 md:grid-cols-2 w-full items-center">
                    <p class="text-base md:text-lg text-justify order-1">
                        Không dừng lại ở việc xây dựng hình ảnh, BrandLift Asia đặc biệt
                        chú trọng đến hiệu quả kinh doanh và khả năng chuyển đổi thực
                        tế. Các giải pháp tiếp thị được thiết kế gắn liền với mục tiêu doanh
                        thu, độ phủ thị trường và năng lực bán hàng, thông qua việc đo
                        lường minh bạch, theo dõi sát sao và liên tục tối ưu trong quá trình
                        triển khai. Nhờ đó, BrandLift Asia giúp doanh nghiệp gia tăng độ
                        nhận diện thương hiệu, củng cố niềm tin với khách hàng, thúc đẩy
                        hành vi mua hàng và từng bước xây dựng vị thế vững chắc trên thị
                        trường.
                    </p>
                    <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1766808902/Media%20Gateway%20City/wegohuim8jfxgrqglftq.jpg" alt="Chiến lược phát triển" class="w-full h-auto object-contain order-2 md:px-8" />
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-white w-full">
                    <h4 class="text-base md:text-lg text-justify">
                        Với định hướng trở thành đối tác tổng thể về kinh doanh và tiếp thị tích hợp, BrandLift Asia cam kết đồng hành cùng doanh
                        nghiệp không chỉ trong các chiến dịch ngắn hạn, mà trong chiến lược phát triển dài hạn, góp phần nâng tầm thương hiệu và tạo
                        dựng giá trị tăng trưởng bền vững theo thời gian.
                    </h4>
                </div>
            </div>
        </div>
        <div class="w-full container mx-auto bg-transparent overflow-hidden flex flex-col gap-10 md:py-14 lg:py-28">
            <div class="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-y-16 items-center">
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-col gap-2 lg:gap-6 w-full h-full col-span-1">
                    <h2 class="text-lg md:text-xl lg:text-4xl">Giới thiệu SCID</h2>
                    <h4 class="text-base md:text-lg text-justify">
                        <span class="font-montserrat-bold text-base md:text-lg">SCID</span> là đơn vị hoạt động trong lĩnh vực nghiên cứu, phát triển và
                        tư vấn giải pháp chiến lược, hướng đến việc nâng cao năng lực
                        cạnh tranh và giá trị dài hạn cho doanh nghiệp. <br>
                        Với nền tảng chuyên môn vững chắc cùng phương pháp tiếp cận
                        bài bản, SCID cung cấp các giải pháp dựa trên dữ liệu, phân tích
                        thị trường và xu hướng phát triển, hỗ trợ doanh nghiệp đưa ra
                        quyết định hiệu quả, tối ưu nguồn lực và phát triển bền vững trong
                        môi trường kinh doanh nhiều biến động.
                    </h4>
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="col-span-1 lg:px-14">
                    <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1766151016/Media%20Gateway%20City/nvg7ptfibc7hp6bavv7j.png" alt="" class="w-full h-auto object-cover" format="webp" quality="85" loading="lazy" />
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="col-span-1 lg:px-14">
                    <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1766151016/Media%20Gateway%20City/nqm9rdwbvkqs9n2elddo.png" alt="" class="w-full h-auto object-cover" format="webp" quality="85" loading="lazy" />
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-col gap-2 lg:gap-6 w-full h-full col-span-1">
                    <h2 class="text-lg md:text-xl lg:text-4xl">Giới thiệu HDBank</h2>
                    <h4 class="text-base md:text-lg text-justify">
                        <span class="font-montserrat-bold text-base md:text-lg">HDBank</span> là một trong những ngân hàng thương mại cổ phần
                        hàng đầu Việt Nam, hoạt động với định hướng phát triển hiện đại,
                        an toàn và bền vững. <br>
                        HDBank cung cấp đa dạng các sản phẩm và dịch vụ tài chính –
                        ngân hàng dành cho khách hàng cá nhân, doanh nghiệp và nhà
                        đầu tư, đồng thời không ngừng đổi mới công nghệ, nâng cao chất
                        lượng dịch vụ nhằm mang đến trải nghiệm thuận tiện, minh bạch
                        và hiệu quả cho khách hàng trên toàn quốc.
                    </h4>                
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 md:hidden items-center py-14">
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-col gap-6 w-full h-full col-span-1">
                    <h2 class="text-3xl">Giới thiệu SCID</h2>
                    <h4 class="text-base md:text-lg text-justify">
                        <span class="font-montserrat-bold text-base md:text-lg">SCID</span> là đơn vị hoạt động trong lĩnh vực nghiên cứu, phát triển và
                        tư vấn giải pháp chiến lược, hướng đến việc nâng cao năng lực
                        cạnh tranh và giá trị dài hạn cho doanh nghiệp. <br>
                        Với nền tảng chuyên môn vững chắc cùng phương pháp tiếp cận
                        bài bản, SCID cung cấp các giải pháp dựa trên dữ liệu, phân tích
                        thị trường và xu hướng phát triển, hỗ trợ doanh nghiệp đưa ra
                        quyết định hiệu quả, tối ưu nguồn lực và phát triển bền vững trong
                        môi trường kinh doanh nhiều biến động.
                    </h4>
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="col-span-1 lg:px-14 pt-4">
                    <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1766151016/Media%20Gateway%20City/nvg7ptfibc7hp6bavv7j.png" alt="" class="w-full h-auto object-cover" format="webp" quality="85" loading="lazy" />
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-col gap-6 w-full h-full col-span-1 pt-14">
                    <h2 class="text-3xl">Giới thiệu HBBank</h2>
                    <h4 class="text-base md:text-lg text-justify">
                        <span class="font-montserrat-bold text-base md:text-lg">HDBank</span> là một trong những ngân hàng thương mại cổ phần
                        hàng đầu Việt Nam, hoạt động với định hướng phát triển hiện đại,
                        an toàn và bền vững. <br>
                        HDBank cung cấp đa dạng các sản phẩm và dịch vụ tài chính –
                        ngân hàng dành cho khách hàng cá nhân, doanh nghiệp và nhà
                        đầu tư, đồng thời không ngừng đổi mới công nghệ, nâng cao chất
                        lượng dịch vụ nhằm mang đến trải nghiệm thuận tiện, minh bạch
                        và hiệu quả cho khách hàng trên toàn quốc.
                    </h4>  
                </div>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="col-span-1 lg:px-14">
                    <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1766151016/Media%20Gateway%20City/nqm9rdwbvkqs9n2elddo.png" alt="" class="w-full h-auto object-cover" format="webp" quality="85" loading="lazy" />
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