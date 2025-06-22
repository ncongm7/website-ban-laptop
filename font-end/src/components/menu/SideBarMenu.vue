<template>
    <div class="sidebar-menu bg-white rounded shadow-sm py-3 d-flex" @mouseleave="activeIndex = null">
        <ul class="list-group list-group-flush sidebar-list">
            <li v-for="item in menuItems" :key="item.id" class="list-group-item sidebar-menu-item"
                :class="{ active: activeIndex === item.id }" @mouseenter="activeIndex = item.id">
                <router-link v-if="item.slug" :to="{ name: 'FilterProduct' }"
                    class="menu-link" @click.stop>
                    {{ item.title }}
                </router-link>
                <span v-else>
                    {{ item.title }}
                </span>
            </li>
        </ul>

        <!-- Mega menu -->
        <div v-if="activeItem" class="mega-menu" @mouseenter="keepMegaMenu" @mouseleave="activeIndex = null">
            <div v-if="activeItem.submenus" class="mega-menu-content">
                <!-- Máy tính xách tay -->
                <template v-if="activeItem.id === 1">
                    <div class="mega-col">
                        <div class="mega-title">Laptop theo hãng</div>
                        <div v-for="brand in activeItem.submenus.byBrand" :key="brand" class="mega-link">{{ brand }}
                        </div>
                        <div class="mega-title mt-3">Tình Trạng</div>
                        <div v-for="cond in activeItem.submenus.condition" :key="cond" class="mega-link">{{ cond }}
                        </div>
                    </div>
                    <div class="mega-col">
                        <div class="mega-title">Laptop theo nhu cầu</div>
                        <div v-for="purpose in activeItem.submenus.byPurpose" :key="purpose" class="mega-link">{{
                            purpose }}</div>
                    </div>
                    <div class="mega-col">
                        <div class="mega-title">Laptop theo khoảng giá</div>
                        <div v-for="price in activeItem.submenus.byPrice" :key="price" class="mega-link">{{ price }}
                        </div>
                    </div>
                    <div class="mega-col">
                        <div class="mega-title">Laptop theo cấu hình</div>
                        <div v-for="(specList, spec) in activeItem.submenus.bySpec" :key="spec">
                            <div class="mega-link">{{ spec }}</div>
                        </div>
                    </div>
                </template>

                <!-- Các template khác giữ nguyên -->
                <template v-else-if="activeItem.id === 2">
                    <div class="mega-col">
                        <div class="mega-title">Hãng</div>
                        <div v-for="brand in activeItem.submenus.brands" :key="brand" class="mega-link">{{ brand }}
                        </div>
                    </div>
                    <div class="mega-col">
                        <div class="mega-title">Loại card đồ họa</div>
                        <div v-for="type in activeItem.submenus.graphicsType" :key="type" class="mega-link">{{ type }}
                        </div>
                    </div>
                    <div class="mega-col">
                        <div class="mega-title">Khoảng giá</div>
                        <div v-for="price in activeItem.submenus.price" :key="price" class="mega-link">{{ price }}</div>
                    </div>
                    <div class="mega-col">
                        <div class="mega-title">Cấu hình</div>
                        <div v-for="(specList, spec) in activeItem.submenus.spec" :key="spec">
                            <div class="mega-link">{{ spec }}</div>
                        </div>
                    </div>
                </template>
                <template v-else-if="activeItem.id === 3">
                    <div class="mega-col">
                        <div class="mega-title">Hãng</div>
                        <div v-for="brand in activeItem.submenus.brands" :key="brand" class="mega-link">{{ brand }}
                        </div>
                    </div>
                    <div class="mega-col">
                        <div class="mega-title">Dòng máy</div>
                        <div v-for="(models, brand) in activeItem.submenus.models" :key="brand">
                            <div class="mega-link">{{ brand }}</div>
                            <div v-for="model in models" :key="model" class="mega-link ms-3">{{ model }}</div>
                        </div>
                    </div>
                    <div class="mega-col">
                        <div class="mega-title">Khoảng giá</div>
                        <div v-for="price in activeItem.submenus.price" :key="price" class="mega-link">{{ price }}</div>
                    </div>
                    <div class="mega-col">
                        <div class="mega-title">Tình trạng</div>
                        <div v-for="cond in activeItem.submenus.condition" :key="cond" class="mega-link">{{ cond }}
                        </div>
                    </div>
                </template>
                <template v-else-if="activeItem.id === 2">
                    <!-- Nội dung cho Laptop Gaming -->
                    <div class="mega-col">
                        <div class="mega-title">Hãng</div>
                        <div v-for="brand in activeItem.submenus.brands" :key="brand" class="mega-link">{{ brand }}
                        </div>
                    </div>
                    <div class="mega-col">
                        <div class="mega-title">Loại card đồ họa</div>
                        <div v-for="type in activeItem.submenus.graphicsType" :key="type" class="mega-link">{{ type }}
                        </div>
                    </div>
                    <div class="mega-col">
                        <div class="mega-title">Khoảng giá</div>
                        <div v-for="price in activeItem.submenus.price" :key="price" class="mega-link">{{ price }}</div>
                    </div>
                    <div class="mega-col">
                        <div class="mega-title">Cấu hình</div>
                        <div v-for="(specList, spec) in activeItem.submenus.spec" :key="spec">
                            <div class="mega-link">{{ spec }}</div>
                        </div>
                    </div>
                </template>
                <template v-else-if="activeItem.id === 3">
                    <!-- Nội dung cho Laptop Văn phòng -->
                    <div class="mega-col">
                        <div class="mega-title">Hãng</div>
                        <div v-for="brand in activeItem.submenus.brands" :key="brand" class="mega-link">{{ brand }}
                        </div>
                    </div>
                    <div class="mega-col">
                        <div class="mega-title">Dòng máy</div>
                        <div v-for="(models, brand) in activeItem.submenus.models" :key="brand">
                            <div class="mega-link">{{ brand }}</div>
                            <div v-for="model in models" :key="model" class="mega-link ms-3">{{ model }}</div>
                        </div>
                    </div>
                    <div class="mega-col">
                        <div class="mega-title">Khoảng giá</div>
                        <div v-for="price in activeItem.submenus.price" :key="price" class="mega-link">{{ price }}</div>
                    </div>
                    <div class="mega-col">
                        <div class="mega-title">Tình trạng</div>
                        <div v-for="cond in activeItem.submenus.condition" :key="cond" class="mega-link">{{ cond }}
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { menuItems } from '../../store/data.js'

