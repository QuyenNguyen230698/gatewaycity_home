// stores/usePositionStore.js
import { defineStore } from 'pinia';

export const usePositionStore = defineStore('position', () => {
  const isPositionFillter = ref(true);

  function setPositionFillter(value) {
    isPositionFillter.value = value;
  }

  const autoSlide = ref(true);

  function setAutoSlide(value) {
    autoSlide.value = value;
  }

  const autoScale = ref(true)

  function setAutoScale(value) {
    autoScale.value = value;
  }

  return { isPositionFillter, setPositionFillter, autoSlide, setAutoSlide, autoScale, setAutoScale };
});
