<template>
    <div class="header-category-bar d-flex align-items-center position-relative">
        <!-- Nút DANH MỤC -->
        <div class="category-btn d-flex align-items-center" :class="{ active: showMenu }" @mouseenter="showMenu = true"
            @mouseleave="showMenu = false" tabindex="0">
            <i class="bi bi-list fs-5 me-2"></i>
            <span class="fw-bold">DANH MỤC</span>
            <!-- SideBarMenu chỉ hiện khi hover -->
            <transition name="fade">
                <div v-if="showMenu" class="sidebar-menu-wrapper" @mouseenter="showMenu = true"
                    @mouseleave="showMenu = false">
                    <SideBarMenu />
                </div>
            </transition>
        </div>
        <!-- Các router-link tin tức -->
        <router-link to="/dat-lich-hen" class="category-news-item">
            <span class="dot"></span>
            Đặt Lịch Hẹn Để Được Hỗ Trợ Tốt Hơn!
        </router-link>
        <router-link to="/thinkbook-2025" class="category-news-item">
            <span class="dot"></span>
            THINKBOOK 2025 LINE UP ĐÃ VỀ!
        </router-link>
        <router-link to="/lenovo-ideapad-2024-2025" class="category-news-item">
            <span class="dot"></span>
            TỔNG HỢP LENOVO IDEAPAD 2024 - 2025!
        </router-link>
    </div>
</template>

<script setup>
import SideBarMenu from './menu/SideBarMenu.vue'
import { ref } from 'vue'
const showMenu = ref(false)
</script>

<style scoped>
.header-category-bar {
    background: #fff;
    border-radius: 4px;
    margin: 0 8px 8px 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
    min-height: 44px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 10;
}

.category-btn {
    background: #0d3ea1;
    color: #fff !important;
    padding: 0 24px;
    width: 220px;
    height: 44px;
    display: flex;
    align-items: center;
    border-radius: 4px 0 0 4px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    z-index: 20;
    transition: background 0.2s;
}

.category-btn.active,
.category-btn:hover,
.category-btn:focus {
    background: #0d6efd;
    color: #fff;
}

.sidebar-menu-wrapper {
    position: absolute;
    top: 44px;
    left: 0;
    z-index: 100;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}

.category-news-item {
    display: flex;
    align-items: center;
    padding: 0 24px;
    color: #222;
    text-decoration: none;
    font-size: 15px;
    position: relative;
    height: 44px;
    border-left: 1px solid #eee;
    transition: background 0.2s;
}

.category-news-item:first-of-type {
    border-left: none;
}

.category-news-item:hover {
    background: #f5f7fa;
    color: #0d3ea1;
}

.dot {
    width: 8px;
    height: 8px;
    background: orange;
    border-radius: 50%;
    display: inline-block;
    margin-right: 8px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
