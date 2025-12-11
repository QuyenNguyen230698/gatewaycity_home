<template>
    <div class="w-full h-full container mx-auto overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16 py-8 md:py-16 justify-stretch">
            <div v-if="renderNews.length > 0" class="col-span-1 flex flex-col gap-6 h-full">
                <h2 data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-2xl lg:text-4xl">Tin Tức</h2>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-col gap-3 w-full h-full">
                    <NuxtImg :src="renderNews[0]?.src" class="w-full h-64 md:h-96 object-cover"/>
                    <h3 class="text-base md:text-lg lg:text-xl">{{ renderNews[0]?.title }}</h3>
                    <p class="text-sm md:text-base lg:text-base font-montserrat-medium">{{ renderNews[0]?.description }}</p>
                    <NuxtLink external :to="`/tin-tuc-va-su-kien/${renderNews[0]?.slug}`" class="font-montserrat-regular w-fit text-sm flex items-center gap-1 md:pt-2">Thông tin chi tiết
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </NuxtLink>
                </div>
            </div>
            <div v-if="renderEvents.length > 0" class="col-span-1 flex flex-col gap-6 h-full">
                <h2 data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-2xl lg:text-4xl">Sự Kiện</h2>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="flex flex-col gap-3 w-full h-full">
                    <NuxtImg :src="renderEvents[0]?.src" class="w-full h-64 md:h-96 object-cover"/>
                    <h3 class="text-base md:text-lg lg:text-xl">{{ renderEvents[0]?.title }}</h3>
                    <p class="text-sm md:text-base lg:text-base font-montserrat-medium">{{ renderEvents[0]?.description }}</p>
                    <NuxtLink external :to="`/tin-tuc-va-su-kien/${renderEvents[0]?.slug}`" class="font-montserrat-regular w-fit text-sm flex items-center gap-1 md:pt-2">Thông tin chi tiết
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
                    <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1765283240/Media%20Gateway%20City/ht9oeyhfxo8sqyv63ky2.png" class="w-full h-full object-cover"/>
                </div>
            </div>
            <div v-if="doitac" class="col-span-1 flex flex-col gap-2">
                <h2 data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="text-2xl lg:text-4xl">Đối tác</h2>
                <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="grid grid-cols-3">
                    <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1765352467/Media%20Gateway%20City/lgbcexzmlpngczwr6jms.png" class="w-full h-full object-contain"/>
                    <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1765352483/Media%20Gateway%20City/kmfylibskisqzu4mwoan.png" class="w-full h-full object-contain"/>
                    <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1765352497/Media%20Gateway%20City/uw30auydf71efrgh4zey.png" class="w-full h-full object-contain"/>
                    <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1765352509/Media%20Gateway%20City/ahunvxxfrg5he45nhj6s.png" class="w-full h-full object-contain"/>
                    <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1765352483/Media%20Gateway%20City/msbtlfay2dzqe6rpowxo.png" class="w-full h-full object-contain"/>
                    <NuxtImg src="https://res.cloudinary.com/dpcigceaq/image/upload/v1765352482/Media%20Gateway%20City/izonfxcii5laojufr1ah.png" class="w-full h-full object-contain"/>
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

