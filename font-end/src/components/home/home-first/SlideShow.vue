<template>
    <div class="slideshow-container">
        <div v-for="(slide, idx) in slides" :key="idx" class="slide" :class="{ active: idx === currentIndex }"
            v-show="idx === currentIndex">
            <img :src="slide" alt="slide" class="slide-image" />
            <button class="slide-control prev" @click="prevSlide">&#10094;</button>
            <button class="slide-control next" @click="nextSlide">&#10095;</button>
        </div>
        <div class="slide-dots">
            <span v-for="(slide, idx) in slides" :key="idx" class="dot" :class="{ active: idx === currentIndex }"
                @click="goToSlide(idx)"></span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import slide1 from '@/assets/img/slide1.webp'
import slide2 from '@/assets/img/slide2.webp'
import slide3 from '@/assets/img/slide3.webp'
import slide4 from '@/assets/img/slide4.webp'

const slides = [slide1, slide2, slide3, slide4]

const currentIndex = ref(0)

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.length
}

const goToSlide = (index) => {
    currentIndex.value = index
}
</script>

<style scoped>
.slideshow-container {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
    background: #fff;
}

.slide {
    position: relative;
    width: 100%;
    height: 340px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.slide-image {
    width: 100%;
    height: 340px;
    object-fit: cover;
    border-radius: 16px;
}

.slide-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    font-size: 2rem;
    cursor: pointer;
    z-index: 2;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.slide-control.prev {
    left: 16px;
}

.slide-control.next {
    right: 16px;
}

.slide-control:hover {
    background: rgba(0, 0, 0, 0.7);
}

.slide-dots {
    position: absolute;
    bottom: 18px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 8px;
    z-index: 3;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ddd;
    cursor: pointer;
    transition: background 0.2s;
}

.dot.active {
    background: #007bff;
}
</style>
