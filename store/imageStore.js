// stores/sort.js
import { defineStore } from 'pinia';

export const useImageStore = defineStore('image', {
  state: () => ({
    isOpen: false,
    listImage : [],
    currentIndexImage: 0,
  }),

  getters: {
    isImageOpen: (state) => state.isOpen,
    getListImage: (state) => state.listImage,
  },

  actions: {
    setIsOpen(value) {
      this.isOpen = value;
    },
    setListImage(value,index) {
      this.listImage = value;
      this.currentIndexImage = index;
    },
    reset(){
      this.isOpen = false;
      this.listImage = [];
      this.currentIndexImage = 0;
    }
  },
});