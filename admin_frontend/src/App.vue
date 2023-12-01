<script setup>
import { ref, watch } from "vue";

// ====================== Components
import Header from "./components/layouts/header/Header.vue";
import Footer from "./components/layouts/footer/Footer.vue";

// ====================== Store
import { useHeaderStore } from "./store/header";
const headerStore = useHeaderStore();

// Open and close main
const main = ref(null);
watch(headerStore, () => {
  const statusHeader = headerStore.statusHeader;
  if (statusHeader) {
    // open main
    main.value.style.width = window.innerWidth - 250+"px";
  } else {
    // close main
    main.value.style.width = window.innerWidth - 67+"px";
  }
});
</script>

<template>
  <!-- header -->
  <Header />

  <div dir="rtl" ref="main" id="main">
    <!-- main -->
    <section class="p-2">
      <router-view></router-view>
    </section>

    <!-- footer -->
    <Footer />
  </div>
</template>
