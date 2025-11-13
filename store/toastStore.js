// stores/toastStore.js
import { defineStore } from 'pinia';

export const useToastStore = defineStore('toast', {
  state: () => ({
    //#region AnhLD : Khởi tạo trạng thái ban đầu cho toast
    visible: false,
    typeToast: '',
    message: '',
    width:'w-11/12 md:w-2/3 lg:w-fit',
    position: 'right-center',
    //#endregion
  }),
  actions: {
    //#region AnhLD : Hàm kích hoạt toast
    activeToast(type, message, width = 'w-11/12 md:w-2/3 lg:w-fit', position = 'right-center') {
      this.typeToast = type;
      this.message = message instanceof Error ? message.toString() : message;
      this.position = position;
      this.width = width;
      this.visible = true;
      setTimeout(() => {
        this.visible = false;
      },5000);
    },
    //#endregion

    //#region AnhLD : Hàm đóng toast
    closeToast() {
      this.visible = false;
    },
    //#endregion
  },
});