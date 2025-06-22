<template>
  <div class="filter-left-side">
    <FilterCondition @update:condition="onUpdateCondition" />
    <FilterCpu @update:cpu="onUpdateCpu" />
    <FilterPrice  update:price="onUpdatePrice"  />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FilterCondition from '../sub-filter-product/FilterCondition.vue'
import FilterCpu from '../sub-filter-product/FilterCpu.vue'
import FilterPrice from '../sub-filter-product/FilterPrice.vue'

const emit = defineEmits(['update-arr'])

const filters = ref({
  condition: null,
  cpu: null,
  price: null
})

function emitFilters() {
  emit('update-arr', { ...filters.value })
}

function onUpdateCondition(selected) {
  filters.value.condition = Array.isArray(selected) ? selected[0] : selected
  emitFilters()
}

function onUpdateCpu(selected) {
  filters.value.cpu = Array.isArray(selected) ? selected[0] : selected
  emitFilters()
}


function onUpdatePrice(selected) {
  filters.value.price = Array.isArray(selected) ? selected[0] : selected
  emitFilters()
}
</script>

<style scoped>
.filter-left-side {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
