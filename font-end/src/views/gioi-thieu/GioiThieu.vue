<template>
    <div class="about-page">
        <!-- Hero Banner -->
        <section class="hero-banner">
            <div class="overlay"></div>
            <div class="container hero-content">
                <h1 class="hero-title">TUNGTRAN.VN - ĐẠI LÝ LAPTOP CHÍNH HÃNG</h1>
                <p class="hero-slogan">Nơi công nghệ hội tụ, giá trị lan tỏa</p>
                <button class="btn btn-primary btn-lg hero-btn">
                    <i class="bi bi-lightning-charge"></i> Khám phá ngay
                    <span class="wave"></span>
                </button>
            </div>
        </section>

        <!-- Giới thiệu cửa hàng -->
        <section class="about-section">
            <div class="container">
                <div class="section-header">
                    <h2>Về chúng tôi</h2>
                    <div class="divider"></div>
                </div>
                <div class="about-row">
                    <img class="about-image"
                        src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80"
                        alt="Cửa hàng">
                    <div class="about-content">
                        <h3>TungTran.vn - Địa chỉ tin cậy cho dân công nghệ</h3>
                        <p>Ra đời từ năm 2015, TungTran.vn đã trở thành một trong những đại lý laptop uy tín nhất tại
                            Việt Nam. Chúng tôi chuyên cung cấp các sản phẩm laptop chính hãng từ các thương hiệu hàng
                            đầu thế giới.</p>
                        <div class="features-list">
                            <div class="feature-item"><i class="bi bi-check-circle-fill"></i> 100% sản phẩm chính hãng
                            </div>
                            <div class="feature-item"><i class="bi bi-check-circle-fill"></i> Bảo hành lên đến 3 năm
                            </div>
                            <div class="feature-item"><i class="bi bi-check-circle-fill"></i> Hỗ trợ trả góp 0%</div>
                            <div class="feature-item"><i class="bi bi-check-circle-fill"></i> Miễn phí vận chuyển toàn
                                quốc</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Lý do chọn chúng tôi -->
        <section class="reasons-section">
            <div class="container">
                <div class="section-header">
                    <h2>Tại sao chọn TungTran.vn?</h2>
                    <div class="divider"></div>
                </div>
                <div class="reasons-list">
                    <div class="reason-card" v-for="(reason, idx) in reasons" :key="idx">
                        <div class="reason-icon"><i :class="reason.icon"></i></div>
                        <h4>{{ reason.title }}</h4>
                        <p>{{ reason.desc }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Thương hiệu đối tác -->
        <section class="brands-section">
            <div class="container">
                <div class="section-header">
                    <h2>Đối tác của chúng tôi</h2>
                    <div class="divider"></div>
                </div>
                <div class="brands-slider">
                    <div v-for="brand in brands" :key="brand.name" class="brand-logo" :title="brand.name">
                        <img :src="brand.logo" :alt="brand.name" />
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section">
            <div class="container">
                <h3>Bạn đang tìm kiếm một chiếc laptop phù hợp?</h3>
                <p>Hãy để chúng tôi tư vấn cho bạn sản phẩm tốt nhất với giá hợp lý nhất</p>
                <button class="btn btn-outline-light btn-lg cta-btn">
                    <i class="bi bi-telephone"></i> Liên hệ ngay: <b>1900 1234</b>
                </button>
            </div>
        </section>

        <section class="testimonial-section">
            <div class="container">
                <div class="section-header">
                    <h2>Khách hàng nói gì?</h2>
                    <div class="divider"></div>
                </div>
                <div class="testimonial-list">
                    <div class="testimonial-card" v-for="(item, idx) in testimonials" :key="idx">
                        <div class="testimonial-content">“{{ item.content }}”</div>
                        <div class="testimonial-author">
                            <img :src="item.avatar" alt="avatar" />
                            <span>{{ item.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="map-section">
            <div class="container">
                <div class="section-header">
                    <h2>Địa chỉ cửa hàng</h2>
                    <div class="divider"></div>
                </div>
                <div class="map-wrap">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.005123456789!2d105.7800000!3d21.0300000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab123456789%3A0xabcdef123456789!2zTmjDoCBUcsOqbiBUdW5nIFRyYW4!5e0!3m2!1svi!2s!4v1680000000000!5m2!1svi!2s"
                        width="100%" height="320" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </section>

        <button v-show="show" class="back-to-top" @click="scrollToTop">
            <i class="bi bi-arrow-up"></i>
        </button>

        <div class="quick-chat">
            <a href="https://zalo.me/123456789" target="_blank" title="Chat Zalo"><i class="bi bi-chat-dots"></i></a>
            <a href="tel:19001234" title="Gọi ngay"><i class="bi bi-telephone"></i></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutPage',
    metaInfo: {
        title: 'Giới thiệu - TungTran.vn - Laptop chính hãng giá tốt'
    }
}
</script>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const reasons = [
    { icon: 'bi bi-shield-check', title: 'Chính hãng 100%', desc: 'Tất cả sản phẩm đều được nhập trực tiếp từ hãng, đầy đủ CO/CQ' },
    { icon: 'bi bi-currency-dollar', title: 'Giá tốt nhất', desc: 'Cam kết giá tốt nhất thị trường, hoàn tiền 200% nếu phát hiện rẻ hơn' },
    { icon: 'bi bi-headset', title: 'Hỗ trợ 24/7', desc: 'Đội ngũ kỹ thuật viên sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi' },
    { icon: 'bi bi-truck', title: 'Giao hàng nhanh', desc: 'Miễn phí vận chuyển, giao hàng trong 2h tại Hà Nội & TP.HCM' }
]

const brands = [
    { name: 'Acer', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Acer_2011.svg' },
    { name: 'Asus', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/ASUS_Logo.svg' },
    { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg' },
    { name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/HP_logo_2012.svg' },
    { name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Lenovo_logo_2015.svg' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'MSI', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Msi-Logo.svg' }
]

const testimonials = [
    { content: 'Dịch vụ tuyệt vời, giá tốt, giao hàng nhanh!', name: 'Nguyễn Văn A', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { content: 'Mua laptop ở đây rất yên tâm, bảo hành rõ ràng.', name: 'Trần Thị B', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' }
]

const show = ref(false)
const onScroll = () => { show.value = window.scrollY > 200 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
</script>

<style scoped>
/* Global Styles */
.about-page {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

.section-header {
    text-align: center;
    margin-bottom: 50px;
}

.section-header h2 {
    font-size: 32px;
    font-weight: 700;
    color: #222;
    margin-bottom: 15px;
}

.divider {
    width: 80px;
    height: 3px;
    background: #0d6efd;
    margin: 0 auto;
}

.brands-slider {
    display: flex;
    gap: 32px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 24px;
}

.brand-logo {
    transition: transform 0.2s, box-shadow 0.2s;
    background: #fff;
    border-radius: 12px;
    padding: 10px 18px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.brand-logo:hover {
    transform: scale(1.12) rotate(-2deg);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.13);
    background: #f0f8ff;
}

.brand-logo img {
    height: 40px;
    width: auto;
    display: block;
}

/* Hero Banner */
.hero-banner {
    position: relative;
    background: url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
    min-height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: #fff;
}

.hero-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
}

.hero-slogan {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.9;
}

.hero-btn {
    position: relative;
    overflow: hidden;
}

.hero-btn .wave {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 120%;
    height: 120%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: wave 1s infinite linear;
    pointer-events: none;
}

@keyframes wave {
    0% {
        transform: translate(-50%, -50%) scale(0);
    }

    70% {
        transform: translate(-50%, -50%) scale(1);
    }

    100% {
        transform: translate(-50%, -50%) scale(1.2);
        opacity: 0;
    }
}

/* About Section */
.about-section {
    padding: 80px 0;
    background: #f9f9f9;
}

.about-row {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    align-items: center;
    justify-content: center;
}

.about-image {
    width: 350px;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    transition: transform 0.3s;
}

.about-image:hover {
    transform: scale(1.04) rotate(-2deg);
}

.about-content {
    flex: 1;
    min-width: 260px;
}

.about-content h3 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #222;
}

.about-content p {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 25px;
    color: #555;
}

.features-list {
    margin-top: 20px;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    font-size: 1rem;
    color: #0d6efd;
}

.feature-item i {
    color: #0d6efd;
    font-size: 1.2rem;
}

/* Reasons Section */
.reasons-section {
    padding: 80px 0;
    background: white;
}

.reasons-list {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
}

.reason-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    padding: 32px 20px;
    text-align: center;
    width: 220px;
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
}

.reason-card:hover {
    transform: translateY(-8px) scale(1.04);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.13);
}

.reason-icon {
    font-size: 2.5rem;
    color: #0d6efd;
    margin-bottom: 16px;
}

.reason-card h4 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
}

.reason-card p {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
}

/* CTA Section */
.cta-section {
    background: linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%);
    color: white;
    padding: 80px 0;
    text-align: center;
}

.cta-section h3 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
}

.cta-section p {
    font-size: 18px;
    margin-bottom: 30px;
    opacity: 0.9;
}

.btn-outline-light {
    border: 2px solid white;
    color: white;
    background: transparent;
}

.btn-outline-light:hover {
    background: white;
    color: #0d6efd;
}

.cta-btn {
    position: relative;
    overflow: hidden;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 1px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    transition: background 0.2s, color 0.2s;
}

.cta-btn:hover {
    background: #fff;
    color: #0d6efd;
}

/* Responsive */
@media (max-width: 768px) {
    .hero-title {
        font-size: 32px;
    }

    .hero-slogan {
        font-size: 18px;
    }

    .section-header h2 {
        font-size: 28px;
    }

    .about-content h3 {
        font-size: 24px;
    }

    .reason-card {
        margin-bottom: 30px;
    }

    .brands-slider img {
        height: 40px;
        margin: 10px;
        flex: 0 0 calc(33.333% - 20px);
    }
}

.back-to-top {
    position: fixed;
    right: 24px;
    bottom: 32px;
    background: #0d6efd;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    font-size: 1.5rem;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
    cursor: pointer;
    z-index: 1000;
    transition: background 0.2s;
}

.back-to-top:hover {
    background: #0b5ed7;
}

.testimonial-list {
    display: flex;
    gap: 24px;
    justify-content: center;
    flex-wrap: wrap;
}

.testimonial-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    padding: 24px 18px;
    max-width: 320px;
    text-align: center;
}

.testimonial-content {
    font-style: italic;
    color: #333;
    margin-bottom: 16px;
}

.testimonial-author {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.testimonial-author img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
}

.map-wrap {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    margin-bottom: 32px;
}

.quick-chat {
    position: fixed;
    right: 18px;
    bottom: 90px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 1001;
}

.quick-chat a {
    background: #0d6efd;
    color: #fff;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
    transition: background 0.2s;
}

.quick-chat a:hover {
    background: #0b5ed7;
}
</style>