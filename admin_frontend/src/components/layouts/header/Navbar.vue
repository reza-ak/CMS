<script setup>
import { ref } from "vue";

// ====================== icons
import OpenMenuIcon from "@/components/icons/OpenMenu.Vue";
import CloseMenuIcon from "@/components/icons/CloseMenu.vue";
import SearchIcon from "@/components/icons/Search.vue";
import CloseIcon from "@/components/icons/Close.vue";
import MessageIcon from "@/components/icons/Message.vue";
import ProfileIcon from "@/components/icons/Profile.vue";
import LogoutIcon from "@/components/icons/Logout.vue";

// ====================== Store
import { useHeaderStore } from "@/store/header";
const headerStore = useHeaderStore();

// Open and close search form
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
</script>

<template>
  <nav
    ref="navbar"
    class="navbar border-bottom px-4 d-flex align-items-center justify-content-between text-secondary"
  >
    <div>
      <sapn class="ps-2" role="button" @click="toggleAsideHeader()">
        <OpenMenuIcon v-if="!openMenu" />
        <CloseMenuIcon v-if="openMenu" />
      </sapn>
      <span>
        <form action="#" class="d-inline-flex align-items-center">
          <span class="pe-2" role="button" @click="toggleSearch()">
            <SearchIcon v-if="!searchStatus" />
            <CloseIcon v-if="searchStatus" />
          </span>
          <input
            v-if="searchStatus"
            type="search"
            class="form-control border-0"
            placeholder="جستوجو..."
          />
        </form>
      </span>
    </div>

    <div class="d-flex align-items-center">
      <span>
        <div class="dropdown ps-3">
          <span role="button" data-bs-toggle="dropdown">
            <MessageIcon />
          </span>
          <div class="dropdown-menu dropdown-menu-email mt-4 p-0 border-0">
            <div class="list-group rounded-0">
              <div
                role="button"
                class="list-group-item list-group-item-action row m-0 p-3 d-flex align-items-start"
              >
                <div class="col-3 p-0 ps-3">
                  <img
                    src="@/assets/images/owner_profile.webp"
                    alt=""
                    class="rounded-circle img-thumbnail"
                    style="width: 70px; height: 65px"
                  />
                </div>
                <div class="col-9 p-0 text-end">
                  <div class="d-flex justify-content-between pb-3 font-m">
                    <div>
                      <strong> رها </strong>
                      <span class="badge bg-success font-m"> مدیر </span>
                    </div>
                    <div class="text-secondary">
                      <small>21 دقیقه پیش</small>
                    </div>
                  </div>
                  <div>
                    <p class="m-0 font-s text-truncate text-dark">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.
                    </p>
                  </div>
                </div>
              </div>
              <div
                role="button"
                class="list-group-item list-group-item-action row m-0 p-3 d-flex align-items-start"
              >
                <div class="col-3 p-0 ps-3">
                  <img
                    src="@/assets/images/admin_profile.jpg"
                    alt=""
                    class="rounded-circle img-thumbnail"
                    style="width: 70px; height: 65px"
                  />
                </div>
                <div class="col-9 p-0 text-end">
                  <div class="d-flex justify-content-between pb-3 font-m">
                    <div>
                      <strong> مهدی </strong>
                      <span class="badge bg-warning font-m"> ادمین </span>
                    </div>
                    <div class="text-secondary">
                      <small>45 دقیقه پیش</small>
                    </div>
                  </div>
                  <div>
                    <p class="m-0 font-s text-truncate text-dark">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
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
        <ul
          class="dropdown-menu dropdown-menu-profile rounded-0 border text-end"
        >
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
    </div>
  </nav>
</template>
