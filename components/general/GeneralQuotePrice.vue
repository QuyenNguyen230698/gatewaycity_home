<template>
    <!-- Pop Up Quote Price -->
      <dialog ref="popUp" class="modal items-center h-auto backdrop-blur-lg">
        <div class="modal-box relative lg:w-6/12 h-fit overflow-hidden rounded-lg p-4 lg:p-6 max-w-5xl">
          <form method="dialog">
            <button class="absolute top-3 right-3 focus-visible:outline-none">
              <span class="flex justify-center items-center cursor-pointer text-black focus-visible:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-7 lg:size-8 focus:outline-none"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </span>
            </button>
          </form>
          <div>
            <form @submit.prevent="submitForm" class="grid grid-cols-2 gap-2 lg:gap-4 p-2 lg:p-6 h-96 md:h-25r lg:h-30r overflow-y-auto scrollable">
              <div class="col-span-2 grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    v-model="formSubmit.firstName"
                    placeholder="Họ*"
                    class="input input-bordered border-black rounded-lg w-full p-4 text-base focus:outline-none focus:border-black col-span-2 lg:col-span-1"
                  />
                  <input
                    type="text"
                    v-model="formSubmit.lastName"
                    placeholder="Tên*"
                    class="input input-bordered border-black rounded-lg w-full p-4 text-base focus:outline-none focus:border-black col-span-2 lg:col-span-1"
                  />
                </div>
                <input
                  type="text"
                  v-model="formSubmit.phoneNumber"
                  placeholder="Số điện thoại*"
                  class="input input-bordered border-black rounded-lg w-full p-4 text-base focus:outline-none focus:border-black col-span-2"
                />
                <input
                  type="text"
                  v-model="formSubmit.email"
                  placeholder="Email*"
                  class="input input-bordered border-black rounded-lg w-full p-4 text-base focus:outline-none focus:border-black col-span-2"
                />
                <div class="col-span-2 w-full h-full">
                    <textarea
                    cols="30"
                    rows="5"
                    placeholder="Mô tả thêm*"
                    v-model="formSubmit.note"
                    maxlength="1000"
                    class="textarea textarea-bordered resize-none border-black rounded-lg w-full p-4 text-base focus:outline-none focus:border-black"
                  ></textarea>
                </div>
              <div class="col-span-2 flex justify-center mt-4">
                <button v-if="isQuote" type="submit"
                  class="font-geoform-bold text-white rounded-full w-10/12 py-2 text-base bg-pyramid-gold hover:bg-pyramid-gold/80 transition-colors duration-300 ease-in-out"
                  :disabled="isSubmitting"
                >
                  {{ isSubmitting ? 'Đang gửi...' : 'Nhận Báo Giá Ngay' }}
                </button>
                <button v-if="isTour" type="submit"
                  class="font-geoform-bold text-white rounded-full w-10/12 py-2 text-base bg-pyramid-gold hover:bg-pyramid-gold/80 transition-colors duration-300 ease-in-out"
                  :disabled="isSubmitting"
                >
                  {{ isSubmitting ? 'Đang gửi...' : 'Đăng Ký Tham Quan' }}
                </button>
              </div>
            </form>
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
      </dialog>
</template>

<script setup>

const props = defineProps({
    isTour: {
        type: Boolean,
        default: false,
    },
    isQuote: {
        type: Boolean,
        default: false,
    },
})

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

const popUp = ref(null);
const isSubmitted = ref(false);
const isSubmitting = ref(false);

const formSubmit = ref({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    note: '',
});

const resetForm = () => {
    formSubmit.value = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        note: '',
    };
    isSubmitting.value = false;
};

const validateformEnquiry = () => {
  const form = formSubmit.value;

  if (!form.firstName || !form.lastName || !form.email || !form.phoneNumber) {
    showMessageToast('error', 'Please fill in your full name, email, and phone number.');
    return false;
  }

  const dangerousChars = /[<>{};']/;
  const fieldsToCheck = [form.firstName, form.lastName, form.email, form.note, form.area];
  for (const field of fieldsToCheck) {
    if (dangerousChars.test(field)) {
      showMessageToast('error', 'Input contains invalid characters (e.g., <, >, {, }, ;, \').');
      return false;
    }
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

  return true;
};

const actionShowPopUp = () => {
  popUp.value.showModal();
};

const submitForm = async() => {
  if (!validateformEnquiry()) {
    return;
  }
  isSubmitting.value = true;

  const config = useRuntimeConfig().public;
  const urlRegist = window.location.href;
  try {
    const response = await $fetch(`${config.apiBase}/quoteprices/create`, {
          method: 'POST',
          body: {
              urlRegist: urlRegist,
              ...formSubmit.value
          }
    })
    showMessageToast('success', 'Thank you for your message!');
    resetForm();
  } catch (error) {
    showMessageToast('error', 'Server busy, please try again later!');
  } finally {
    isSubmitting.value = false;
  }
};

defineExpose({
    actionShowPopUp,
});

</script>

<style lang="scss" scoped>

</style>