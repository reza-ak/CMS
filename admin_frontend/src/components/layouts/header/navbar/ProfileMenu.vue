<script setup>
// ====================== icons
import ProfileIcon from "@/components/icons/Profile.vue";
import LogoutIcon from "@/components/icons/Logout.vue";
</script>

<template>
  <span class="dropdown">
    <span
      class="d-flex align-items-center"
      data-bs-toggle="dropdown"
      role="button"
    >
      <span
        class="border rounded-circle d-inline-block overflow-hidden"
        style="width: 45px; height: 45px"
      >
        <img
          src="@/assets/images/writer_profile.jpg"
          alt=""
          class="rounded-circle img-fluid"
          style="width: 45px; height: 45px"
        />
      </span>
      <span class="pe-2">دنیا راد</span>
    </span>
    <ul class="dropdown-menu dropdown-menu-profile rounded-0 border text-end">
      <li class="text-dark text-center font-m">
        <span>ادمین</span>
      </li>
      <hr class="mb-2 mt-2 text-secondary" />
      <li class="dropdown-item text-secondary font-m">
        <ProfileIcon />
        <span class="pe-2">پروفایل</span>
      </li>
      <li class="dropdown-item text-secondary font-m">
        <LogoutIcon />
        <span class="pe-2">خروج</span>
      </li>
    </ul>
  </span>
</template>
