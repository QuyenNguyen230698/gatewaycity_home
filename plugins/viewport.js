export default defineNuxtPlugin(() => {
  if (process.client) {
    // Hàm tính toán và thiết lập giá trị cho biến CSS --vh
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Thiết lập giá trị cho --vh khi trang tải lần đầu
    setVh();

    // Thiết lập lại giá trị cho --vh khi kích thước cửa sổ thay đổi
    window.addEventListener('resize', setVh);
  }
});
