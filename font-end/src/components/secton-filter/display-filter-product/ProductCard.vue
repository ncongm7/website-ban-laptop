<template>
  <div class="product-card">
    <img
      :src="laptop.image"
      :alt="laptop.name"
      class="product-image"
    />
    <div class="product-info">
      <h3 class="product-name">{{ laptop.name }}</h3>
      <div class="product-brand">{{ laptop.brand }}</div>
      <div class="product-specs">
        <div><strong>CPU:</strong> {{ laptop.cpu }}</div>
        <div><strong>RAM:</strong> {{ laptop.ram }}</div>
        <div><strong>Lưu trữ:</strong> {{ laptop.storage }}</div>
        <div><strong>Màn hình:</strong> {{ laptop.screen }}</div>
        <div><strong>GPU:</strong> {{ laptop.gpu }}</div>
        <div><strong>Trọng lượng:</strong> {{ laptop.weight }}</div>
        <div><strong>Tình trạng:</strong> {{ laptop.condition }}</div>
      </div>
      <div class="product-price">
        {{ laptop.price.toLocaleString('vi-VN') }} đ
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    laptop: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.product-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  width: 270px;
  padding: 18px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s;
}
.product-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.13);
}
.product-image {
  width: 180px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 12px;
}
.product-info {
  width: 100%;
}
.product-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
}
.product-brand {
  color: #888;
  font-size: 14px;
  margin-bottom: 8px;
}
.product-specs {
  font-size: 13px;
  margin-bottom: 10px;
  line-height: 1.5;
}
.product-price {
  color: #d0021b;
  font-size: 18px;
  font-weight: bold;
  margin-top: 6px;
  text-align: right;
}
</style>

