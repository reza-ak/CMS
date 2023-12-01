<script setup>
import { ref } from "vue";

// ====================== component
import ProfileMenu from "./ProfileMenu.vue";
import EmailMenu from "./EmailMenu.vue";

// ====================== icons
import OpenMenuIcon from "@/components/icons/OpenMenu.Vue";
import CloseMenuIcon from "@/components/icons/CloseMenu.vue";
import SearchIcon from "@/components/icons/Search.vue";
import CloseIcon from "@/components/icons/Close.vue";

// ====================== Store
import { useHeaderStore } from "@/store/header";
import { useHeaderResponsiveStore } from "@/store/headerResponsive";
const headerStore = useHeaderStore();
const headerResponsiveStore = useHeaderResponsiveStore();

// Open and close search input
const searchStatus = ref(false);
function toggleSearch() {
  searchStatus.value = !searchStatus.value;
}

// Open and close navbar header
const navbar = ref(null);
const openMenu = ref(true);
function toggleAsideHeader() {
  headerStore.changeHeader();
  const statusHeader = headerStore.statusHeader;
  if (statusHeader) {
    // Open navbar header
    openMenu.value = true;
    navbar.value.style.marginRight = "250px";
  } else {
    // Close navbar header
    openMenu.value = false;
    navbar.value.style.marginRight = "67px";
  }
}
function toggleAsideHeaderResponsive() {
  headerResponsiveStore.changeHeader();
}
</script>

<template>
  <nav
    ref="navbar"
    class="navbar border-bottom px-4 d-flex align-items-center justify-content-between text-secondary"
  >
    <div class="row m-0 w-100">
      <div class="col-2 col-sm-1 col-lg-6 p-0 d-flex align-items-center">
        <sapn
          class="ps-2 d-none d-lg-inline"
          role="button"
          @click="toggleAsideHeader()"
        >
          <OpenMenuIcon v-if="!openMenu" />
          <CloseMenuIcon v-if="openMenu" />
        </sapn>
        <!-- responsive -->
        <sapn
          class="ps-2 d-inline d-lg-none"
          role="button"
          @click="toggleAsideHeaderResponsive()"
        >
          <OpenMenuIcon v-if="openMenu" />
        </sapn>

        <span class="d-none d-lg-inline">
          <div action="#" class="d-inline-flex align-items-center">
            <span class="pe-2" role="button" @click="toggleSearch()">
              <SearchIcon v-if="!searchStatus" />
              <CloseIcon v-if="searchStatus" />
            </span>
            <input
              v-if="searchStatus"
              type="search"
              class="form-control border-0 shadow-none"
              placeholder="جستوجو..."
            />
          </div>
        </span>
      </div>

      <div
        class="col-10 col-sm-11 col-lg-6 p-0 d-flex justify-content-between justify-content-lg-end align-items-center"
      >
        <EmailMenu />
        <ProfileMenu />
      </div>
    </div>
  </nav>
</template>
