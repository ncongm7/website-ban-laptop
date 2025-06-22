<template >
    <div class="main-layout">
        <div class="left-sidebar">
            <SideBarMenu />
        </div>
        <div class="center-content">
            <SlideShow />
        </div>
        <div class="right-sidebar">
            <AsideNews />
        </div>
    </div>
    <HomePageSecond />
</template>

<script setup>

import SlideShow from '@/components/home/home-first/SlideShow.vue'
import AsideNews from '@/components/home/home-first/AsideNews.vue'
import SideBarMenu from '@/components/menu/SideBarMenu.vue'
import HomePageSecond from '@/views/home/HomePageSecond.vue'
</script>

<style scoped>
.main-layout {
    display: flex;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    background: #f8f9fa;
}

.left-sidebar {
    width: 20vw;
    min-width: 180px;
    background: #fff;
    border-right: 1px solid #eee;
    padding: 16px 8px;
}

.center-content {
    width: 60vw;
    min-width: 300px;
    background: #f5f5f5;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.right-sidebar {
    width: 20vw;
    min-width: 180px;
    background: #fff;
    border-left: 1px solid #eee;
    padding: 16px 8px;
}
</style>
