<script setup>
// ====================== icons
import RightIcon from "@/components/icons/Right.Vue";
import LeftIcon from "@/components/icons/Left.Vue";
</script>

<template>
  <div class="accordion-item" dir="ltr">
    <ul class="pagination pagination-sm m-3 justify-content-center">
      <li class="page-item">
        <a class="page-link text-success" href="#">
          <LeftIcon />
          قبلی
        </a>
      </li>
      <li class="page-item">
        <a class="page-link text-success" href="#"> 1 </a>
      </li>
      <li class="page-item">
        <a class="page-link text-success" href="#"> 2 </a>
      </li>
      <li class="page-item">
        <a class="page-link text-success" href="#"> 3 </a>
      </li>
      <li class="page-item">
        <a class="page-link text-success" href="#">
          بعدی
          <RightIcon />
        </a>
      </li>
    </ul>
  </div>
</template>