const dataNews = ref([
//   {
//     _id: '68abd3e98587e969d74a1ba2',
//     slug: "gateway-city-vinh-long-cong-bo-tien-do-moi-hoan-thien-ha-tang-loi-tien-ich-trong-diem",
//     src: '/image/gatewaycity/tintuc.png',
//     type: 'NEWS',
//     status: 'published',
//     createdAt: '2025-08-25T03:09:29.943Z',
//     content: "<div style='background-color:#FFFFFF;color:#222222;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'><table role='presentation' style='margin:0 auto;max-width:100%;background-color:#FFFFFF' width='100%' align='center'><tbody><tr style='width:100%'><td><div style='font-weight:normal;padding:16px 0'>With the aim of solidifying its leading position in Vietnam and expanding into international markets, TranDuc participated in Sydney Build Expo 2025, a premier event showcasing advanced and sustainable construction solutions. As a top-tier enterprise in Vietnam, TranDuc presented its high-quality products, including engineered wood solutions, premium doors, and luxury prefabricated housing. TranDuc's participation in the expo underscores the company's commitment to promoting sustainable construction and collaborating with international businesses, particularly in the Australian market, which is experiencing strong growth in environmentally friendly building methods.</div><div style='padding:16px 0'><img class='e-rte-image e-imginline' style='outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%' src='https://imagedelivery.net/-tulz6ZB1FiuYVxo4sc-HQ/262b7ed0-ccf6-412c-5d5a-45acee324d00/2K' alt='Sample product'></div><div style='font-weight:normal;padding:16px 0'>Throughout the three-day event, TranDuc's booth garnered significant attention from a wide range of builders, architects, and developers from various countries. The standout solutions highlighted by TranDuc included:</div><div style='font-weight:normal;padding:16px 0'>Engineered Wood Solutions (Glulam &amp; CLT): TranDuc proudly stands as the first enterprise in Southeast Asia to own a CLT (Cross-Laminated Timber) production line – an advanced technology for producing high-strength, environmentally friendly wood components certified by the FSC. TranDuc's CLT products received high praise for their ability to minimize environmental impact and create sustainable structures.</div><div style='font-weight:normal;padding:16px 0'>Premium Door Solutions: TranDuc's exquisite door products offer superior aesthetics and exceptional performance in sound and thermal insulation. They are an ideal choice for high-end construction projects, meeting stringent international standards.</div><div style='font-weight:normal;padding:16px 0'>Luxury Prefabricated Housing Solutions: TranDuc showcased its range of high-end prefabricated houses, providing a solution that saves construction time and costs while ensuring high quality and aesthetic appeal. These products are a perfect choice for projects requiring high standards of sustainability and comfort.</div><div style='padding:16px 0'><img class='e-rte-image e-imginline' style='outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%' src='https://imagedelivery.net/-tulz6ZB1FiuYVxo4sc-HQ/c882f734-997a-4ad5-978d-cbbb3dbc7200/2K' alt='Sample product'></div><div style='font-weight:normal;padding:16px 0'>Australia is currently a frontrunner in adopting sustainable construction practices. At the expo, TranDuc had valuable opportunities to network and share its advanced building solutions with businesses in Sydney, supporting their journey towards sustainable development. Over the three days of the event, TranDuc's booth not only attracted strong interest from builders, architects, and developers but also fostered potential partnerships, opening doors for long-term growth in the Australian market and the Asia-Pacific region.</div><div style='font-weight:normal;padding:16px 0'>TranDuc is committed to continuously developing innovative and sustainable building solutions that meet stringent quality requirements and environmental protection standards. Participation in Sydney Build Expo 2025 marks a significant step in TranDuc's strategy for international expansion and market leadership. We are proud to bring building solutions that are not only advanced but also contribute to the sustainable development of the global construction industry.</div></td></tr></tbody></table></div>",
//     title: 'GATEWAY CITY VĨNH LONG CÔNG BỐ TIẾN ĐỘ MỚI – HOÀN THIỆN HẠ TẦNG LÕI & TIỆN ÍCH TRỌNG ĐIỂM',
//     description: 'Gateway City Vĩnh Long vừa cập nhật tiến độ xây dựng mới nhất trong tháng này, đánh dấu nhiều hạng mục trọng điểm bước vào giai đoạn hoàn thiện. Hiện tại, tuyến đường nội khu chính đã được trải nhựa, hệ thống điện – nước âm và chiếu sáng công cộng đã lắp đặt gần như hoàn tất. Khu vực quảng trường trung tâm và tuyến phố ven sông đang thi công cảnh quan, dự kiến sẽ ra mắt trong thời gian tới. Bên cạnh đó, khu biệt thự và nhà phố thương mại đang được nhà thầu đẩy nhanh tiến độ để bàn giao đúng kế hoạch. Việc hạ tầng được hoàn thiện đồng bộ giúp dự án đạt tính hiện hữu cao, tạo thêm niềm tin cho khách hàng và thể hiện cam kết mạnh mẽ của chủ đầu tư trong việc xây dựng một quần thể All-In-Compound đầu tiên tại miền Tây.'
//   },
//   {
//     _id: '68abd3e98587e969d74a1bbe',
//     slug: "su-kien-khoi-cong-trung-tam-thuong-mai-nghin-ti-tai-gateway-city",
//     src: '/image/gatewaycity/sukien.png',
//     type: 'EVENTS',
//     status: 'published',
//     createdAt: '2025-08-25T03:09:29.943Z',
//     content: "<div style='background-color:#FFFFFF;color:#222222;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'><table role='presentation' style='margin:0 auto;max-width:100%;background-color:#FFFFFF' width='100%' align='center'><tbody><tr style='width:100%'><td><div style='font-weight:normal;padding:16px 0'>With the aim of solidifying its leading position in Vietnam and expanding into international markets, TranDuc participated in Sydney Build Expo 2025, a premier event showcasing advanced and sustainable construction solutions. As a top-tier enterprise in Vietnam, TranDuc presented its high-quality products, including engineered wood solutions, premium doors, and luxury prefabricated housing. TranDuc's participation in the expo underscores the company's commitment to promoting sustainable construction and collaborating with international businesses, particularly in the Australian market, which is experiencing strong growth in environmentally friendly building methods.</div><div style='padding:16px 0'><img class='e-rte-image e-imginline' style='outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%' src='https://imagedelivery.net/-tulz6ZB1FiuYVxo4sc-HQ/262b7ed0-ccf6-412c-5d5a-45acee324d00/2K' alt='Sample product'></div><div style='font-weight:normal;padding:16px 0'>Throughout the three-day event, TranDuc's booth garnered significant attention from a wide range of builders, architects, and developers from various countries. The standout solutions highlighted by TranDuc included:</div><div style='font-weight:normal;padding:16px 0'>Engineered Wood Solutions (Glulam &amp; CLT): TranDuc proudly stands as the first enterprise in Southeast Asia to own a CLT (Cross-Laminated Timber) production line – an advanced technology for producing high-strength, environmentally friendly wood components certified by the FSC. TranDuc's CLT products received high praise for their ability to minimize environmental impact and create sustainable structures.</div><div style='font-weight:normal;padding:16px 0'>Premium Door Solutions: TranDuc's exquisite door products offer superior aesthetics and exceptional performance in sound and thermal insulation. They are an ideal choice for high-end construction projects, meeting stringent international standards.</div><div style='font-weight:normal;padding:16px 0'>Luxury Prefabricated Housing Solutions: TranDuc showcased its range of high-end prefabricated houses, providing a solution that saves construction time and costs while ensuring high quality and aesthetic appeal. These products are a perfect choice for projects requiring high standards of sustainability and comfort.</div><div style='padding:16px 0'><img class='e-rte-image e-imginline' style='outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%' src='https://imagedelivery.net/-tulz6ZB1FiuYVxo4sc-HQ/c882f734-997a-4ad5-978d-cbbb3dbc7200/2K' alt='Sample product'></div><div style='font-weight:normal;padding:16px 0'>Australia is currently a frontrunner in adopting sustainable construction practices. At the expo, TranDuc had valuable opportunities to network and share its advanced building solutions with businesses in Sydney, supporting their journey towards sustainable development. Over the three days of the event, TranDuc's booth not only attracted strong interest from builders, architects, and developers but also fostered potential partnerships, opening doors for long-term growth in the Australian market and the Asia-Pacific region.</div><div style='font-weight:normal;padding:16px 0'>TranDuc is committed to continuously developing innovative and sustainable building solutions that meet stringent quality requirements and environmental protection standards. Participation in Sydney Build Expo 2025 marks a significant step in TranDuc's strategy for international expansion and market leadership. We are proud to bring building solutions that are not only advanced but also contribute to the sustainable development of the global construction industry.</div></td></tr></tbody></table></div>",
//     title: 'SỰ KIỆN – KHỞI CÔNG TRUNG TÂM THƯƠNG MẠI “NGHÌN TỈ” TẠI GATEWAY CITY',
//     description: 'Ngày 2/8/2025, tại khu đô thị Gateway City Vĩnh Long đã diễn ra lễ khởi công Trung tâm Thương mại SenseFesti với tổng vốn đầu tư gần 1.000 tỉ đồng, do Saigon Co.op (SCID) kết hợp cùng Tập đoàn Thành Đô phát triển. Đây sẽ là một trong những tổ hợp mua sắm – giải trí – ẩm thực hiện đại nhất miền Tây, đồng thời là tiện ích thương mại trọng điểm của Gateway City.'
//   }
])
const renderNews = computed(() => {
  return dataNews.value?.filter(item => item.type === 'NEWS')
})

const renderEvents = computed(() => {
  return dataNews.value?.filter(item => item.type === 'EVENTS')
})

const fetchNews = async () => {
    const config = useRuntimeConfig().public;
    try {
        const response = await $fetch(`${config.apiBase}/newandevents/list`, {
            method: 'POST',
            body: {
                sorted: [
                    { name: 'createdAt', direction: 'descending' }
                ],
            }
        })
        dataNews.value = response.result
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    fetchNews()
})

</script>

<style lang="scss" scoped>

</style>