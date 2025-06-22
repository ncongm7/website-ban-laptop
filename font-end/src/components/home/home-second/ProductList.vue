<template>
    <div class="product-list">
        <ProductCard v-for="item in products" :key="item.code" :product="item" />
    </div>
</template>
<script setup>
import ProductCard from './ProductCard.vue'
defineProps({ products: Array })
</script>
<style scoped>
.product-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
}
</style>
