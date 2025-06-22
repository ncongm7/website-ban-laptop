<template>
    <div class="product-card">
        <div class="img-wrap">
            <img :src="product.image" :alt="product.name" />
            <ProductTag v-if="product.tag" :text="product.tag.text" :type="product.tag.type" />
        </div>
        <div class="product-info">
            <div class="product-code">Mã: {{ product.code }}</div>
            <div class="product-name">{{ product.name }}</div>
            <div class="product-price">
                <span class="old-price" v-if="product.oldPrice">{{ product.oldPrice }}₫</span>
                <span class="new-price">{{ product.price }}₫</span>
                <span class="discount" v-if="product.discount">({{ product.discount }})</span>
            </div>
            <div class="product-status">
                <span class="in-stock">✔ Sẵn hàng</span>
            </div>
            <button class="add-cart-btn">
                <i class="bi bi-cart"></i>
            </button>
        </div>
    </div>
</template>
<script setup>
import ProductTag from './ProductTag.vue'
defineProps({ product: Object })
</script>
<style scoped>
.product-card {
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
    padding: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: box-shadow 0.2s;
    min-width: 220px;
}

.product-card:hover {
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.13);
}

.img-wrap {
    width: 100%;
    aspect-ratio: 4/3;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-wrap img {
    max-width: 100%;
    max-height: 120px;
    object-fit: contain;
    border-radius: 10px;
}

.product-info {
    width: 100%;
    margin-top: 8px;
}

.product-code {
    font-size: 0.85rem;
    color: #888;
    margin-bottom: 2px;
}

.product-name {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 4px;
    min-height: 40px;
}

.product-price {
    margin-bottom: 4px;
}

.old-price {
    text-decoration: line-through;
    color: #888;
    margin-right: 6px;
    font-size: 0.95rem;
}

.new-price {
    color: #e53935;
    font-weight: bold;
    font-size: 1.1rem;
}

.discount {
    color: #388e3c;
    font-size: 0.95rem;
    margin-left: 4px;
}

.product-status {
    color: #388e3c;
    font-size: 0.95rem;
    margin-bottom: 6px;
}

.add-cart-btn {
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 12px;
    right: 12px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background 0.2s;
}

.add-cart-btn:hover {
    background: #0056b3;
}
</style>
