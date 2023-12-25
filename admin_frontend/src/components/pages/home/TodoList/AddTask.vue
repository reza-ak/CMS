<script setup>
import { inject, onMounted, reactive, ref, watch } from "vue";

// ====================== icons
import MultiplyIcon from "@/components/icons/Multiply.Vue";
import AddIcon from "@/components/icons/Add.Vue";
import NotificationActiveIcon from "@/components/icons/NotificationActive.Vue";
import RepeatIcon from "@/components/icons/Repeat.Vue";

// ====================== props
const props = defineProps(["addTaskForm"]);

// ====================== vue persian datetime picker package
import DatePicker from "vue3-persian-datetime-picker";

// ====================== Store (Global states)
import { useGlobalStates } from "@/store/globalStates";
const globalStatesStore = useGlobalStates();

// -------Task reminder
const today = new Date();
// tomorrow
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
tomorrow.setHours(9,0,0,0);
const tomorrowDay = globalStatesStore.weekday[tomorrow.getDay()];
// next week
const nextWeek = new Date();
nextWeek.setDate(today.getDate() + 7);
nextWeek.setHours(9,0,0,0);
const nextWeekDay = globalStatesStore.weekday[nextWeek.getDay()];

const reminderDate = ref(null); // reminder date
const reminderDatePicker = ref(null); // custom reminder date
const show = ref(false); // date picker reminder
function closeReminderDatePicker() {
  if (reminderDatePicker.value == null) {
    reminderDate.value = null;
  }
}

watch(reminderDate, () => {
  reminderDatePicker.value = null;
  if (reminderDate.value == "customReminder") {
    console.log(reminderDatePicker.value);
    show.value = true;
  } else {
    if (reminderDate.value == "tomorrow") {
      formData.reminder = tomorrow;
    } else if (reminderDate.value == "nextWeek") {
      formData.reminder = nextWeek;
    }
  }
});

function addCustomReminder() {
  formData.reminder = reminderDatePicker.value;
}

function removeReminder() {
  reminderDatePicker.value = null;
  reminderDate.value = null;
  formData.reminder = null;
}

// -------Task Repeat
const bootstrap = inject("bootstrap"); // bootstrap
const repeatDate = ref(null);
const repeatEach = ref("day");
const repeatNumber = ref(1);
const repeatEachDateStatus = ref(false);
onMounted(() => {
  const repeatModal = document.getElementById("repeatModal");
  repeatModal.addEventListener("hidden.bs.modal", (event) => {
    if (!repeatEachDateStatus.value) {
      repeatDate.value = null;
      repeatEachDateStatus.value = false;
      repeatEach.value = "day";
      repeatNumber.value = 1;
    }
  });
});

watch(repeatDate, () => {
  repeatEachDateStatus.value = false;
  if (repeatDate.value == "customRepeat") {
    repeatEach.value = "day";
    repeatNumber.value = 1;
    const myModal = new bootstrap.Modal("#repeatModal");
    myModal.show(repeatModal);
  } else {
    formData.repeat.repeatEach = repeatDate.value;
    formData.repeat.number = repeatDate.value ? 1 : null;
  }
});

function addCustomRepeat() {
  repeatEachDateStatus.value = true
  formData.repeat.repeatEach = repeatEach.value;
  formData.repeat.number = repeatNumber.value;
}

function removeRepeat() {
  repeatDate.value = null;
  repeatEachDateStatus.value = false;
  repeatEach.value = "day";
  repeatNumber.value = 1;
}

// -------Create new task
const formData = reactive({
  title: null,
  dueDate: null,
  description: null,
  priority: null,
  reminder: null,
  repeat: {
    repeatEach: null,
    number: null,
  },
});
function createNewTask() {
  console.log("newTask", formData);
}
</script>

