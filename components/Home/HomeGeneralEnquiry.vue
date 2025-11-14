
<template>
  <div class="w-full h-full bg-enquiry min-h-screen grid place-items-center mb-12">
    <div data-aos="fade-up" data-aos-offset="20" data-aos-delay="50" class="container mx-auto w-full h-fit bg-image-enquiry rounded-lg">
      <div class="py-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-10 h-fit place-items-center">
        <div class="col-span-1 gap-2 w-full h-full flex flex-col pb-3 lg:pb-0 lg:justify-between">
          <h2 class="textSubBanner text-white font-montserrat-bold">General Enquiry</h2>
          <p class="text-white titlebase leading-tight">
            Have questions or need more information? Fill in the contact form, and we’ll get back to you promptly.
          </p>
        </div>
        <div class="max-w-lg rounded-lg bg-white px-4 lg:px-6 py-6 lg:py-10 z-10 w-full h-full">
          <div v-if="!isSubmit" class="grid grid-cols-1 gap-4 h-fit">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <input
                v-model="formEnquiry.firstName"
                type="text"
                placeholder="First Name*"
                class="input input-bordered rounded-lg w-full p-2 text-base focus:outline-none"
              />
              <input
                v-model="formEnquiry.lastName"
                type="text"
                placeholder="Last Name*"
                class="input input-bordered rounded-lg w-full p-2 text-base focus:outline-none"
              />
            </div>
            <input
              type="text"
              v-model="formEnquiry.email"
              placeholder="Email*"
              class="input input-bordered rounded-lg w-full p-2 text-base focus:outline-none"
            />
            <div class="grid grid-cols-4 gap-2">
              <div class="relative col-span-4 md:col-span-2 flex items-center">
                <input
                  ref="countryInputGeneral"
                  type="text"
                  v-model="countrySearchGeneral"
                  placeholder="Country Code*"
                  class="input input-bordered border rounded-lg w-full p-4 text-base focus:outline-none"
                  @focus="showCountryDropdownGeneral = true"
                  @blur="delayHideDropdown('general')"
                  @input="handleCountryInputGeneral"
                />
                <svg v-if="countrySearchGeneral" @click="clearCountryInputGeneral" class="size-5 cursor-pointer hover:text-custom-green absolute right-2 bg-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
                <div v-if="showCountryDropdownGeneral" class="absolute z-50 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto top-full">
                  <div
                    v-if="filteredCountries.length === 0"
                    class="px-4 py-2 text-base text-gray-500"
                  >
                    Country not found
                  </div>
                  <div
                    v-for="country in filteredCountries"
                    :key="country.code"
                    @mousedown="selectCountryGeneral(country.code, country.name)"
                    class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-base"
                    :class="formEnquiry.countryCode === country.code ? 'bg-gray-200' : ''"
                  >
                    {{ country.code }} {{ country.name }}
                  </div>
                </div>
              </div>
              <input
                type="text"
                v-model="formEnquiry.phoneNumber"
                placeholder="Phone Number*"
                class="input input-bordered border rounded-lg w-full p-4 text-base focus:outline-none col-span-4 md:col-span-2"
              />
            </div>
            <select
                  v-model="selectedOption"
                  class="select select-bordered border rounded-lg w-full text-base focus:outline-none"
                  :class="selectedOption === '' ? 'text-gray-400' : 'text-black'"
                >
                  <option disabled value="">How did you hear about us?</option>
                  <option
                    v-for="option in hearAboutOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
                <input
                  v-if="selectedOption === 'Other'"
                  type="text"
                  v-model="customInput"
                  placeholder="Please specify"
                  class="input input-bordered border rounded-lg w-full p-4 text-base focus:outline-none"
                />
            <textarea
              cols="30"
              rows="5"
              v-model="formEnquiry.note"
              placeholder="Message"
              class="textarea textarea-bordered resize-none rounded-lg w-full p-2 text-base focus:outline-none"
            ></textarea>
            <button 
              @click="submitNow"
              :disabled="isSubmitting"
              class="font-montserrat-regular w-full bg-black text-white px-4 py-2 text-base hover:bg-stone-800 duration-300 ease-in-out"
            >
              {{ isSubmitting ? 'Submitting...' : 'Submit' }}
            </button>
          </div>
          <div v-else class="flex flex-col gap-4 col-span-2">
              <h2 class="title2xl font-montserrat-bold">Thank you for submitting the form.</h2>
              <p class="titlebase font-montserrat-regular">
                Our team will be in touch with you soon! <br>
                In the meantime, check out some of our recent projects:
              </p>
              <NuxtLink
                to="/projects"
                class="font-montserrat-medium w-fit bg-black text-white rounded-full py-2 my-4 px-6 titlebase text-center hover:bg-stone-800 duration-300 ease-in-out"
              >
                EXPLORE OUR PROJECTS
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

