<template>
    <span class="product-tag" :class="type">{{ text }}</span>
</template>
<script setup>
defineProps({
    text: String,
    type: String // ví dụ: 'hot', 'sale'
})
</script>
<style scoped>
.product-tag {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #ff9800;
    color: #fff;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 8px;
    font-size: 0.95rem;
    z-index: 2;
}

.product-tag.sale {
    background: #e53935;
}
</style>
