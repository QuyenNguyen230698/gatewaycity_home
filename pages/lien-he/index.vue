<template>
    <LoadingScreen v-if="isLoading" />
    <div v-else class="flex flex-col">
        <div class="w-full h-96 md:h-35r lg:h-full lg:min-h-screen relative bg-custom-green">
            <NuxtImg src="/image/gatewaycity/banner-contact.jpg" alt="banner" class="w-full h-96 md:h-35r lg:h-full lg:min-h-screen object-cover absolute inset-0" />
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        </div>
        <div class="container mx-auto w-full grid grid-cols-12 gap-6 md:gap-0 py-12">
            <div class="col-span-12 md:col-span-6 flex flex-col gap-4 md:gap-6">
                <p class="uppercase font-montserrat-bold text-xl md:text-2xl">THÔNG TIN LIÊN HỆ</p>
                <p>Quý khách hàng cần hỗ trợ tư vấn, cung cấp thông tin, quy trình thủ tục... Dự án Gateway City của chúng tôi vui lòng liên hệ với bộ phận phụ trách theo thông tin hoặc biểu mẫu bên dưới.</p>
                <p>Email: gatewaycityvinhlong@gmail.com</p>
                <p>Địa chỉ : Tân Vĩnh Thuận, Tân Ngãi, Tỉnh Vĩnh Long</p>
                <p>Showroom: Gateway City - All-in-compound đầu tiên ở Đồng bằng Sông Cửu Long</p>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="md:px-6">
                    <div class="grid grid-cols-1 gap-4 h-fit p-6 border border-pyramid-gold rounded-lg">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
                        <input
                            v-model="formEnquiry.firstName"
                            type="text"
                            placeholder="Họ*"
                            class="input input-bordered rounded-lg w-full p-2 text-base focus:outline-none"
                        />
                        <input
                            v-model="formEnquiry.lastName"
                            type="text"
                            placeholder="Tên*"
                            class="input input-bordered rounded-lg w-full p-2 text-base focus:outline-none"
                        />
                        </div>
                        <input
                            type="text"
                            v-model="formEnquiry.phoneNumber"
                            placeholder="Số điện thoại*"
                            class="input input-bordered border rounded-lg w-full p-4 text-base focus:outline-none"
                        />
                        <input
                        type="text"
                        v-model="formEnquiry.email"
                        placeholder="Email (Nếu có)"
                        class="input input-bordered rounded-lg w-full p-2 text-base focus:outline-none"
                        />
                        <textarea
                        cols="30"
                        rows="5"
                        v-model="formEnquiry.note"
                        placeholder="Mô tả thêm"
                        class="textarea textarea-bordered resize-none rounded-lg w-full p-2 text-base focus:outline-none"
                        ></textarea>
                        <button 
                        @click="submitNow"
                        :disabled="isSubmitting"
                        class="font-montserrat-bold w-full bg-custom-green rounded-full text-white px-4 py-2 text-base hover:bg-green-900 duration-300 ease-in-out"
                        >
                        {{ isSubmitting ? 'Đang gửi...' : 'Liên Hệ Ngay' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full container mx-auto dashed-line py-6"></div>
        <HomeNew></HomeNew>
    <ToastMessage
      ref="toastRef"
      :typeToast="currentToastType"
      :message="toastMessage"
      :show="showToast"
      :width="`w-2/3 lg:w-fit`"
      class="z-40"
    />
    </div>
</template>

<script setup>
  // Toast
const toastRef = ref(null);
const toastImageRef = ref(null); // Thêm ref cho ToastImage
const showToast = ref(false);
const showToastImage = ref(false); // Thêm biến để điều khiển hiển thị của ToastImage
const currentToastType = ref("");
const toastMessage = ref("");
const toastImageUrl = ref(""); // Thêm biến để lưu URL cho ToastImage
const showMessageToast = (type, message, url = "") => {
  currentToastType.value = type;
  toastMessage.value = message;
  showToast.value = !url; // Chỉ hiển thị Toast nếu không có URL
  showToastImage.value = !!url; // Hiển thị ToastImage nếu có URL
  toastImageUrl.value = url; // Gán URL cho ToastImage

  if (url !== "") {
    if (toastImageRef.value) {
      // Hiển thị ToastImage khi showMessageToast được gọi
      toastImageRef.value.show();
    }
  } else {
    if (toastRef.value) {
      toastRef.value.show();
    }
  }
};

const isLoading = ref(true)
const isSubmit = ref(false);
const isSubmitting = ref(false)

// Form data
const formEnquiry = reactive({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  note: ''
})

const resetFormEnquiry = () => {
  formEnquiry.value = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    note: '',
  };
};

const validateformEnquiry = () => {
  const form = formEnquiry.value;

  if (!form.firstName || !form.lastName || !form.email || !form.phoneNumber) {
    showMessageToast('error', 'Please fill in first name, last name, email, and phone number.');
    return false;
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(form.email)) {
    showMessageToast('error', 'Invalid email format.');
    return false;
  }

  const phoneRegex = /^[0-9]{10,16}$/;
  if (!phoneRegex.test(form.phoneNumber)) {
    showMessageToast('error', 'Phone number must be numeric and between 10 to 16 digits.');
    return false;
  }

  const dangerousChars = /[<>{};']/;
  if (dangerousChars.test(form.note)) {
    showMessageToast('error', 'Note contains invalid characters (e.g., <, >, {, }, ;, \').');
    return false;
  }

  return true;
};

const submitNow = async () => {
  if (!validateformEnquiry()) {
    return;
  }
  isSubmitting.value = true;

  try {
    showMessageToast('success', 'Thank you for your message!');
    resetFormEnquiry();
    isSubmit.value = true;
  } catch (error) {
    showMessageToast('error', 'Server busy, please try again later!');
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false
    }, 1500)
})

</script>

<style lang="scss" scoped>
.dashed-line {
  height: 2px;
  background: linear-gradient(to right, #111111 40%, transparent 40%);
  background-size: 20px 1px; /* 20px là khoảng cách mỗi đoạn nét */
  background-repeat: repeat-x;
};
</style>