const countryCodes = [
  { code: '+93', name: 'Afghanistan' },
  { code: '+355', name: 'Albania' },
  { code: '+213', name: 'Algeria' },
  { code: '+376', name: 'Andorra' },
  { code: '+244', name: 'Angola' },
  { code: '+1264', name: 'Anguilla' },
  { code: '+1268', name: 'Antigua and Barbuda' },
  { code: '+54', name: 'Argentina' },
  { code: '+374', name: 'Armenia' },
  { code: '+297', name: 'Aruba' },
  { code: '+61', name: 'Australia' },
  { code: '+43', name: 'Austria' },
  { code: '+994', name: 'Azerbaijan' },
  { code: '+1242', name: 'Bahamas' },
  { code: '+973', name: 'Bahrain' },
  { code: '+880', name: 'Bangladesh' },
  { code: '+1246', name: 'Barbados' },
  { code: '+375', name: 'Belarus' },
  { code: '+32', name: 'Belgium' },
  { code: '+501', name: 'Belize' },
  { code: '+229', name: 'Benin' },
  { code: '+1441', name: 'Bermuda' },
  { code: '+975', name: 'Bhutan' },
  { code: '+591', name: 'Bolivia' },
  { code: '+387', name: 'Bosnia and Herzegovina' },
  { code: '+267', name: 'Botswana' },
  { code: '+55', name: 'Brazil' },
  { code: '+246', name: 'British Indian Ocean Territory' },
  { code: '+1284', name: 'British Virgin Islands' },
  { code: '+673', name: 'Brunei' },
  { code: '+359', name: 'Bulgaria' },
  { code: '+226', name: 'Burkina Faso' },
  { code: '+257', name: 'Burundi' },
  { code: '+855', name: 'Cambodia' },
  { code: '+237', name: 'Cameroon' },
  { code: '+1', name: 'Canada' },
  { code: '+238', name: 'Cape Verde' },
  { code: '+1345', name: 'Cayman Islands' },
  { code: '+236', name: 'Central African Republic' },
  { code: '+235', name: 'Chad' },
  { code: '+56', name: 'Chile' },
  { code: '+86', name: 'China' },
  { code: '+57', name: 'Colombia' },
  { code: '+269', name: 'Comoros' },
  { code: '+243', name: 'Congo (DRC)' },
  { code: '+242', name: 'Congo (Republic)' },
  { code: '+682', name: 'Cook Islands' },
  { code: '+506', name: 'Costa Rica' },
  { code: '+225', name: 'Ivory Coast' },
  { code: '+385', name: 'Croatia' },
  { code: '+53', name: 'Cuba' },
  { code: '+599', name: 'Curaçao' },
  { code: '+357', name: 'Cyprus' },
  { code: '+420', name: 'Czech Republic' },
  { code: '+45', name: 'Denmark' },
  { code: '+253', name: 'Djibouti' },
  { code: '+1767', name: 'Dominica' },
  { code: '+1809', name: 'Dominican Republic' },
  { code: '+593', name: 'Ecuador' },
  { code: '+20', name: 'Egypt' },
  { code: '+503', name: 'El Salvador' },
  { code: '+240', name: 'Equatorial Guinea' },
  { code: '+291', name: 'Eritrea' },
  { code: '+372', name: 'Estonia' },
  { code: '+251', name: 'Ethiopia' },
  { code: '+500', name: 'Falkland Islands' },
  { code: '+298', name: 'Faroe Islands' },
  { code: '+679', name: 'Fiji' },
  { code: '+358', name: 'Finland' },
  { code: '+33', name: 'France' },
  { code: '+594', name: 'French Guiana' },
  { code: '+689', name: 'French Polynesia' },
  { code: '+241', name: 'Gabon' },
  { code: '+220', name: 'Gambia' },
  { code: '+995', name: 'Georgia' },
  { code: '+49', name: 'Germany' },
  { code: '+233', name: 'Ghana' },
  { code: '+350', name: 'Gibraltar' },
  { code: '+30', name: 'Greece' },
  { code: '+299', name: 'Greenland' },
  { code: '+1473', name: 'Grenada' },
  { code: '+590', name: 'Guadeloupe' },
  { code: '+1671', name: 'Guam' },
  { code: '+502', name: 'Guatemala' },
  { code: '+224', name: 'Guinea' },
  { code: '+245', name: 'Guinea-Bissau' },
  { code: '+592', name: 'Guyana' },
  { code: '+509', name: 'Haiti' },
  { code: '+504', name: 'Honduras' },
  { code: '+852', name: 'Hong Kong' },
  { code: '+36', name: 'Hungary' },
  { code: '+354', name: 'Iceland' },
  { code: '+91', name: 'India' },
  { code: '+62', name: 'Indonesia' },
  { code: '+98', name: 'Iran' },
  { code: '+964', name: 'Iraq' },
  { code: '+353', name: 'Ireland' },
  { code: '+972', name: 'Israel' },
  { code: '+39', name: 'Italy' },
  { code: '+1876', name: 'Jamaica' },
  { code: '+81', name: 'Japan' },
  { code: '+962', name: 'Jordan' },
  { code: '+7', name: 'Kazakhstan' },
  { code: '+254', name: 'Kenya' },
  { code: '+686', name: 'Kiribati' },
  { code: '+383', name: 'Kosovo' },
  { code: '+965', name: 'Kuwait' },
  { code: '+996', name: 'Kyrgyzstan' },
  { code: '+856', name: 'Laos' },
  { code: '+371', name: 'Latvia' },
  { code: '+961', name: 'Lebanon' },
  { code: '+266', name: 'Lesotho' },
  { code: '+231', name: 'Liberia' },
  { code: '+218', name: 'Libya' },
  { code: '+423', name: 'Liechtenstein' },
  { code: '+370', name: 'Lithuania' },
  { code: '+352', name: 'Luxembourg' },
  { code: '+853', name: 'Macau' },
  { code: '+389', name: 'Macedonia' },
  { code: '+261', name: 'Madagascar' },
  { code: '+265', name: 'Malawi' },
  { code: '+60', name: 'Malaysia' },
  { code: '+960', name: 'Maldives' },
  { code: '+223', name: 'Mali' },
  { code: '+356', name: 'Malta' },
  { code: '+692', name: 'Marshall Islands' },
  { code: '+596', name: 'Martinique' },
  { code: '+222', name: 'Mauritania' },
  { code: '+230', name: 'Mauritius' },
  { code: '+262', name: 'Mayotte' },
  { code: '+52', name: 'Mexico' },
  { code: '+691', name: 'Micronesia' },
  { code: '+373', name: 'Moldova' },
  { code: '+377', name: 'Monaco' },
  { code: '+976', name: 'Mongolia' },
  { code: '+382', name: 'Montenegro' },
  { code: '+1664', name: 'Montserrat' },
  { code: '+212', name: 'Morocco' },
  { code: '+258', name: 'Mozambique' },
  { code: '+95', name: 'Myanmar' },
  { code: '+264', name: 'Namibia' },
  { code: '+674', name: 'Nauru' },
  { code: '+977', name: 'Nepal' },
  { code: '+31', name: 'Netherlands' },
  { code: '+687', name: 'New Caledonia' },
  { code: '+64', name: 'New Zealand' },
  { code: '+505', name: 'Nicaragua' },
  { code: '+227', name: 'Niger' },
  { code: '+234', name: 'Nigeria' },
  { code: '+683', name: 'Niue' },
  { code: '+672', name: 'Norfolk Island' },
  { code: '+850', name: 'North Korea' },
  { code: '+1670', name: 'Northern Mariana Islands' },
  { code: '+47', name: 'Norway' },
  { code: '+968', name: 'Oman' },
  { code: '+92', name: 'Pakistan' },
  { code: '+680', name: 'Palau' },
  { code: '+970', name: 'Palestine' },
  { code: '+507', name: 'Panama' },
  { code: '+675', name: 'Papua New Guinea' },
  { code: '+595', name: 'Paraguay' },
  { code: '+51', name: 'Peru' },
  { code: '+63', name: 'Philippines' },
  { code: '+48', name: 'Poland' },
  { code: '+351', name: 'Portugal' },
  { code: '+1787', name: 'Puerto Rico' },
  { code: '+974', name: 'Qatar' },
  { code: '+262', name: 'Réunion' },
  { code: '+40', name: 'Romania' },
  { code: '+7', name: 'Russia' },
  { code: '+250', name: 'Rwanda' },
  { code: '+590', name: 'Saint Barthélemy' },
  { code: '+290', name: 'Saint Helena' },
  { code: '+1869', name: 'Saint Kitts and Nevis' },
  { code: '+1758', name: 'Saint Lucia' },
  { code: '+590', name: 'Saint Martin' },
  { code: '+508', name: 'Saint Pierre and Miquelon' },
  { code: '+1784', name: 'Saint Vincent and the Grenadines' },
  { code: '+685', name: 'Samoa' },
  { code: '+378', name: 'San Marino' },
  { code: '+239', name: 'São Tomé and Príncipe' },
  { code: '+966', name: 'Saudi Arabia' },
  { code: '+221', name: 'Senegal' },
  { code: '+381', name: 'Serbia' },
  { code: '+248', name: 'Seychelles' },
  { code: '+232', name: 'Sierra Leone' },
  { code: '+65', name: 'Singapore' },
  { code: '+1721', name: 'Sint Maarten' },
  { code: '+421', name: 'Slovakia' },
  { code: '+386', name: 'Slovenia' },
  { code: '+677', name: 'Solomon Islands' },
  { code: '+252', name: 'Somalia' },
  { code: '+27', name: 'South Africa' },
  { code: '+82', name: 'South Korea' },
  { code: '+211', name: 'South Sudan' },
  { code: '+34', name: 'Spain' },
  { code: '+94', name: 'Sri Lanka' },
  { code: '+249', name: 'Sudan' },
  { code: '+597', name: 'Suriname' },
  { code: '+268', name: 'Swaziland' },
  { code: '+46', name: 'Sweden' },
  { code: '+41', name: 'Switzerland' },
  { code: '+963', name: 'Syria' },
  { code: '+886', name: 'Taiwan' },
  { code: '+992', name: 'Tajikistan' },
  { code: '+255', name: 'Tanzania' },
  { code: '+66', name: 'Thailand' },
  { code: '+670', name: 'Timor-Leste' },
  { code: '+228', name: 'Togo' },
  { code: '+690', name: 'Tokelau' },
  { code: '+676', name: 'Tonga' },
  { code: '+1868', name: 'Trinidad and Tobago' },
  { code: '+216', name: 'Tunisia' },
  { code: '+90', name: 'Turkey' },
  { code: '+993', name: 'Turkmenistan' },
  { code: '+1649', name: 'Turks and Caicos Islands' },
  { code: '+688', name: 'Tuvalu' },
  { code: '+256', name: 'Uganda' },
  { code: '+380', name: 'Ukraine' },
  { code: '+971', name: 'United Arab Emirates' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+1', name: 'United States' },
  { code: '+598', name: 'Uruguay' },
  { code: '+998', name: 'Uzbekistan' },
  { code: '+678', name: 'Vanuatu' },
  { code: '+379', name: 'Vatican City' },
  { code: '+58', name: 'Venezuela' },
  { code: '+84', name: 'Vietnam' },
  { code: '+1340', name: 'Virgin Islands, U.S.' },
  { code: '+681', name: 'Wallis and Futuna' },
  { code: '+967', name: 'Yemen' },
  { code: '+260', name: 'Zambia' },
  { code: '+263', name: 'Zimbabwe' }
];

const isSubmit = ref(false);
const countryInputGeneral = ref(null);
const filteredCountries = ref(countryCodes);
const countrySearchGeneral = ref('');
const showCountryDropdownGeneral = ref(false);
const isSubmitting = ref(false)
const selectedOption = ref('');
const customInput = ref('');
const hearAboutOptions = ref([
  { value: 'Youtube', label: 'Youtube Video' },
  { value: 'Facebook Ads', label: 'Facebook Ads' },
  { value: 'Search on Google', label: 'Search on Google' },
  { value: 'Event', label: 'Event' },
  { value: 'Other', label: 'Other' },
]);

const formEnquiry = ref({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  countryCode: '',
  hearAbout: '',
  note: ''
});

const locationData = ref({
  countryCode: '',
  ipLocation: ''
});

// Device fingerprinting
const deviceFinger = async () => {
  if (!process.client) return;
  const { data, error } = await useFetch('https://ipinfo.io/json?client=tracking', {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  });

  if (error.value) {
    console.error('Failed to get country code', error.value);
    return;
  }

  if (data.value) {
    locationData.value = {
      countryCode: data.value.country || null,
      ipLocation: data.value.ip || null,
    };
  }
};

// Hàm lấy dữ liệu quốc gia từ localStorage
const getCountrySave = () => {
  try {
    const savedCountry = localStorage.getItem('locationSelection');
    if (savedCountry) {
      const parsedCountry = JSON.parse(savedCountry);
      if (parsedCountry.code && parsedCountry.countryName) {
        const foundCountry = countryCodes.find(
          country => 
            country.code === parsedCountry.code && 
            country.name === parsedCountry.countryName
        );
        if (foundCountry) {
          formEnquiry.value.countryCode = foundCountry.code;
          countrySearchGeneral.value = `${foundCountry.code} ${foundCountry.name}`;
          selectCountryGeneral(foundCountry.code, foundCountry.name);
          return foundCountry;
        } else {

        }
      } else {

      }
    } else {

    }
    return null;
  } catch (error) {
    showMessageToast('error', 'Lỗi khi tải dữ liệu quốc gia.');
    return null;
  }
};

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
    await deviceFinger();
  const savedCountry = getCountrySave();
  if (savedCountry) {
    await nextTick();
  }
    });