export default {
    name: 'SideBarMenu',
    data() {
        return {
            menuItems,
            activeIndex: null
        }
    },
    computed: {
        activeItem() {
            return this.menuItems.find(item => item.id === this.activeIndex)
        }
    },
    methods: {
        keepMegaMenu() {
            // Giữ menu khi hover vào mega menu
        }
    }
}
</script>

<style scoped>
.sidebar-menu {
    width: 240px;
    min-height: 100vh;
    position: relative;
    z-index: 20;
    display: flex;
}

.sidebar-list {
    width: 100%;
}

.sidebar-menu-item {
    font-weight: 500;
    color: #222;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    background: transparent;
    padding: 10px 15px;
}

.sidebar-menu-item.active,
.sidebar-menu-item:hover {
    background: #0d6efd !important;
    color: #fff !important;
}

/* Mega Menu Styles */
.mega-menu {
    position: absolute;
    left: 100%;
    top: 0;
    width: 900px;
    background: #fff;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    border-radius: 0 6px 6px 0;
    padding: 24px;
    z-index: 100;
    min-height: 100%;
}

.mega-menu-content {
    display: flex;
    flex-wrap: nowrap;
    gap: 32px;
}

.mega-col {
    flex: 1;
    min-width: 0;
    /* Cho phép co lại khi cần */
}

.mega-title {
    font-weight: bold;
    color: #1976d2;
    margin-bottom: 12px;
    font-size: 15px;
}

.mega-link {
    color: #222;
    font-size: 14px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: color 0.2s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.mega-link:hover {
    color: #0d6efd;
    text-decoration: underline;
}

.ms-3 {
    margin-left: 16px;
    font-size: 14px;
    color: #555;
}

.menu-link {
    color: inherit;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
}

.menu-link.router-link-active {
    color: #fff;
}
</style>