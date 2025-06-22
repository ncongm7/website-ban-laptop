<template>
  <div class="filter-price card p-3">
    <div class="d-flex align-items-center justify-content-between mb-2">
      <span class="fw-bold">Giá</span>
      <i
        class="bi"
        :class="showList ? 'bi-chevron-down' : 'bi-chevron-right'"
        style="cursor:pointer"
        @click="showList = !showList"
      ></i>
    </div>
    <transition name="fade">
      <div v-if="showList">
        <div
          v-for="(item, idx) in priceOptions"
          :key="item.label"
          class="form-check mb-1"
        >
          <input
            class="form-check-input"
            type="checkbox"
            :id="'price-' + idx"
            v-model="selected"
            :value="item.label"
          />
          <label class="form-check-label" :for="'price-' + idx">
            {{ item.label }} <span class="text-muted">({{ item.count }})</span>
          </label>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "FilterPrice",
  data() {
    return {
      showList: true,
      selected: [],
      priceOptions: [
        { label: "Dưới 10 triệu", count: 7 },
        { label: "10 - 15 triệu", count: 11 },
        { label: "15 - 20 triệu", count: 26 },
        { label: "20 - 25 triệu", count: 33 },
        { label: "25 - 30 triệu", count: 27 },
        { label: "30 - 40 triệu", count: 33 },
        { label: "Trên 40 triệu", count: 41 },
      ],
    };
  },
  watch: {
    selected(newVal) {
      // Emit selected price ranges to parent if needed
      this.$emit("update:price", newVal);
    },
  },
};
</script>

<style scoped>
.filter-price {
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
