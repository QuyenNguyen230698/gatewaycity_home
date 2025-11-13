import { useTokenStore } from '~/store/token';

export default defineNuxtPlugin(async (nuxtApp) => {
  const tokenStore = useTokenStore();

  // Load token từ cookie
  tokenStore.loadTokenFromCookies();

  // Nếu chưa có token, gọi API để lấy token
  if (!tokenStore.token) {
    await tokenStore.fetchToken();
  }
});