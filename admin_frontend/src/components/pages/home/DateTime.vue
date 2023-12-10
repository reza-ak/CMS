<script setup>
import { ref } from "vue";

// ====================== Date and time
const time = ref(new Date());
const weekday = [
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
  "شنبه",
];
setInterval(() => {
  time.value = new Date();
}, 1000);
</script>

<template>
  <div class="col-12 col-md-6 col-xxl-3 pb-3 pb-xxl-0">
    <div
      class="border bg-white d-flex justify-content-center align-items-center h-100 py-4"
    >
      <div class="card-body text-secondary text-center">
        <div class="timeBox h2">
          <span>{{ time.getSeconds("fa-IR") }}</span>
          <span> : </span>
          <span>{{ time.getMinutes("fa-IR") }}</span>
          <span> : </span>
          <span>{{ time.getHours("fa-IR") }}</span>
        </div>
        <div class="dateBox">
          {{ weekday[time.getDay()] }},
          {{
            time.toLocaleDateString("fa-IR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
        </div>
      </div>
    </div>
  </div>
</template>
