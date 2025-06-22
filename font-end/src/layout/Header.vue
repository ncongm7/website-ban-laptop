<template>
    <header class="main-header">
        <div class="header-inner">
            <!-- Logo -->
            <router-link to="/" class="logo-wrap">
                <img src="https://trungtran.vn/images/config/logo_trung_tran_2_1732504425.svg" alt="Logo"
                    class="logo" />
            </router-link>

            <!-- Navigation Menu -->
            <nav class="nav-menu">
                <router-link to="/about" class="nav-link" active-class="active">Giới thiệu</router-link>
                <router-link to="/promo" class="nav-link" active-class="active">Khuyến mãi</router-link>
                <router-link to="/news" class="nav-link" active-class="active">Tin tức</router-link>
            </nav>

            <!-- Search -->
            <form class="search-box" @submit.prevent>
                <input type="text" class="search-input" placeholder="Tìm kiếm laptop và phụ kiện" />
                <button class="search-btn" type="submit">
                    <i class="bi bi-search"></i>
                </button>
            </form>

            <!-- Icons -->
            <div class="header-icons">
                <router-link to="/store-locations" class="icon-link store-link">
                    <i class="bi bi-geo-alt-fill"></i>
                    <span>Địa chỉ cửa hàng</span>
                </router-link>
                <router-link to="/wishlist" class="icon-link">
                    <i class="bi bi-heart"></i>
                    <span class="badge">0</span>
                </router-link>
                <router-link to="/cart" class="icon-link">
                    <i class="bi bi-cart"></i>
                    <span class="badge">0</span>
                </router-link>
                <router-link to="/account" class="icon-link">
                    <i class="bi bi-person"></i>
                </router-link>
            </div>
        </div>
        <CategoryBar />
    </header>
</template>

<script>
import CategoryBar from '../components/CategoryBar.vue'
export default {
    name: 'Header',
    components: {
        CategoryBar
    }
}
</script>

<style scoped>
.main-header {
    background: #fff;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    border-radius: 0 0 18px 18px;
    padding: 0 0 8px 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 32px 10px 32px;
    gap: 18px;
}

.logo-wrap {
    display: flex;
    align-items: center;
    margin-right: 24px;
}

.logo {
    height: 44px;
    width: auto;
    object-fit: contain;
    transition: transform 0.2s;
}

/* .logo-wrap:hover .logo {
    transform: scale(1.07) rotate(-2deg);
} */

.nav-menu {
    display: flex;
    gap: 24px;
    flex: 1 1 auto;
}

.nav-link {
    color: #222;
    font-weight: 500;
    font-size: 1.08rem;
    text-decoration: none;
    padding: 6px 0;
    position: relative;
    transition: color 0.2s;
}

.nav-link.active,
.nav-link:hover {
    color: #0d6efd;
}

.nav-link.active::after,
.nav-link:hover::after {
    content: '';
    display: block;
    height: 2.5px;
    width: 100%;
    background: #0d6efd;
    border-radius: 2px;
    position: absolute;
    left: 0;
    bottom: -2px;
    transition: width 0.2s;
}

.search-box {
    position: relative;
    flex: 1 1 320px;
    max-width: 400px;
    margin: 0 24px;
}

.search-input {
    width: 100%;
    padding: 8px 44px 8px 18px;
    border-radius: 24px;
    border: 1.5px solid #e3e3e3;
    font-size: 1rem;
    background: #f8f9fa;
    transition: border 0.2s;
}

.search-input:focus {
    border: 1.5px solid #0d6efd;
    outline: none;
    background: #fff;
}

.search-btn {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #0d6efd;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0;
}

.header-icons {
    display: flex;
    align-items: center;
    gap: 16px;
}

.icon-link {
    position: relative;
    color: #222;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: color 0.2s;
    padding: 6px 10px;
    border-radius: 8px;
}

.icon-link:hover {
    color: #0d6efd;
    background: #f0f8ff;
}

.icon-link .badge {
    position: absolute;
    top: 2px;
    right: 2px;
    background: #e53935;
    color: #fff;
    font-size: 0.75rem;
    border-radius: 50%;
    padding: 2px 6px;
    font-weight: 600;
    min-width: 18px;
    text-align: center;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.10);
}

.store-link {
    background: #0d6efd;
    color: #fff !important;
    font-weight: 600;
    border-radius: 18px;
    padding: 6px 18px;
    font-size: 1rem;
    margin-right: 8px;
    transition: background 0.2s, color 0.2s;
}

.store-link:hover {
    background: #0b5ed7;
    color: #fff;
}

.store-link i {
    margin-right: 6px;
    font-size: 1.2rem;
}

@media (max-width: 900px) {
    .header-inner {
        flex-wrap: wrap;
        padding: 10px 8px 8px 8px;
        gap: 8px;
    }

    .nav-menu {
        gap: 12px;
    }

    .search-box {
        margin: 0 8px;
        max-width: 220px;
    }
}

@media (max-width: 600px) {
    .header-inner {
        flex-direction: column;
        align-items: stretch;
        gap: 8px;
        padding: 8px 2vw 6px 2vw;
    }

    .nav-menu {
        justify-content: center;
        width: 100%;
        gap: 8px;
    }

    .search-box {
        max-width: 100%;
        margin: 0;
    }

    .header-icons {
        justify-content: center;
        gap: 10px;
    }

    .store-link {
        font-size: 0.95rem;
        padding: 5px 10px;
    }
}
</style>
