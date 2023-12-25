<script setup>
// ====================== icons
import DownIcon from "@/components/icons/Down.Vue";
import CheckIcon from "@/components/icons/Check.Vue";
import PencilIcon from "@/components/icons/Pencil.Vue";
import MultiplyIcon from "@/components/icons/Multiply.Vue";
import StartDateIcon from "@/components/icons/StartDate.Vue";
import EndDateIcon from "@/components/icons/EndDate.Vue";
import NotificationActiveIcon from "@/components/icons/NotificationActive.Vue";
import RepeatIcon from "@/components/icons/Repeat.Vue";
</script>

<template>
  <div class="accordion-item">
    <h2 class="accordion-header border-end border-4 border-info">
      <button
        class="accordion-button collapsed d-inline shadow-none px-3 px-lg-4 text-secondary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne"
      >
        <div class="d-flex justify-content-between">
          <div class="col-9 col-lg-10 text-end">
            <div class="text-truncate text-dark mb-2">
              <span title="اولویت" class="badge bg-success ms-2">کم</span>
              <span> تماس با مدیر تماس با مدیر تماس با مدیر </span>
            </div>
            <div class="font-m d-inline">
              <!-- <span title="هر 1 هفته یک بار">
                <RepeatIcon />
              </span> -->
              31 اردیبهشت 1403
            </div>
          </div>
          <div
            class="col-3 col-lg-2 text-start d-flex justify-content-end align-items-center"
          >
            <!-- <span class="text-warning pe-2">
              <NotificationActiveIcon />
            </span> -->
            <div class="pe-2"><DownIcon /></div>
          </div>
        </div>
      </button>
    </h2>
    <div
      id="flush-collapseOne"
      class="accordion-collapse collapse"
      data-bs-parent="#accordionTodoList"
    >
      <div
        class="accordion-body text-secondary border-end border-4 border-info text-justify"
      >
        <div class="text-dark">تماس با مدیر تماس با مدیر تماس با مدیر</div>
        <div class="mt-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </div>
        <div class="font-m mt-3">
          <div>
            <StartDateIcon />
            <span class="px-1"> زمان ایجاد: 14 آذر 1402 ساعت 17:43 </span>
          </div>
          <div>
            <EndDateIcon />
            <span class="px-1"> زمان انجام: هنوز انجام نشده است. </span>
          </div>
        </div>
        <div class="d-flex justify-content-between mt-3">
          <div>
            <button class="btn btn-outline-success btn-sm rounded-0">
              <!-- <CheckIcon /> -->
              انجام شد
              <span>؟</span>
            </button>
          </div>
          <div>
            <button class="btn btn-warning btn-sm me-2 rounded-0">
              <PencilIcon />
              ویرایش
            </button>
            <button class="btn btn-danger btn-sm me-2 rounded-0">
              <MultiplyIcon />
              حذف
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header border-end border-4 border-success">
      <button
        class="accordion-button collapsed d-inline shadow-none px-3 px-lg-4 text-secondary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseTow"
      >
        <div class="d-flex justify-content-between">
          <div class="col-9 col-lg-10 text-end">
            <div class="text-truncate text-dark mb-2">
              <span title="اولویت" class="badge bg-danger ms-2">زیاد</span>
              <span>
                تماس با مدیر تماس با مدیر تماس با مدیر تماس با مدیر تماس با مدیر
                تماس با مدیر
              </span>
            </div>
            <div class="font-m d-inline">
              <span title="هر 1 هفته یک بار">
                <RepeatIcon />
              </span>
              31 اردیبهشت 1403
            </div>
          </div>
          <div
            class="col-3 col-lg-2 text-start d-flex justify-content-end align-items-center"
          >
            <span class="text-warning pe-2">
              <NotificationActiveIcon />
            </span>
            <div class="pe-2"><DownIcon /></div>
          </div>
        </div>
      </button>
    </h2>
    <div
      id="flush-collapseTow"
      class="accordion-collapse collapse"
      data-bs-parent="#accordionTodoList"
    >
      <div
        class="accordion-body text-secondary border-end border-4 border-success text-justify"
      >
        <div class="text-dark">
          تماس با مدیر تماس با مدیر تماس با مدیر تماس با مدیر تماس با مدیر تماس
          با مدیر
        </div>
        <div class="mt-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </div>
        <div class="font-m mt-3">
          <div>
            <StartDateIcon />
            <span class="px-1"> زمان ویرایش: 14 آذر 1402 ساعت 17:43 </span>
          </div>
          <div>
            <EndDateIcon />
            <span class="px-1"> زمان انجام: 19 آذر 1402 ساعت 22:00 </span>
          </div>
        </div>
        <div class="d-flex justify-content-between mt-3">
          <div>
            <button class="btn btn-success btn-sm rounded-0">
              <CheckIcon />
              انجام شد
              <!-- <span>؟</span> -->
            </button>
          </div>
          <div>
            <button class="btn btn-warning btn-sm me-2 rounded-0">
              <PencilIcon />
              ویرایش
            </button>
            <button class="btn btn-danger btn-sm me-2 rounded-0">
              <MultiplyIcon />
              حذف
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header border-end border-4 border-danger">
      <button
        class="accordion-button collapsed d-inline shadow-none px-3 px-lg-4 text-secondary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseThree"
      >
        <div class="d-flex justify-content-between">
          <div class="col-9 col-lg-10 text-end">
            <div class="text-truncate text-dark mb-2">
              <span title="اولویت" class="badge text-white bg-warning ms-2"
                >میانه</span
              >
              <span>
                تماس با مدیر تماس با مدیر تماس با مدیر تماس با مدیر تماس با مدیر
                تماس با مدیر
              </span>
            </div>
            <div class="font-m d-inline">
              <!-- <span title="هر 1 هفته یک بار">
                <RepeatIcon />
              </span> -->
              دیروز
            </div>
          </div>
          <div
            class="col-3 col-lg-2 text-start d-flex justify-content-end align-items-center"
          >
            <!-- <span class="text-warning pe-2">
              <NotificationActiveIcon />
            </span> -->
            <div class="pe-2"><DownIcon /></div>
          </div>
        </div>
      </button>
    </h2>
    <div
      id="flush-collapseThree"
      class="accordion-collapse collapse"
      data-bs-parent="#accordionTodoList"
    >
      <div
        class="accordion-body text-secondary border-end border-4 border-danger text-justify"
      >
        <div class="text-dark">
          تماس با مدیر تماس با مدیر تماس با مدیر تماس با مدیر تماس با مدیر تماس
          با مدیر
        </div>
        <div class="mt-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </div>
        <div
          class="alert alert-danger text-center p-1 font-l mt-3"
          role="alert"
        >
          متاسفانه زمان انجام این فعالیت به پایان رسیده است و هنوز انجام نشده است.
        </div>
        <div class="font-m mt-3">
          <div>
            <StartDateIcon />
            <span class="px-1"> زمان ایجاد: 14 اردیبهشت 1402 ساعت 17:43 </span>
          </div>
          <div>
            <EndDateIcon />
            <span class="px-1"> زمان انجام: هنوز انجام نشده است.</span>
          </div>
        </div>
        <div class="d-flex justify-content-between mt-3">
          <div>
            <button class="btn btn-outline-success btn-sm rounded-0">
              <!-- <CheckIcon /> -->
              انجام شد
              <span>؟</span>
            </button>
          </div>
          <div>
            <button class="btn btn-warning btn-sm me-2 rounded-0">
              <PencilIcon />
              ویرایش
            </button>
            <button class="btn btn-danger btn-sm me-2 rounded-0">
              <MultiplyIcon />
              حذف
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header border-end border-4 border-warning">
      <button
        class="accordion-button collapsed d-inline shadow-none px-3 px-lg-4 text-secondary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseFour"
      >
        <div class="d-flex justify-content-between">
          <div class="col-9 col-lg-10 text-end">
            <div class="text-truncate text-dark mb-2">
              <span title="اولویت" class="badge bg-success ms-2">کم</span>
              <span> تماس با مدیر </span>
            </div>
            <div class="font-m d-inline">
              <span title="هر 1 هفته یک بار">
                <RepeatIcon />
              </span>
              31 دی 1402
            </div>
          </div>
          <div
            class="col-3 col-lg-2 text-start d-flex justify-content-end align-items-center"
          >
            <span class="text-warning pe-2">
              <NotificationActiveIcon />
            </span>
            <div class="pe-2"><DownIcon /></div>
          </div>
        </div>
      </button>
    </h2>
    <div
      id="flush-collapseFour"
      class="accordion-collapse collapse"
      data-bs-parent="#accordionTodoList"
    >
      <div
        class="accordion-body text-secondary border-end border-4 border-warning text-justify"
      >
        <div class="text-dark">تماس با مدیر</div>
        <div class="mt-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </div>
        <div
          class="alert alert-warning text-center p-1 font-l mt-3"
          role="alert"
        >
          این فعالیت با تاخیر انجام شده است.
        </div>
        <div class="font-m mt-3">
          <div>
            <StartDateIcon />
            <span class="px-1"> زمان ویرایش: 14 آذر 1402 ساعت 17:43 </span>
          </div>
          <div>
            <EndDateIcon />
            <span class="px-1"> زمان انجام: 16 اردیبهشت 1403 ساعت 22:00 </span>
          </div>
        </div>
        <div class="d-flex justify-content-between mt-3">
          <div>
            <button class="btn btn-success btn-sm rounded-0">
              <CheckIcon />
              انجام شد
              <!-- <span>؟</span> -->
            </button>
          </div>
          <div>
            <button class="btn btn-warning btn-sm me-2 rounded-0">
              <PencilIcon />
              ویرایش
            </button>
            <button class="btn btn-danger btn-sm me-2 rounded-0">
              <MultiplyIcon />
              حذف
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
