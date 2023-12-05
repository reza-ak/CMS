<script setup>
import { ref } from "vue";

// ====================== icons
import BagIcon from "@/components/icons/Bag.vue";
import ArrowIncreaseIcon from "@/components/icons/ArrowIncrease.vue";
import ArrowStraightIcon from "@/components/icons/ArrowStraight.vue";
import ArrowDecreaseIcon from "@/components/icons/ArrowDecrease.vue";
import QuestionIcon from "@/components/icons/Question.vue";

// ====================== Display information orders in the requested time period
const numberOrders = ref("یک روز");
function numberOrdersPeriod() {
  // console.log("numberOrders", numberOrders.value);
}
</script>

<template>
  <div class="col-12 col-md-6 col-lg-3 pb-3 pb-lg-0">
    <div class="border bg-white p-3">
      <div class="card-body text-secondary">
        <div class="d-flex justify-content-between align-items-center pb-5">
          <div class="col-7">
            <h3 class="card-title h6">
              <BagIcon />
              <span class="pe-2">تعداد سفارش ها</span>
            </h3>
          </div>
          <div class="col-5">
            <select
              v-model="numberOrders"
              dir="ltr"
              class="form-select form-select-sm border-0"
              @change="numberOrdersPeriod()"
            >
              <option value="یک روز" selected>یک روز</option>
              <option value="یک هفته">یک هفته</option>
              <option value="یک ماه">یک ماه</option>
              <option value="سه ماه">سه ماه</option>
              <option value="یک سال">یک سال</option>
            </select>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h6 class="card-title">78</h6>
          </div>
          <div class="text-warning rounded">
            <span class="tip ms-2 text-secondary">
              <QuestionIcon />
              <span class="p-2 text-center border">
                درصد تغییرات سفارشات این {{ numberOrders }} نسبت به
                {{ numberOrders }} گذشته
              </span>
            </span>
            <ArrowStraightIcon />
            0%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
