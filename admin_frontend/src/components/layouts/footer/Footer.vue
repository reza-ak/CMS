<script setup>
// ====================== icons
import CopyRightIcon from "@/components/icons/CopyRight.Vue";
</script>

<template>
  <footer
    ref="footer"
    class="border-top d-flex justify-content-center align-items-center bg-white px-3 text-secondary"
  >
    <p class="m-0 text-center">
      طراحی شده توسط
      <a
        href="https://github.com/reza-ak"
        class="text-primary text-decoration-none"
      >
        reza-ak </a
      >. تمامی حقوق محفوظ است.
      <CopyRightIcon />
      1402
    </p>
  </footer>
</template>
