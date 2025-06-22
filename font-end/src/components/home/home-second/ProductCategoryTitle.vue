<template>
    <h2 class="category-title">{{ title }}</h2>
</template>
<script setup>
defineProps({ title: String })
</script>
<style scoped>
.category-title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 16px;
    letter-spacing: 1px;
}
</style>
