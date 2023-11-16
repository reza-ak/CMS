<script setup>
import { ref, watch } from "vue";

// ====================== Components
import Header from "./components/layouts/header/Header.vue";

// ====================== Store
import { useHeaderStore } from "./store/header";
const headerStore = useHeaderStore();

// Open and close main
const main = ref(null);
watch(headerStore, () => {
  const statusHeader = headerStore.statusHeader;
  if (statusHeader) {
    // open main
    main.value.style.marginRight = "250px";
  } else {
    // close main
    main.value.style.marginRight = "67px";
  }
})
</script>

<template>
  <!-- header -->
  <Header />
  
  <!-- main -->
  <section dir="rtl" ref="main" id="main">

  </section>
</template>
