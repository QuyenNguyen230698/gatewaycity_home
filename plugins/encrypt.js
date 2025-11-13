// plugins/encrypt.js

import CryptoJS from 'crypto-js';

export default defineNuxtPlugin((nuxtApp) => {
  // Plugin sẽ thêm một hàm mã hóa vào global context
  nuxtApp.provide('encrypt', (payload) => {

    const secretKey = useAppConfig().auth.jwtSecret;

    if (!secretKey) {
      throw new Error("Encryption secret key is not defined");
    }

    return CryptoJS.AES.encrypt(JSON.stringify(payload), secretKey).toString();
  });
});
