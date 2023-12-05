<script setup>
// ====================== components
import DateTime from "@/components/pages/home/DateTime.vue";
import NumberUsers from "@/components/pages/home/NumberUsers.vue";
import NumberOrders from "@/components/pages/home/NumberOrders.vue";
import NumberComments from "@/components/pages/home/NumberComments.vue";
</script>

<template>
  <article>
    <div class="row m-0 d-flex justify-content-between py-2 py-lg-3">
      <!-- date and time -->
      <DateTime />

      <!-- number of users -->
      <NumberUsers />

      <!-- number of orders -->
      <NumberOrders />
      
      <!-- number of comments -->
      <NumberComments />
    </div>
  </article>

  <article>todo list</article>
</template>
