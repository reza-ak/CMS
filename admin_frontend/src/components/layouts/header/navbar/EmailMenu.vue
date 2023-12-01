<script setup>
// ====================== icons
import MessageIcon from "@/components/icons/Message.vue";
</script>

<template>
  <span>
    <div class="dropdown ps-3">
      <span role="button" data-bs-toggle="dropdown">
        <MessageIcon />

        <!-- Unread message number -->
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger p-1"
        >
          2
          <span class="visually-hidden">unread messages</span>
        </span>
      </span>
      <div
        class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start dropdown-menu-email mt-4 p-0 border-0"
      >
        <div class="list-group rounded-0">
          <div
            role="button"
            class="list-group-item list-group-item-action row m-0 p-3 d-flex"
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
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
              </div>
            </div>
          </div>
          <div
            role="button"
            class="list-group-item list-group-item-action row m-0 p-3 d-flex"
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
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>
