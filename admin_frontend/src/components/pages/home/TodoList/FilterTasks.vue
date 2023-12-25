<script setup>
// ====================== icons
import FilterIcon from "@/components/icons/Filter.Vue";

// ====================== props
const props = defineProps(["filterTaskForm"]);
</script>

<template>
  <div
    class="todoFilters overflow-hidden"
    :class="{ 'activeTodoFilters border-bottom': props.filterTaskForm }"
  >
    <div class="row m-0 p-2 py-3 p-lg-4 text-justify">
      <div class="mb-3 mb-lg-4 h6 text-success">
        <FilterIcon />
        <h3 class="h6 d-inline pe-2">فیلتر کردن فعالیت‌ها :</h3>
      </div>
      <div class="col-12 mb-3">
        <select class="form-select text-secondary">
          <option selected hidden disabled>-- لیست فعالیت‌ها</option>
          <option value="all">لیست همه فعالیت‌ها</option>
          <option value="done">انجام شده - بدون تاخیر</option>
          <option value="active">در دست انجام</option>
          <option value="doneExpire">انجام شده - با تاخیر</option>
          <option value="undone">انجام نشده</option>
        </select>
      </div>

      <div class="col-6">
        <select class="form-select text-secondary">
          <option selected hidden disabled>-- مرتب سازی</option>
          <option value="asc">صعودی</option>
          <option value="desc">نزولی</option>
        </select>
      </div>
      <div class="col-6">
        <select class="form-select text-secondary">
          <option selected hidden disabled>-- اولویت</option>
          <option value="low">کم</option>
          <option value="middle">میانه</option>
          <option value="up">زیاد</option>
        </select>
      </div>
    </div>
  </div>
</template>