// Handle country input with debounce for General Enquiry
const handleCountryInputGeneral = $_.debounce((event) => {
  countrySearchGeneral.value = event.target.value;
  const search = countrySearchGeneral.value.toLowerCase().trim();
  if (!search) {
    filteredCountries.value = countryCodes;
    return;
  }
  filteredCountries.value = countryCodes.filter(country =>
    country.code.toLowerCase().includes(search) || 
    country.name.toLowerCase().includes(search)
  );
}, 500);

const selectCountryGeneral = (code, name) => {
  formEnquiry.value.countryCode = code;
  countrySearchGeneral.value = `${code} ${name}`;
  showCountryDropdownGeneral.value = false;
};

const delayHideDropdown = (type) => {
  setTimeout(() => {
    if (type === 'project') {
      showCountryDropdownProject.value = false;
    } else {
      showCountryDropdownGeneral.value = false;
    }
  }, 200);
};

// Clear country input for General Enquiry
const clearCountryInputGeneral = () => {
  if (countryInputGeneral.value) {
    countryInputGeneral.value.value = '';
    countrySearchGeneral.value = '';
    formEnquiry.value.countryCode = '';
    filteredCountries.value = countryCodes;
  }
};

const resetFormEnquiry = () => {
  formEnquiry.value = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    countryCode: '',
    note: '',
    hearAbout: '',
  };
  countrySearchGeneral.value = '';
};

