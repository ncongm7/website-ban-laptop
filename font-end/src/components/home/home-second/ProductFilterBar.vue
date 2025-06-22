<template>
    <div class="filter-bar">
        <button v-for="brand in brands" :key="brand" class="filter-btn" :class="{ active: brand === selected }"
            @click="$emit('select', brand)">
            {{ brand }}
        </button>
        <button class="see-all-btn">Xem tất cả →</button>
    </div>
</template>
<script setup>
defineProps({
    brands: Array,
    selected: String
})
</script>
<style scoped>
.filter-bar {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 18px;
}

.filter-btn {
    background: #f5f5f5;
    border: none;
    border-radius: 18px;
    padding: 6px 18px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
}

.filter-btn.active,
.filter-btn:hover {
    background: #007bff;
    color: #fff;
}

.see-all-btn {
    background: #e53935;
    color: #fff;
    border: none;
    border-radius: 18px;
    padding: 6px 18px;
    font-weight: 600;
    margin-left: auto;
    cursor: pointer;
}
</style>
