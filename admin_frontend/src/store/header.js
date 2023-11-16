import { defineStore } from "pinia";
// open and close header
export const useHeaderStore = defineStore('header', {
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