const removeLeadingZero = (phone) => {
  if (typeof phone !== 'string') phone = String(phone);
  return phone.startsWith('0') ? phone.slice(1) : phone;
};

const getSourceLead = (url) => {
  if (!process.client) return '';
  try {
    const ignoredPaths = [
      '/contact?type=project',
      '/contact?type=general',
    ];
    const urlPathAndQuery = url.split(window?.location?.origin || '')[1] || url;
    for (const ignored of ignoredPaths) {
      if (urlPathAndQuery.startsWith(ignored)) {
        return '';
      }
    }
    const queryPart = url.split('?')[1];
    if (!queryPart) return '';
    const firstParam = queryPart.split('&')[0];
    if (firstParam.startsWith('utm_') || firstParam.startsWith('fbclid')) return '';
    return firstParam;
  } catch (err) {
    console.error('Error parsing sourceLead:', err);
    return '';
  }
};

const getPlatform = (url) => {
  if (!process.client) return '';
  try {
    const match = url.match(/utm_source=([^&]+)/);
    return match ? decodeURIComponent(match[1]) : '';
  } catch (err) {
    console.error('Error parsing platform:', err);
    return '';
  }
};

const getTrafficType = (url) => {
  if (!process.client) return '';
  try {
    const match = url.match(/utm_medium=([^&]+)/);
    return match ? decodeURIComponent(match[1]) : '';
  } catch (err) {
    console.error('Error parsing trafficType:', err);
    return '';
  }
};

