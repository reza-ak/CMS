<script setup>
import { ref, watch } from "vue";

// ====================== icons
import DashboardIcon from "@/components/icons/Dashboard.vue";
import HomeIcon from "@/components/icons/Home.vue";
import BlogIcon from "@/components/icons/Blog.vue";
import PageIcon from "@/components/icons/Page.vue";
import CommentIcon from "@/components/icons/Comment.vue";
import TemplateIcon from "@/components/icons/Template.vue";
import UsersIcon from "@/components/icons/Users.vue";
import SettingIcon from "@/components/icons/Setting.vue";
import DownIcon from "@/components/icons/Down.vue";
import CloseMenuIcon from "@/components/icons/CloseMenu.vue";

// ====================== Store
import { useHeaderStore } from "@/store/header";
import { useHeaderResponsiveStore } from "@/store/headerResponsive";
const headerStore = useHeaderStore();
const headerResponsiveStore = useHeaderResponsiveStore();

// Open and close aside header (click event)
const asideHeader = ref(null);
const openMenu = ref(true);
watch(headerStore, () => {
  openMenu.value = headerStore.statusHeader;
  if (headerStore.statusHeader) {
    // Open aside header
    asideHeader.value.style.width = "250px";
  } else {
    // Close aside header
    asideHeader.value.style.width = "67px";
  }
});

// Open and close aside header (mouse event)
// Open aside header
function openAsideHeader() {
  const headerStatus = headerStore.statusHeader;
  if (!headerStatus) {
    openMenu.value = true;
    asideHeader.value.style.width = "250px";
  }
}
// Close aside header
function closeAsideHeader() {
  const headerStatus = headerStore.statusHeader;
  if (!headerStatus) {
    openMenu.value = false;
    asideHeader.value.style.width = "67px";
  }
}

// Open and close aside header (responsive mode)
watch(headerResponsiveStore, () => {
  openMenu.value = headerResponsiveStore.statusHeader;
  if (headerResponsiveStore.statusHeader) {
    // Open aside header
    asideHeader.value.style.width = "250px";
  } else {
    // Close aside header
    asideHeader.value.style.width = "0px";
  }
});

function closeAsideHeaderResponsive() {
  headerResponsiveStore.changeHeader();
}
</script>

<template>
  <aside
    @mouseenter="openAsideHeader()"
    @mouseleave="closeAsideHeader()"
    ref="asideHeader"
    class="aside bg-white border-start overflow-hidden"
  >
    <div class="logo text-nowrap py-3" :class="{ 'border-bottom': openMenu }">
      <div class="d-inline text-blue">
        <DashboardIcon />
      </div>
      <h6 class="m-0 text-dark pe-1 ps-4">پنل مدیریت</h6>
      <div
        class="d-inline d-lg-none text-secondary"
        role="button"
        @click="closeAsideHeaderResponsive()"
      >
        <CloseMenuIcon v-if="openMenu" />
      </div>
    </div>

    <div class="menu text-nowrap text-muted pt-4">
      <ul class="list-inline p-0">
        <li class="pt-2 pb-3 px-4 d-block d-lg-none">
          <input
            type="search"
            class="form-control shadow-none"
            placeholder="جستوجو..."
          />
        </li>

        <li class="pt-2" role="button">
          <a href="#">
            <HomeIcon />
            صفحه اصلی
          </a>
        </li>

        <li class="pt-4">
          <div
            class="d-flex justify-content-between"
            data-bs-toggle="collapse"
            href="#collapseBlog"
            role="button"
          >
            <div>
              <BlogIcon />
              نوشته&zwnj;ها
            </div>
            <div><DownIcon /></div>
          </div>
          <ul
            v-show="openMenu"
            class="collapse list-inline px-5"
            id="collapseBlog"
          >
            <li>
              <a class="dropdown-item pe-4 py-2 pt-3 d-block" href="#">
                همه نوشته&zwnj;ها
              </a>
            </li>
            <li>
              <a class="dropdown-item pe-4 py-2 mb-1 d-block" href="#">
                دسته&zwnj;بندی
              </a>
            </li>
          </ul>
        </li>

        <li class="pt-4" role="button">
          <a href="#">
            <PageIcon />
            صفحه&zwnj;ها
          </a>
        </li>

        <li class="pt-4" role="button">
          <a href="#">
            <CommentIcon />
            نظرات
          </a>
        </li>

        <li class="pt-4" role="button">
          <a href="#">
            <TemplateIcon />
            قالب&zwnj;ها
          </a>
        </li>

        <li class="pt-4" role="button">
          <a href="#">
            <UsersIcon />
            کاربران
          </a>
        </li>

        <li class="pt-4" role="button">
          <a href="#">
            <SettingIcon />
            تنظیمات
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
