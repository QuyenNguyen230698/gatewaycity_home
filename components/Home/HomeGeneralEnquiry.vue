
<template>
  <div class="w-full h-full bg-enquiry lg:min-h-screen grid place-items-center py-12 md:py-20 lg:py-0">
    <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="container mx-auto w-full h-fit bg-image-enquiry rounded-lg">
      <div class="py-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-10 h-fit place-items-center">
        <div class="col-span-1 gap-2 w-full h-full flex flex-col pb-3 lg:pb-0 lg:justify-between">
          <h2 class="textSubBanner text-white font-montserrat-bold">Nhận Báo Giá Ngay</h2>
          <p class="text-white titlebase leading-tight hidden">
            Have questions or need more information? Fill in the contact form, and we’ll get back to you promptly.
          </p>
        </div>
        <div class="max-w-lg rounded-lg bg-white px-4 lg:px-6 py-6 lg:py-10 z-10 w-full h-full">
          <div v-if="!isSubmit" class="grid grid-cols-1 gap-4 h-fit">
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
              {{ isSubmitting ? 'Đang gửi...' : 'Nhận Báo Giá Ngay' }}
            </button>
          </div>
          <div v-else class="flex flex-col gap-4 col-span-2">
              <h2 class="title2xl font-montserrat-bold">Cảm ơn bạn đã gửi thông tin.</h2>
              <p class="titlebase font-montserrat-regular">
                Chúng tôi sẽ liên hệ với bạn sớm nhất có thể! <br>
                Trong khi đó, hãy khám phá một số dự án gần nhất của chúng tôi
              </p>
              <NuxtLink
                to="/projects"
                class="font-montserrat-medium w-fit bg-black text-white rounded-full py-2 my-4 px-6 titlebase text-center hover:bg-stone-800 duration-300 ease-in-out"
              >
                XEM DỰ ÁN
              </NuxtLink>
            </div>
        </div>
      </div>
    </div>
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
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import DOMPurify from 'dompurify';

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

const { $_ } = useNuxtApp();

const isSubmit = ref(false);
const isSubmitting = ref(false)

const formEnquiry = ref({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  note: ''
});

// Hàm validate form
const validateForm = () => {
  const errors = [];

  // Kiểm tra trường bắt buộc
  if (!formEnquiry.value.firstName.trim()) {
    errors.push('First name is required.');
  }
  if (!formEnquiry.value.lastName.trim()) {
    errors.push('Last name is required.');
  }
  if (!formEnquiry.value.email.trim()) {
    errors.push('Email is required.');
  }
  if (!formEnquiry.value.phone.trim()) {
    errors.push('Phone number is required.');
  }

  // Kiểm tra định dạng email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (formEnquiry.value.email.trim() && !emailRegex.test(formEnquiry.value.email)) {
    errors.push('Please enter a valid email address.');
  }

  // Kiểm tra định dạng phone (bắt buộc, chỉ số và dấu +, 10-16 ký tự)
  const phoneRegex = /^\+?\d{9,15}$/;
  if (formEnquiry.value.phone.trim() && !phoneRegex.test(formEnquiry.value.phone)) {
    errors.push('Please enter a valid phone number (10-16 digits, optional country code).');
  }

  // Kiểm tra message (tùy chọn, giới hạn độ dài tối đa 500 ký tự)
  if (formEnquiry.value.message.trim().length > 500) {
    errors.push('Message cannot exceed 500 characters.');
  }

  return errors;
};

  onMounted(async () => {
    nextTick().then(() => {
        setTimeout(() => {
        AOS.init({
            once: false,
            offset: 5,
            delay: 0,
            duration: 1000,
            easing: 'ease',
            mirror: true,
        });
        window.addEventListener('scroll', () => {
            AOS.refresh();
        });
        }, 1);
    });
    });

const resetFormEnquiry = () => {
  formEnquiry.value = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    note: '',
  };
};

const removeLeadingZero = (phone) => {
  if (typeof phone !== 'string') phone = String(phone);
  return phone.startsWith('0') ? phone.slice(1) : phone;
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

// Submit General Enquiry
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

</script>

<style lang="scss" scoped>
.bg-image-enquiry {
    background-image: url('https://res.cloudinary.com/dpcigceaq/image/upload/v1765352299/Media%20Gateway%20City/qujezuf2bwlld9zlmoaz.jpg');
    background-size: cover;
    background-position: center;
}
.checkbox {
  width: 1.25rem;
  height: 1.25rem;
}
.checkbox:checked,
.checkbox[aria-checked='true'] {
  animation: none;
  background-color: #14532d;
  background-image: none;
}
</style>