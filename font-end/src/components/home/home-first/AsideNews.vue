<template>
  <aside class="aside-news shadow-sm rounded bg-white p-3">
    <h5 class="aside-title mb-3 text-primary fw-bold">TIN MỚI NHẤT</h5>
    <div v-for="(news, idx) in newsList" :key="idx" class="news-item mb-3" :class="{ 'active': idx === 0 }">
      <router-link :to="news.link" class="d-flex align-items-start text-decoration-none">
        <img :src="news.image" class="news-thumb rounded me-3" alt="news thumb" />
        <div class="flex-grow-1">
          <div class="news-title fw-semibold text-dark" :class="{ 'text-primary': idx === 0 }" style="font-size: 15px;">
            {{ news.title }}
          </div>
          <div class="news-meta text-muted small mt-1">
            {{ news.date }} - {{ news.views }} views
          </div>
        </div>
      </router-link>
    </div>
    <router-link to="/news" class="see-all-link d-inline-block mt-2 text-primary fw-semibold small">
      Tất cả tin tức &gt;
    </router-link>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import news1 from '@/assets/img/slide1.webp'
import news2 from '@/assets/img/slide2.webp'
import news3 from '@/assets/img/slide3.webp'
import news4 from '@/assets/img/slide4.webp'

const newsList = ref([
  {
    title: 'Đặt Lịch Hẹn Trước Để Được Hỗ Trợ Tốt Hơn, Ưu Đãi Đặc Biệt!',
    date: '01/06/2025',
    views: 624,
    image: news1,
    link: '/dat-lich-hen'
  },
  {
    title: 'Thông Báo Lịch Làm Việc Dịp Đại Lễ 30/4 - 1/5',
    date: '28/04/2025',
    views: 1341,
    image: news2,
    link: '/thong-bao-lich-lam-viec-304-15'
  },
  {
    title: 'Thông Báo Bảo Trì Website',
    date: '03/04/2025',
    views: 2643,
    image: news3,
    link: '/thong-bao-bao-tri-website'
  },
  {
    title: 'Thông Báo Sửa Chữa Showroom',
    date: '16/12/2024',
    views: 1492,
    image: news4,
    link: '/thong-bao-sua-chua-showroom'
  }
])
</script>

<style scoped>
.aside-news {
  min-width: 270px;
  max-width: 340px;
  font-size: 15px;
}
.aside-title {
  font-size: 17px;
  letter-spacing: 0.5px;
}
.news-item {
  background: #f7fafd;
  border-radius: 10px;
  padding: 10px 10px 10px 10px;
  transition: box-shadow 0.2s, background 0.2s;
  box-shadow: none;
}
.news-item.active,
.news-item:hover {
  background: #eaf6ff;
  box-shadow: 0 2px 8px rgba(13, 62, 253, 0.07);
}
.news-thumb {
  width: 56px;
  height: 40px;
  object-fit: cover;
  border-radius: 6px;
  background: #fff;
  flex-shrink: 0;
}
.news-title {
  line-height: 1.3;
  font-size: 15px;
}
.news-meta {
  font-size: 13px;
}
.see-all-link {
  font-size: 14px;
  text-decoration: none;
  transition: color 0.2s;
}
.see-all-link:hover {
  color: #0d6efd;
  text-decoration: underline;
}
</style>
