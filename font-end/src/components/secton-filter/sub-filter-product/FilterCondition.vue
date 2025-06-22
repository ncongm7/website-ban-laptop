<template>
  <div class="filter-condition">
    <div class="fw-bold mb-2" @click="showList = !showList" style="cursor:pointer;">
      Tình trạng
      <span class="float-end">
        <i :class="showList ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
      </span>
    </div>
    <transition name="fade">
      <div v-if="showList">
        <div
          v-for="(condition, idx) in conditionOptions"
          :key="condition"
          class="form-check mb-1"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :id="'condition-' + idx"
            :value="condition"
            v-model="selected"
          />
          <label class="form-check-label" :for="'condition-' + idx">
            {{ condition }}
          </label>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { menuItems } from '@/store/data.js';

export default {
  name: "FilterCondition",
  data() {
    // Lấy danh sách tình trạng từ menuItems[0].submenus.condition
    let conditionOptions = [];//mảng các tình trạng
    if (
      menuItems 
    ) {
      conditionOptions = menuItems.map(item => item.submenus.condition);
      conditionOptions = conditionOptions.flat().filter(condition => condition !== undefined)
      conditionOptions = [...new Set(conditionOptions)]
    }
    return {
      showList: true,
      selected: [],
      conditionOptions,
    };
  },
  watch: {
    selected(newVal) {
      // Emit selected conditions to parent if needed
      this.$emit("update:condition", newVal);
    },
  },
};

</script>

<style scoped>
.filter-condition {
  background: #f8f9fa;
  border-radius: 8px;
  min-width: 220px;
  font-size: 15px;
}
.fw-bold {
  font-weight: bold;
}
.form-check-label {
  cursor: pointer;
  user-select: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
