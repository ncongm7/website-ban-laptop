<template>
  <div class="filter-cpu">
    <div class="fw-bold mb-2" @click="showList = !showList" style="cursor:pointer;">
      Bộ lọc CPU
      <span class="float-end">
        <i :class="showList ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
      </span>
    </div>
    <transition name="fade">
      <div v-if="showList">
        <div
          v-for="(cpu, idx) in cpuOptions"
          :key="cpu"
          class="form-check mb-1"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :id="'cpu-' + idx"
            :value="cpu"
            v-model="selected"
          />
          <label class="form-check-label" :for="'cpu-' + idx">
            {{ cpu }}
          </label>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { menuItems } from '@/store/data.js';

export default {
  name: "FilterCpu",
  data() {
    // Lấy danh sách CPU từ menuItems[0].submenus.bySpec.CPU
    let cpuOptions = [];
    if (
      menuItems &&
      menuItems[0] &&
      menuItems[0].submenus &&
      menuItems[0].submenus.bySpec &&
      menuItems[0].submenus.bySpec.CPU
    ) {
      cpuOptions = menuItems[0].submenus.bySpec.CPU;
    }
    return {
      showList: true,
      selected: [],
      cpuOptions,
    };
  },
  watch: {
    selected(newVal) {
      // Emit selected CPUs to parent if needed
      this.$emit("update:cpu", newVal);
    },
  },
};
</script>

<style scoped>
.filter-cpu {
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
