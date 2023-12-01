import { defineStore } from "pinia";
// open and close header in responsive mode
export const useHeaderResponsiveStore = defineStore('headerResponsive', {
  state: () => {
    return {
      statusHeader: true,
    }
  },

  actions: {
    changeHeader() {
      this.statusHeader = !this.statusHeader;
    },
  }
})