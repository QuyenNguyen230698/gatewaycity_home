<template>
    <LoadingScreen v-if="isLoading" />
    <div v-else class="flex flex-col">
      <div v-if="dataNews.length > 0" class="flex flex-col">
        <div class="w-full h-96 md:h-35r lg:h-full lg:min-h-screen relative bg-custom-green">
            <NuxtImg :src="currentPost.src" alt="banner" class="w-full h-96 md:h-35r lg:h-full lg:min-h-screen object-cover absolute inset-0" />
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        </div>
        <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="container mx-auto" v-html="htmlOutput"></div>
      </div>
        <div v-else class="w-full h-25r mt-16 lg:mt-20 flex flex-col items-center justify-center py-20 container mx-auto">
            <h2 
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="50"
            class="title2xl text-black font-geoform-bold text-center"
            >
            Không tìm thấy tin tức
            </h2>
            <p 
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="100"
            class="titlebase text-stone-500 font-quicksand-regular text-center mt-4"
            >
            Tin tức bạn tìm kiếm không tồn tại hoặc đã bị xóa.
            </p>
            <NuxtLink external
            to="/tin-tuc"
            data-aos="fade-up"
            data-aos-offset="20"
            data-aos-delay="150"
            class="font-geoform-medium uppercase w-fit mt-6 bg-black text-white px-4 py-2 titlebase hover:bg-stone-800 duration-300 ease-in-out"
            >
            Back to News
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

const isLoading = ref(true)

const currentPost = computed(() => {
  return dataNews.value.find(item => item.slug === slug) || '';
});

