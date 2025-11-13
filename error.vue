<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="text-center p-6 max-w-md mx-auto">
      <!-- Tiêu đề lỗi -->
      <h1 class="text-4xl font-bold text-red-600 mb-4">{{ errorTitle }}</h1>
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ errorMessage }}</h2>
      <p class="text-gray-600 mb-8">
        {{ description }}
      </p>

      <!-- Nút Go Home -->
      <NuxtLink to="/" class="btnTDC-md">
        Go Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Props từ Nuxt error page
const props = defineProps({
  error: {
    type: Object,
    required: true,
    default: () => ({ statusCode: 500, message: '' }),
  },
});

// Tính toán tiêu đề lỗi dựa trên statusCode
const errorTitle = computed(() => {
  switch (props.error.statusCode) {
    case 400:
      return 'Bad Request';
    case 403:
      return 'Forbidden';
    case 404:
      return 'Page Not Found';
    case 500:
      return 'Server Error';
    default:
      return 'Unknown Error';
  }
});

// Tính toán thông điệp lỗi với fallback chi tiết
const errorMessage = computed(() => {
  const rawMessage = decodeURIComponent(props.error.message || '');

  // Kiểm tra xem rawMessage có phải là JSON hợp lệ không trước khi parse
  try {
    if (rawMessage.trim().startsWith('{') || rawMessage.trim().startsWith('[')) {
      const parsedMessage = JSON.parse(rawMessage);
      if (parsedMessage.message) return parsedMessage.message;
    }
    return rawMessage || getFallbackMessage();
  } catch (e) {
    return rawMessage || getFallbackMessage();
  }
});

// Tính toán mô tả lỗi (description) với fallback
const description = computed(() => {
  switch (props.error.statusCode) {
    case 400:
      return 'The request was invalid or cannot be processed.';
    case 403:
      return 'You do not have permission to access this page.';
    case 404:
      return 'Oops! It looks like the page you’re looking for doesn’t exist or has been moved.';
    case 500:
      return 'Something went wrong on our server. Please try again later.';
    default:
      return 'An unexpected error occurred. Please try again.';
  }
});

// Hàm helper để lấy thông điệp fallback theo statusCode
function getFallbackMessage() {
  switch (props.error.statusCode) {
    case 400:
      return 'Bad Request Error';
    case 403:
      return 'Access Denied';
    case 404:
      return 'Not Found';
    case 500:
      return 'Internal Server Error';
    default:
      return 'Something Went Wrong';
  }
}

// Lifecycle: Log nhẹ nhàng để debug
onMounted(() => {

});
</script>

<style scoped>
/* Không cần thêm CSS vì Tailwind đã xử lý */
</style>