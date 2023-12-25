<script setup>
import { ref } from "vue";

// ====================== icons
import TodoListIcon from "@/components/icons/TodoList.Vue";
import AddIcon from "@/components/icons/Add.Vue";
import MinusIcon from "@/components/icons/Minus.Vue";
import FilterIcon from "@/components/icons/Filter.Vue";

// ====================== Components
import AddTask from "@/components/pages/home/TodoList/AddTask.vue";
import FilterTasks from "@/components/pages/home/TodoList/FilterTasks.vue";
import TasksList from "@/components/pages/home/TodoList/TasksList.vue";
import TasksPagination from "@/components/pages/home/TodoList/TasksPagination.vue";

// -------Add task
const addTaskForm = ref(false);
function toggleAddTaskForm() {
  filterTaskForm.value = false;
  addTaskForm.value = !addTaskForm.value;
}

// -------Filter tasks
const filterTaskForm = ref(false);
function toggleFilterTaskForm() {
  addTaskForm.value = false;
  filterTaskForm.value = !filterTaskForm.value;
}
</script>

<template>
  <div class="col-12 col-xl-6 lh-lg">
    <div
      class="accordion accordion-flush border bg-white"
      id="accordionTodoList"
    >
      <div
        class="d-flex justify-content-between align-items-center px-3 px-lg-4 py-3 border-bottom m-0"
      >
        <div class="col-9 col-sm-6 col-xl-8 ps-4">
          <TodoListIcon />
          <h2 class="m-0 pe-3 h6 fw-bold d-inline">لیست فعالیت‌های روزانه</h2>
        </div>
        <div class="col-3 col-sm-6 col-xl-4 text-start">
          <span
            @click="toggleFilterTaskForm()"
            class="ms-3 text-light-blue"
            :class="[filterTaskForm ? 'text-danger' : 'text-light-blue']"
            type="button"
            title="فیلتر کردن"
          >
            <FilterIcon />
          </span>

          <span
            @click="toggleAddTaskForm()"
            class="text-light-blue"
            :class="[addTaskForm ? 'text-danger' : 'text-light-blue']"
            type="button"
            title="اضافه کردن"
          >
            <span v-if="!addTaskForm"><AddIcon /></span>
            <span v-else><MinusIcon /></span>
          </span>            
        </div>
      </div>

      <!-- Add task -->
      <AddTask :addTaskForm="addTaskForm" />

      <!-- Todo filters -->
      <FilterTasks :filterTaskForm="filterTaskForm" />

      <!-- Tasks list -->
      <TasksList />

      <!-- Tasks pagination -->
      <TasksPagination />
    </div>
  </div>
</template>