<template>
  <div
    class="add-task-form"
    :class="{ 'activeAddTaskForm border-bottom': props.addTaskForm }"
  >
    <div class="row m-0 py-3 p-2 p-lg-4">
      <div class="mb-2 mb-lg-3 h6 text-success">
        <AddIcon />
        <h3 class="h6 d-inline pe-2">افزودن فعالیت جدید:</h3>
      </div>

      <!-- Task title -->
      <div class="col-xxl-6 p-2 mb-lg-1">
        <input
          v-model="formData.title"
          type="text"
          class="form-control"
          placeholder="عنوان"
        />
      </div>

      <!-- Task due date -->
      <div class="col-xxl-6 p-2 mb-lg-1 font-m">
        <date-picker
          format="YYYY-MM-DD"
          display-format="jYYYY-jMM-jDD"
          v-model="formData.dueDate"
          color="#00acc1"
          label="زمان انجام"
        >
        </date-picker>
      </div>

      <!-- Task description -->
      <div class="col-12 p-2 mb-lg-1">
        <textarea
          class="form-control"
          style="height: 100px"
          placeholder="توضیحات"
          v-model="formData.description"
        ></textarea>
      </div>

      <!-- Task priority -->
      <div
        class="p-2 mb-lg-1 font-m"
        :class="{ 'input-group': formData.priority }"
      >
        <select
          v-model="formData.priority"
          class="form-select text-secondary"
          :class="{
            'rounded-0 rounded-end-1 border-start-0 text-dark':
              formData.priority,
          }"
        >
          <option value="null" disabled hidden selected>
            -- انتخاب اولویت
          </option>
          <option value="low">کم</option>
          <option value="middle">میانه</option>
          <option value="high">زیاد</option>
        </select>
        <span
          v-if="formData.priority"
          type="button"
          class="input-group-text text-danger bg-white rounded-0 border-end-0 rounded-start-1"
          @click="formData.priority = null"
        >
          <MultiplyIcon />
        </span>
      </div>

      <!-- Task reminder -->
      <div class="p-2 mb-lg-1 font-m" :class="{ 'input-group': reminderDate }">
        <select
          v-model="reminderDate"
          class="form-select text-secondary"
          :class="{
            'rounded-0 rounded-end-1 border-start-0 text-dark': reminderDate,
          }"
          :disabled="!formData.dueDate"
        >
          <option value="null" disabled hidden>-- فعالسازی یادآور</option>
          <option value="tomorrow">فردا ({{ tomorrowDay }} 9 صبح)</option>
          <option value="nextWeek">هفته بعد ({{ nextWeekDay }} 9 صبح)</option>
          <option class="custom-date-picker-reminder" value="customReminder">
            انتخاب زمان یادآوری فعالیت
          </option>
        </select>
        <span
          v-if="reminderDate"
          type="button"
          class="input-group-text text-danger bg-white border-end-0 rounded-start-1"
          @click="removeReminder()"
        >
          <MultiplyIcon />
        </span>
        <date-picker
          :show="show"
          @close="closeReminderDatePicker()"
          type="datetime"
          format="YYYY-MM-DD HH:mm"
          display-format="jYYYY-jMM-jDD HH:mm"
          v-model="reminderDatePicker"
          @change="addCustomReminder()"
          color="#00acc1"
          custom-input=".custom-date-picker-reminder"
          :min="new Date()"
          :max="formData.dueDate"
        >
        </date-picker>
        <div
          v-if="formData.reminder"
          class="col-12 m-0 mt-2 alert alert-info p-2 rounded-1"
        >
          <NotificationActiveIcon />
          یادآوری :
          {{
            new Date(formData.reminder).toLocaleDateString("fa-IR", {
              weekday: "long",
            })
          }}
          {{
            new Date(formData.reminder).toLocaleDateString("fa-IR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
          ساعت
          {{
            new Date(formData.reminder).toLocaleTimeString("fa-IR", {
              hour: "numeric",
              minute: "numeric",
            })
          }}
        </div>
      </div>

      <!-- Task Repeat -->
      <div class="p-2 mb-lg-1 font-m" :class="{ 'input-group': repeatDate }">
        <select
          v-model="repeatDate"
          class="form-select text-secondary"
          :class="{
            'rounded-0 rounded-end-1 border-start-0 text-dark': repeatDate,
          }"
          :disabled="!formData.dueDate"
        >
          <option value="null" disabled hidden selected>-- تکرار فعالیت</option>
          <option value="day">روزانه</option>
          <option value="week">هفتگی</option>
          <option value="month">ماهانه</option>
          <option value="year">سالانه</option>
          <option value="customRepeat">انتخاب تاریخ</option>
        </select>
        <span
          v-if="repeatDate"
          type="button"
          class="input-group-text text-danger bg-white rounded-0 border-end-0 rounded-start-1"
          @click="removeRepeat()"
        >
          <MultiplyIcon />
        </span>
        <div
          v-if="formData.repeat.repeatEach"
          class="col-12 m-0 mt-2 alert alert-info p-2 rounded-1"
        >
          <RepeatIcon />
          تکرار فعالیت: هر
          {{ formData.repeat.number }}
          {{ globalStatesStore.repeatEachTrans[formData.repeat.repeatEach] }}
          یک بار
        </div>

        <!-- custom repeat Modal -->
        <div class="modal fade" id="repeatModal" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header py-2 d-flex justify-content-between">
                <h1 class="modal-title fs-6" id="repeatModalLabel">
                  تکرار فعالیت
                </h1>
                <button class="btn" type="button" data-bs-dismiss="modal">
                  <MultiplyIcon />
                </button>
              </div>
              <div class="modal-body row m-0">
                <div>
                  <p>تکرار هر ...</p>
                </div>
                <div class="col-10 p-2 mb-lg-1 font-m">
                  <select v-model="repeatEach" class="form-select text-dark">
                    <option selected value="day">روز</option>
                    <option value="week">هفته</option>
                    <option value="month">ماه</option>
                    <option value="year">سال</option>
                  </select>
                </div>
                <div class="col-2 p-2 mb-lg-1 font-m">
                  <input
                    v-model="repeatNumber"
                    min="1"
                    class="form-control"
                    type="number"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  بستن
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  @click="addCustomRepeat()"
                >
                  ذخیره تغیرات
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 p-2 mt-0 text-start">
        <button class="btn btn-success" @click="createNewTask()">
          اضافه کردن
        </button>
      </div>
    </div>
  </div>
</template>
