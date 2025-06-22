<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-main">
                <!-- Logo & Social -->
                <div class="footer-col">
                    <div class="footer-brand">
                        <img src="https://trungtran.vn/images/config/logo_trung_tran_2_1732504425.svg" alt="Logo"
                            class="footer-logo" />
                        <div>
                            <div class="brand-title">trungtran.vn</div>
                            <div class="brand-slogan">You're in good hands</div>
                        </div>
                    </div>
                    <div class="footer-contact">
                        <div><i class="bi bi-geo-alt"></i> 123 Đường ABC, Quận 1, TP.HCM</div>
                        <div><i class="bi bi-telephone"></i> <a href="tel:19001234">1900 1234</a></div>
                        <div><i class="bi bi-envelope"></i> <a
                                href="mailto:support@trungtran.vn">support@trungtran.vn</a></div>
                    </div>
                    <div class="footer-social-wrap">
                        <span class="fw-bold">Kết nối với chúng tôi</span>
                        <div class="footer-socials">
                            <a href="#" target="_blank" class="footer-social"><i class="bi bi-facebook"></i></a>
                            <a href="#" target="_blank" class="footer-social"><i class="bi bi-youtube"></i></a>
                            <a href="#" target="_blank" class="footer-social"><i class="bi bi-tiktok"></i></a>
                            <a href="#" target="_blank" class="footer-social"><i class="bi bi-instagram"></i></a>
                        </div>
                    </div>
                    <img src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=someid" alt="Chứng nhận"
                        class="footer-cert" />
                </div>
                <!-- Hỗ trợ khách hàng -->
                <div class="footer-col">
                    <div class="footer-title">HỖ TRỢ KHÁCH HÀNG</div>
                    <ul class="footer-list">
                        <li><router-link to="/faq">Hỏi đáp</router-link></li>
                        <li><router-link to="/payment-info">Thông tin thanh toán</router-link></li>
                        <li><router-link to="/feedback">Góp ý khiếu nại</router-link></li>
                        <li><router-link to="/recruitment">Tuyển dụng</router-link></li>
                        <li><router-link to="/shipping">Vận chuyển</router-link></li>
                    </ul>
                </div>
                <!-- Chính sách -->
                <div class="footer-col">
                    <div class="footer-title">CHÍNH SÁCH</div>
                    <ul class="footer-list">
                        <li><router-link to="/policy/privacy">Chính sách bảo mật thông tin</router-link></li>
                        <li><router-link to="/policy/warranty">Chính sách bảo trì, bảo hành</router-link></li>
                        <li><router-link to="/policy/payment">Chính sách thanh toán</router-link></li>
                        <li><router-link to="/policy/shipping">Chính sách vận chuyển và giao nhận</router-link></li>
                        <li><router-link to="/policy/return">Chính sách đổi trả và hoàn tiền</router-link></li>
                        <li><router-link to="/policy/check">Chính sách kiểm hàng</router-link></li>
                        <li><router-link to="/policy/complaint">Chính sách xử lý khiếu nại</router-link></li>
                    </ul>
                </div>
                <!-- Danh mục sản phẩm -->
                <div class="footer-col">
                    <div class="footer-title">DANH MỤC SẢN PHẨM</div>
                    <ul class="footer-list">
                        <li><router-link to="/laptop-msi">Laptop MSI</router-link></li>
                        <li><router-link to="/microsoft">Microsoft</router-link></li>
                        <li><router-link to="/razer">Razer</router-link></li>
                        <li><router-link to="/laptop-asus">Laptop Asus</router-link></li>
                        <li><router-link to="/macbook">Macbook</router-link></li>
                        <li><router-link to="/laptop-acer">Laptop Acer</router-link></li>
                        <li><router-link to="/laptop-lenovo">Laptop Lenovo</router-link></li>
                        <li><router-link to="/laptop-thinkpad">Laptop Thinkpad</router-link></li>
                        <li><router-link to="/laptop-hp">Laptop HP</router-link></li>
                        <li><router-link to="/laptop-dell">Laptop Dell</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <div>© 2024 trungtran.vn. All rights reserved.</div>
                <div class="footer-payment">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                        alt="Mastercard" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/UnionPay_logo.svg" alt="UnionPay" />
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
.footer {
    background: linear-gradient(120deg, #0d3ea1 60%, #0d6efd 100%);
    color: #fff;
    padding: 0;
    font-size: 1rem;
    border-radius: 18px 18px 0 0;
    margin-top: 32px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 18px;
}

.footer-main {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    padding: 32px 0 18px 0;
    justify-content: space-between;
}

.footer-col {
    flex: 1 1 220px;
    min-width: 200px;
    margin-bottom: 18px;
}

.footer-brand {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
}

.footer-logo {
    height: 48px;
    width: 48px;
    object-fit: contain;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.brand-title {
    font-weight: bold;
    font-size: 1.25rem;
    letter-spacing: 1px;
}

.brand-slogan {
    font-size: 0.95rem;
    color: #ffd700;
}

.footer-contact {
    font-size: 0.97rem;
    margin-bottom: 10px;
}

.footer-contact i {
    margin-right: 6px;
    color: #ffd700;
}

.footer-contact a {
    color: #fff;
    text-decoration: underline;
}

.footer-social-wrap {
    margin: 10px 0 8px 0;
}

.footer-socials {
    display: flex;
    gap: 10px;
    margin-top: 6px;
}

.footer-social {
    background: #fff;
    color: #0d6efd;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.10);
    transition: background 0.2s, color 0.2s, transform 0.2s;
}

.footer-social:hover {
    background: #ffd700;
    color: #0d3ea1;
    transform: scale(1.12) rotate(-8deg);
}

.footer-cert {
    height: 38px;
    margin-top: 10px;
    border-radius: 8px;
    background: #fff;
    padding: 2px 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.10);
}

.footer-title {
    font-weight: bold;
    font-size: 1.08rem;
    margin-bottom: 10px;
    letter-spacing: 0.5px;
}

.footer-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-list li {
    margin-bottom: 8px;
}

.footer-list a {
    color: #fff;
    text-decoration: none;
    transition: color 0.2s;
}

.footer-list a:hover {
    color: #ffd700;
    text-decoration: underline;
}

.footer-bottom {
    border-top: 1px solid #ffffff33;
    padding: 12px 0 4px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.98rem;
    flex-wrap: wrap;
    gap: 10px;
}

.footer-payment img {
    height: 28px;
    margin-left: 10px;
    background: #fff;
    border-radius: 6px;
    padding: 2px 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.10);
}

@media (max-width: 900px) {
    .footer-main {
        flex-direction: column;
        gap: 18px;
        padding: 24px 0 10px 0;
    }

    .footer-col {
        min-width: 0;
    }

    .footer-bottom {
        flex-direction: column;
        gap: 6px;
        text-align: center;
    }
}
</style>
