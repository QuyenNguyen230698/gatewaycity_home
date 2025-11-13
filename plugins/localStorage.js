export default defineNuxtPlugin(() => {
    if (process.client) {
      window.addEventListener('load', () => {
        const item = localStorage.getItem('theme');
        if (item) {
        }
      });
    }
  });
  