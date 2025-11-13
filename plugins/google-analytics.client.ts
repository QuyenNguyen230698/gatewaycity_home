// plugins/google-analytics.client.ts
export default defineNuxtPlugin(() => {
    // Tạo dataLayer nếu chưa tồn tại
    if (!window.dataLayer) {
      window.dataLayer = window.dataLayer || [];
    }
    
    // Function gtag
    function gtag() {
      if (window.dataLayer) {
        window.dataLayer.push(arguments);
      }
    }
    
    // Gán gtag vào window
    window.gtag = gtag;
    
    // Load gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-HK4HQ6T3LL';
    document.head.appendChild(script);
    
    // Config gtag khi script load xong
    script.onload = () => {
      gtag('js', new Date());
      gtag('config', 'G-HK4HQ6T3LL');
    };
    
    // Track page views
    const router = useRouter();
    router.afterEach((to) => {
      if (window.gtag) {
        gtag('config', 'G-HK4HQ6T3LL', {
          page_path: to.fullPath,
          page_title: document.title
        });
      }
    });
  });