const htmlOutput = computed(() => {
  const design = currentPost.value?.content?.design;
  
  // Bảo vệ: nếu không có design → trả về HTML trống hoặc placeholder
  if (!design || !design.body || !Array.isArray(design.body.rows)) {
    return `
      <!DOCTYPE html>
      <html><body>
        <div style="padding: 40px; text-align: center; color: #999; font-family: sans-serif;">
          Không có nội dung để hiển thị
        </div>
      </body></html>
    `;
  }

  return convertUnlayerToHtml(design);
});
function convertUnlayerToHtml(json) {
  // Đảm bảo json hợp lệ (phòng trường hợp vẫn bị undefined do lỗi khác)
  if (!json || !json.body || !Array.isArray(json.body.rows)) {
    console.warn('Invalid Unlayer JSON structure:', json);
    return '<!DOCTYPE html><html><body><p>Nội dung không hợp lệ</p></body></html>';
  }

  const generateStyles = (values, numColumns) => {
    const styles = [];
    if (numColumns === 1) styles.push('width: 100%;');
    else if (numColumns === 2) styles.push('width: 50%; float: left; box-sizing: border-box;');
    else if (numColumns === 3) styles.push('width: 33.33%; float: left; box-sizing: border-box;');
    else if (numColumns === 4) styles.push('width: 25%; float: left; box-sizing: border-box;');

    if (values.backgroundColor) styles.push(`background-color: ${values.backgroundColor};`);
    if (values.padding) styles.push(`padding: ${values.padding};`);
    if (values.borderRadius) styles.push(`border-radius: ${values.borderRadius};`);
    
    // Xử lý border an toàn hơn
    if (values.border) {
      const b = values.border;
      if (b.borderTopWidth) styles.push(`border-top: ${b.borderTopWidth} ${b.borderTopStyle || 'solid'} ${b.borderTopColor || '#000'};`);
      if (b.borderLeftWidth) styles.push(`border-left: ${b.borderLeftWidth} ${b.borderLeftStyle || 'solid'} ${b.borderLeftColor || '#000'};`);
      if (b.borderRightWidth) styles.push(`border-right: ${b.borderRightWidth} ${b.borderRightStyle || 'solid'} ${b.borderRightColor || '#000'};`);
      if (b.borderBottomWidth) styles.push(`border-bottom: ${b.borderBottomWidth} ${b.borderBottomStyle || 'solid'} ${b.borderBottomColor || '#000'};`);
    }

    return styles.join(' ');
  };

  const generateContentStyles = (values) => {
    const styles = [];
    const fontFamily = values.fontFamily?.value || values.fontFamily || '';
    if (fontFamily) styles.push(`font-family: ${fontFamily};`);
    if (values.fontSize) styles.push(`font-size: ${values.fontSize};`);
    if (values.fontWeight) styles.push(`font-weight: ${values.fontWeight};`);
    if (values.textAlign) styles.push(`text-align: ${values.textAlign};`);
    if (values.lineHeight) styles.push(`line-height: ${values.lineHeight};`);
    if (values.containerPadding) styles.push(`padding: ${values.containerPadding};`);
    if (values.color) styles.push(`color: ${values.color};`);
    return styles.join(' ');
  };

  const removeSpanTags = (text = '') => {
    return text.replace(/<span[^>]*>(.*?)<\/span>/g, '$1');
  };

  let html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Georama:wght@100;400;700&family=Quicksand:wght@300;400;700&display=swap');
        body { margin: 0; padding: 0; background-color: #FFFFFF; }
        .u_row { width: 100%; margin: 0 auto; overflow: hidden; clear: both; }
        .u_column { box-sizing: border-box; float: left; }
        img { max-width: 100%; height: auto; display: block; }
        table { border-collapse: collapse; width: 100%; }
      </style>
    </head>
    <body>
  `;

  try {
    json.body.rows.forEach(row => {
      const numColumns = Array.isArray(row.cells) ? row.cells.length : 1;
      html += `<div class="u_row" style="${generateStyles(row.values || {}, numColumns)}">`;

      (row.columns || []).forEach(column => {
        html += `<div class="u_column" style="${generateStyles(column.values || {}, numColumns)}">`;

        (column.contents || []).forEach(content => {
          if (content.type === 'text') {
            const text = (content.values?.text || '').replace(/<span[^>]*>/g, '').replace(/<\/span>/g, '');
            html += `<div style="${generateContentStyles(content.values || {})}">${text}</div>`;
          }
          else if (content.type === 'heading') {
            const tag = content.values?.headingType || 'h2';
            const cleanedText = removeSpanTags(content.values?.text || '');
            html += `<${tag} style="${generateContentStyles(content.values || {})}">${cleanedText}</${tag}>`;
          }
          else if (content.type === 'image') {
            const src = content.values?.src?.url || '';
            const alt = content.values?.altText || 'Image';
            html += `<div style="${generateContentStyles(content.values || {})}">
              <img src="${src}" alt="${alt}" style="width: 100%; height: auto; display: block;">
            </div>`;
          }
        });

        html += `</div>`;
      });

      html += `</div><div style="clear: both;"></div>`;
    });
  } catch (err) {
    console.error('Error rendering Unlayer HTML:', err);
    html += `<p style="color: red; padding: 20px;">Lỗi hiển thị nội dung</p>`;
  }

  html += `
    </body>
    </html>
  `;

  return html;
}

const dataNews = ref([
  // {
  //   _id: '68abd3e98587e969d74a1ba2',
  //   slug: "gateway-city-vinh-long-cong-bo-tien-do-moi-hoan-thien-ha-tang-loi-tien-ich-trong-diem",
  //   src: '/image/gatewaycity/tintuc.png',
  //   type: 'NEWS',
  //   status: 'published',
  //   createdAt: '2025-08-25T03:09:29.943Z',
  //   content: "<div style='background-color:#FFFFFF;color:#222222;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'><table role='presentation' style='margin:0 auto;max-width:100%;background-color:#FFFFFF' width='100%' align='center'><tbody><tr style='width:100%'><td><div style='font-weight:normal;padding:16px 0'>With the aim of solidifying its leading position in Vietnam and expanding into international markets, TranDuc participated in Sydney Build Expo 2025, a premier event showcasing advanced and sustainable construction solutions. As a top-tier enterprise in Vietnam, TranDuc presented its high-quality products, including engineered wood solutions, premium doors, and luxury prefabricated housing. TranDuc's participation in the expo underscores the company's commitment to promoting sustainable construction and collaborating with international businesses, particularly in the Australian market, which is experiencing strong growth in environmentally friendly building methods.</div><div style='padding:16px 0'><img class='e-rte-image e-imginline' style='outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%' src='https://imagedelivery.net/-tulz6ZB1FiuYVxo4sc-HQ/262b7ed0-ccf6-412c-5d5a-45acee324d00/2K' alt='Sample product'></div><div style='font-weight:normal;padding:16px 0'>Throughout the three-day event, TranDuc's booth garnered significant attention from a wide range of builders, architects, and developers from various countries. The standout solutions highlighted by TranDuc included:</div><div style='font-weight:normal;padding:16px 0'>Engineered Wood Solutions (Glulam &amp; CLT): TranDuc proudly stands as the first enterprise in Southeast Asia to own a CLT (Cross-Laminated Timber) production line – an advanced technology for producing high-strength, environmentally friendly wood components certified by the FSC. TranDuc's CLT products received high praise for their ability to minimize environmental impact and create sustainable structures.</div><div style='font-weight:normal;padding:16px 0'>Premium Door Solutions: TranDuc's exquisite door products offer superior aesthetics and exceptional performance in sound and thermal insulation. They are an ideal choice for high-end construction projects, meeting stringent international standards.</div><div style='font-weight:normal;padding:16px 0'>Luxury Prefabricated Housing Solutions: TranDuc showcased its range of high-end prefabricated houses, providing a solution that saves construction time and costs while ensuring high quality and aesthetic appeal. These products are a perfect choice for projects requiring high standards of sustainability and comfort.</div><div style='padding:16px 0'><img class='e-rte-image e-imginline' style='outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%' src='https://imagedelivery.net/-tulz6ZB1FiuYVxo4sc-HQ/c882f734-997a-4ad5-978d-cbbb3dbc7200/2K' alt='Sample product'></div><div style='font-weight:normal;padding:16px 0'>Australia is currently a frontrunner in adopting sustainable construction practices. At the expo, TranDuc had valuable opportunities to network and share its advanced building solutions with businesses in Sydney, supporting their journey towards sustainable development. Over the three days of the event, TranDuc's booth not only attracted strong interest from builders, architects, and developers but also fostered potential partnerships, opening doors for long-term growth in the Australian market and the Asia-Pacific region.</div><div style='font-weight:normal;padding:16px 0'>TranDuc is committed to continuously developing innovative and sustainable building solutions that meet stringent quality requirements and environmental protection standards. Participation in Sydney Build Expo 2025 marks a significant step in TranDuc's strategy for international expansion and market leadership. We are proud to bring building solutions that are not only advanced but also contribute to the sustainable development of the global construction industry.</div></td></tr></tbody></table></div>",
  //   title: 'GATEWAY CITY VĨNH LONG CÔNG BỐ TIẾN ĐỘ MỚI – HOÀN THIỆN HẠ TẦNG LÕI & TIỆN ÍCH TRỌNG ĐIỂM',
  //   description: 'Gateway City Vĩnh Long vừa cập nhật tiến độ xây dựng mới nhất trong tháng này, đánh dấu nhiều hạng mục trọng điểm bước vào giai đoạn hoàn thiện. Hiện tại, tuyến đường nội khu chính đã được trải nhựa, hệ thống điện – nước âm và chiếu sáng công cộng đã lắp đặt gần như hoàn tất. Khu vực quảng trường trung tâm và tuyến phố ven sông đang thi công cảnh quan, dự kiến sẽ ra mắt trong thời gian tới. Bên cạnh đó, khu biệt thự và nhà phố thương mại đang được nhà thầu đẩy nhanh tiến độ để bàn giao đúng kế hoạch. Việc hạ tầng được hoàn thiện đồng bộ giúp dự án đạt tính hiện hữu cao, tạo thêm niềm tin cho khách hàng và thể hiện cam kết mạnh mẽ của chủ đầu tư trong việc xây dựng một quần thể All-In-Compound đầu tiên tại miền Tây.'
  // },
  // {
  //   _id: '68abd3e98587e969d74a1bbe',
  //   slug: "su-kien-khoi-cong-trung-tam-thuong-mai-nghin-ti-tai-gateway-city",
  //   src: '/image/gatewaycity/sukien.png',
  //   type: 'EVENTS',
  //   status: 'published',
  //   createdAt: '2025-08-25T03:09:29.943Z',
  //   content: "<div style='background-color:#FFFFFF;color:#222222;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'><table role='presentation' style='margin:0 auto;max-width:100%;background-color:#FFFFFF' width='100%' align='center'><tbody><tr style='width:100%'><td><div style='font-weight:normal;padding:16px 0'>With the aim of solidifying its leading position in Vietnam and expanding into international markets, TranDuc participated in Sydney Build Expo 2025, a premier event showcasing advanced and sustainable construction solutions. As a top-tier enterprise in Vietnam, TranDuc presented its high-quality products, including engineered wood solutions, premium doors, and luxury prefabricated housing. TranDuc's participation in the expo underscores the company's commitment to promoting sustainable construction and collaborating with international businesses, particularly in the Australian market, which is experiencing strong growth in environmentally friendly building methods.</div><div style='padding:16px 0'><img class='e-rte-image e-imginline' style='outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%' src='https://imagedelivery.net/-tulz6ZB1FiuYVxo4sc-HQ/262b7ed0-ccf6-412c-5d5a-45acee324d00/2K' alt='Sample product'></div><div style='font-weight:normal;padding:16px 0'>Throughout the three-day event, TranDuc's booth garnered significant attention from a wide range of builders, architects, and developers from various countries. The standout solutions highlighted by TranDuc included:</div><div style='font-weight:normal;padding:16px 0'>Engineered Wood Solutions (Glulam &amp; CLT): TranDuc proudly stands as the first enterprise in Southeast Asia to own a CLT (Cross-Laminated Timber) production line – an advanced technology for producing high-strength, environmentally friendly wood components certified by the FSC. TranDuc's CLT products received high praise for their ability to minimize environmental impact and create sustainable structures.</div><div style='font-weight:normal;padding:16px 0'>Premium Door Solutions: TranDuc's exquisite door products offer superior aesthetics and exceptional performance in sound and thermal insulation. They are an ideal choice for high-end construction projects, meeting stringent international standards.</div><div style='font-weight:normal;padding:16px 0'>Luxury Prefabricated Housing Solutions: TranDuc showcased its range of high-end prefabricated houses, providing a solution that saves construction time and costs while ensuring high quality and aesthetic appeal. These products are a perfect choice for projects requiring high standards of sustainability and comfort.</div><div style='padding:16px 0'><img class='e-rte-image e-imginline' style='outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%' src='https://imagedelivery.net/-tulz6ZB1FiuYVxo4sc-HQ/c882f734-997a-4ad5-978d-cbbb3dbc7200/2K' alt='Sample product'></div><div style='font-weight:normal;padding:16px 0'>Australia is currently a frontrunner in adopting sustainable construction practices. At the expo, TranDuc had valuable opportunities to network and share its advanced building solutions with businesses in Sydney, supporting their journey towards sustainable development. Over the three days of the event, TranDuc's booth not only attracted strong interest from builders, architects, and developers but also fostered potential partnerships, opening doors for long-term growth in the Australian market and the Asia-Pacific region.</div><div style='font-weight:normal;padding:16px 0'>TranDuc is committed to continuously developing innovative and sustainable building solutions that meet stringent quality requirements and environmental protection standards. Participation in Sydney Build Expo 2025 marks a significant step in TranDuc's strategy for international expansion and market leadership. We are proud to bring building solutions that are not only advanced but also contribute to the sustainable development of the global construction industry.</div></td></tr></tbody></table></div>",
  //   title: 'SỰ KIỆN – KHỞI CÔNG TRUNG TÂM THƯƠNG MẠI “NGHÌN TỈ” TẠI GATEWAY CITY',
  //   description: 'Ngày 2/8/2025, tại khu đô thị Gateway City Vĩnh Long đã diễn ra lễ khởi công Trung tâm Thương mại SenseFesti với tổng vốn đầu tư gần 1.000 tỉ đồng, do Saigon Co.op (SCID) kết hợp cùng Tập đoàn Thành Đô phát triển. Đây sẽ là một trong những tổ hợp mua sắm – giải trí – ẩm thực hiện đại nhất miền Tây, đồng thời là tiện ích thương mại trọng điểm của Gateway City.'
  // }
])

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
    setTimeout(() => {
        isLoading.value = false
    }, 1500)
})

</script>

<style lang="scss" scoped>

</style>