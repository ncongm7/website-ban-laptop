<template>
  <div class="product-list">
    <div class="product-list-grid">
      <ProductCard v-for="laptop in arrProductList" :key="laptop.id" :laptop="laptop" />
    </div>
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
import { laptops } from './arraylaptop.js'
// const arrProductList = defineModel('arrProductList', { type: Array, required: true })
const props = defineProps({
  arrProductList: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.product-list {
  width: 100%;
  padding: 16px 0;
}

.product-list-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;
}
</style>
