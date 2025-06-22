<template>
  <div class="fiter-product-page">
    <div class="row">
      <div class="col-md-3">
        <FilterLeftSide @update-arr="handleFilter" />
      </div>
      <div class="col-md-9">
        <ProductList :arrProductList="arrProductList" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FilterLeftSide from '@/components/secton-filter/filter-sidebar/FilterLeftSide.vue'
import ProductList from '@/components/secton-filter/display-filter-product/ProductList.vue'
import { laptops } from '@/components/secton-filter/display-filter-product/arraylaptop.js'

const arrProductList = ref([...laptops])

function handleFilter(filters) {
  console.log('🔍 Filter nhận được:', filters)
  arrProductList.value = laptops.filter(laptop => {
    if (filters.condition && laptop.condition !== filters.condition) return false
    if (filters.cpu && laptop.cpu !== filters.cpu) return false
    if (filters.price && laptop.price > filters.price) return false
    return true
  })
  console.log(arrProductList.value)
}
</script>

<style scoped>
.fiter-product-page {
  padding: 24px 0;
}
</style>
