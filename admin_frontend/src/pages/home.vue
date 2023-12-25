<script setup>
// ====================== components
import DateTime from "@/components/pages/home/DateTime.vue";
import NumberUsers from "@/components/pages/home/NumberUsers.vue";
import NumberOrders from "@/components/pages/home/NumberOrders.vue";
import NumberComments from "@/components/pages/home/NumberComments.vue";
import TodoList from "@/components/pages/home/TodoList/TodoList.vue";
</script>

<template>
  <article>
    <div class="row m-0 mt-2 mt-lg-3">
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

  <article>
    <div class="row m-0 mb-2 my-lg-4">
      <TodoList />
    </div>
  </article>
</template>
