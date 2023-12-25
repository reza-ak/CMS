import { defineStore } from "pinia";
// open and close header
export const useGlobalStates = defineStore('states', {
  state: () => {
    return {
      weekday : [
        "یکشنبه",
        "دوشنبه",
        "سه شنبه",
        "چهارشنبه",
        "پنجشنبه",
        "جمعه",
        "شنبه",
      ],
      repeatEachTrans : {
        day: "روز",
        week: "هفته",
        month: "ماه",
        year: "سال",
      }
    }
  },
})