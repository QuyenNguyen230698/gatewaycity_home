<template>
    <LoadingScreen v-if="isLoading" />
    <div v-else class="flex flex-col">
        <ProductBanner />
        <ProductDetail :product="findProduct" />
        <ProductContent />
        <HomeGeneralEnquiry />
        <HomeNew />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isLoading = ref(true)
const route = useRoute()
const slug = route.params.slug

const product = ref([
    {
        slug: 'biet-thu-don-lap',
        title: 'Biệt Thự Đơn Lập',
        features: [
            {title: 'TỔNG DIỆN TÍCH ĐẤT', des: '188m2 - 238m2'},
            {title: 'TỔNG DIỆN TÍCH SÀN SỬ DỤNG (*)', des: '340m2 - 360m2'},
            {title: 'SỐ TẦNG', des: '1 Trệt, 2 Lầu'},
            {title: 'SỐ PHÒNG', des: '4 Phòng Ngủ - 5 WC'},
        ],
        images: [
            '/image/sanpham/bietthudonlap/banner-donlap.png',
            '/image/sanpham/bietthudonlap/banner-donlap.png',
            '/image/sanpham/bietthudonlap/banner-donlap.png'
        ],
        blueprint: [
            {name:'VỊ TRÍ', image:'/image/sanpham/bietthudonlap/Vi-tri-don-lap.jpg'},
            {name:'TẦNG 01', image:'/image/sanpham/bietthudonlap/Tang-1-don-lap.png'},
            {name:'TẦNG 02', image:'/image/sanpham/bietthudonlap/Tang-2-don-lap.png'},
            {name:'TẦNG 03', image:'/image/sanpham/bietthudonlap/Tang-3-don-lap.png'},
        ],
        floor1: {
            name: 'TẦNG 01',
            image: [
                '/image/sanpham/bietthudonlap/Tang1/T1_PHONG-BEP-3-of-4.jpg',
                '/image/sanpham/bietthudonlap/Tang1/T1_PHONG-BEP-4-of-4.jpg',
                '/image/sanpham/bietthudonlap/Tang1/T1_PHONG-KHACH-1-of-5.jpeg',
                '/image/sanpham/bietthudonlap/Tang1/T1_PHONG-KHACH-3-of-5.jpg',
                '/image/sanpham/bietthudonlap/Tang1/T1_PHONG-NGU-01-1-of-4.jpg',
            ]
        },
        floor2: {
            name: 'TẦNG 02',
            image: [
                '/image/sanpham/bietthudonlap/Tang2/T2_PHONG-NGU-02-1-of-4.jpg',
                '/image/sanpham/bietthudonlap/Tang2/T2_PHONG-NGU-03-1-of-4.jpg',
                '/image/sanpham/bietthudonlap/Tang2/T2_PHONG-NGU-MASTER-1-of-4.jpg',
                '/image/sanpham/bietthudonlap/Tang2/T2_PHONG-THAY-DO-2-of-2.jpg',
                '/image/sanpham/bietthudonlap/Tang2/tang-2_wc-2.jpg',
            ]
        },
        floor3: {
            name: 'TẦNG 03',
            image: [
                '/image/sanpham/bietthudonlap/Tang3/tang-3_ktv-2-of-2.jpg',
                '/image/sanpham/bietthudonlap/Tang3/tang-3_phong-ngu-1-of-2.jpg',
                '/image/sanpham/bietthudonlap/Tang3/tang-3_phong-tho-1-of-2.jpg',
            ]
        }
    },
    {
        slug: 'biet-thu-song-lap',
        title: 'Biệt Thự Song Lập',
        features: [
        {title: 'TỔNG DIỆN TÍCH ĐẤT', des: '200m2 - 300m2'},
        {title: 'TỔNG DIỆN TÍCH SÀN SỬ DỤNG (*)', des: '400m2 - 450m2'},
        {title: 'SỐ TẦNG', des: '1 Trệt, 2 Lầu'},
        {title: 'SỐ PHÒNG', des: '4 Phòng Ngủ - 5 WC'},
        ],
        images: [
            '/image/gatewaycity/biet-thu-song-lap.jpg',
            '/image/gatewaycity/biet-thu-song-lap.jpg',
            '/image/gatewaycity/biet-thu-song-lap.jpg'
        ],
        blueprint: [],
        floor1: '',
        floor2: '',
        floor3: ''
    },
    {
        slug: 'nha-pho-thuong-mai',
        title: 'Nhà Phố Thương Mại',
        features: [
            {title: 'TỔNG DIỆN TÍCH ĐẤT', des: '188m2 - 238m2'},
            {title: 'TỔNG DIỆN TÍCH SÀN SỬ DỤNG (*)', des: '340m2 - 360m2'},
            {title: 'SỐ TẦNG', des: '1 Trệt, 2 Lầu'},
            {title: 'SỐ PHÒNG', des: '4 Phòng Ngủ - 5 WC'},
        ],
        images: [
            '/image/gatewaycity/thanh-pho-thuong-mai.jpg',
            '/image/gatewaycity/thanh-pho-thuong-mai.jpg',
            '/image/gatewaycity/thanh-pho-thuong-mai.jpg'
        ],
        blueprint: [],
        floor1: '',
        floor2: '',
        floor3: ''
    }
])

const findProduct = product.value.find(item => item.slug === slug)

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false
    }, 1500)
})

</script>

<style lang="scss" scoped>

</style>