const getCampaignId = (url) => {
  if (!process.client) return '';
  try {
    const match = url.match(/utm_id=([^&]+)/);
    return match ? decodeURIComponent(match[1]) : '';
  } catch (err) {
    console.error('Error parsing campaignId:', err);
    return '';
  }
};

const getFbclid = (url) => {
  if (!process.client) return '';
  try {
    const match = url.match(/fbclid=([^&]+)/);
    return match ? decodeURIComponent(match[1]) : '';
  } catch (err) {
    console.error('Error parsing fbclid:', err);
    return '';
  }
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

  if (!form.countryCode) {
    showMessageToast('error', 'Please select a country code.');
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
  const userAgent = process.client ? navigator.userAgent : '';
  const urlRegist = process.client ? window.location.href : '';

  try {
    formEnquiry.value.note = DOMPurify.sanitize(formEnquiry.value.note, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
    const config = useRuntimeConfig().public;
    const response = await fetch(`${config.apiBase}/contact/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        enquiryType: 'General Enquiry',
        firstName: formEnquiry.value.firstName,
        lastName: formEnquiry.value.lastName,
        email: formEnquiry.value.email,
        countryCode: formEnquiry.value.countryCode,
        phoneNumber: removeLeadingZero(formEnquiry.value.phoneNumber),
        note: formEnquiry.value.note,
        userAgent,
        urlRegist,
        ipLocation: locationData.value.ipLocation,
        sourceLead: getSourceLead(urlRegist),
        platform: getPlatform(urlRegist),
        trafficType: getTrafficType(urlRegist),
        campaignId: getCampaignId(urlRegist),
        organicSourcePlatform: getFbclid(urlRegist),
        hearAbout: formEnquiry.value.hearAbout,
      }),
    });
    const result = await response.json();
    resetFormEnquiry();
    isSubmit.value = true;
  } catch (error) {
    showMessageToast('error', 'Server busy, please try again later!');
  } finally {
    isSubmitting.value = false;
  }
};

// Watch selectedOption and customInput to update hearAbout
watch(
  [selectedOption, customInput],
  ([newOption, newInput]) => {
    if (newOption === 'Other') {
      formEnquiry.value.hearAbout = newInput || 'Other';
    } else {
      formEnquiry.value.hearAbout = newOption;
    }
  },
  { immediate: true }
);

</script>

<style lang="scss" scoped>
.bg-image-enquiry {
    background-image: url('https://imagedelivery.net/KHaby7r0MOA4Gt7v7Yk1jg/4a10c9ba-7ad2-466e-610d-a1929335c200/2K');
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