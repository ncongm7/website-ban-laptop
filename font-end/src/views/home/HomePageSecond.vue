<template>
    <div>
        <ProductCategoryTitle title="LAPTOP, MACBOOK, SURFACE" />
        <ProductFilterBar :brands="brands" :selected="selectedBrand" @select="onSelectBrand" />
        <ProductList :products="filteredProducts" />
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import ProductCategoryTitle from '@/components/home/home-second/ProductCategoryTitle.vue'
import ProductFilterBar from '@/components/home/home-second/ProductFilterBar.vue'
import ProductList from '@/components/home/home-second/ProductList.vue'

// Dữ liệu mẫu
const brands = ['APPLE', 'DELL', 'ASUS', 'ACER', 'MSI', 'LENOVO', 'Máy Tính Xách Tay', 'Máy Tính Bảng', 'Máy Đọc Sách', 'Đồng Hồ Thông Minh']
const selectedBrand = ref('')

const allProducts = ref([
    {
        code: 'LTAU0890',
        name: 'LAPTOP ASUS VIVOBOOK A1505VA-MA468W (I5 13500H/16GB RAM/512GB)',
        image: 'https://hanoicomputercdn.com/media/product/88545_laptop_asus_vivobook_x1404va_nk394w_i3_1315u_8gb_ram_512gb_ssd_14_fhd_win11_bac.jpg',
        oldPrice: '20.999.000',
        price: '16.899.000',
        discount: 'Tiết kiệm: 20%',
        tag: { text: 'HOT', type: 'hot' }
    },
    {
        code: 'LTAU0890',
        name: 'LAPTOP ASUS VIVOBOOK A1505VA-MA468W (I5 13500H/16GB RAM/512GB)',
        image: 'https://hanoicomputercdn.com/media/product/88545_laptop_asus_vivobook_x1404va_nk394w_i3_1315u_8gb_ram_512gb_ssd_14_fhd_win11_bac.jpg',
        oldPrice: '20.999.000',
        price: '16.899.000',
        discount: 'Tiết kiệm: 20%',
        tag: { text: 'HOT', type: 'hot' }
    },
    {
        code: 'LTAU0890',
        name: 'LAPTOP ASUS VIVOBOOK A1505VA-MA468W (I5 13500H/16GB RAM/512GB)',
        image: 'https://hanoicomputercdn.com/media/product/88545_laptop_asus_vivobook_x1404va_nk394w_i3_1315u_8gb_ram_512gb_ssd_14_fhd_win11_bac.jpg',
        oldPrice: '20.999.000',
        price: '16.899.000',
        discount: 'Tiết kiệm: 20%',
        tag: { text: 'HOT', type: 'hot' }
    },
    {
        code: 'LTAU0890',
        name: 'LAPTOP ASUS VIVOBOOK A1505VA-MA468W (I5 13500H/16GB RAM/512GB)',
        image: 'https://hanoicomputercdn.com/media/product/88545_laptop_asus_vivobook_x1404va_nk394w_i3_1315u_8gb_ram_512gb_ssd_14_fhd_win11_bac.jpg',
        oldPrice: '20.999.000',
        price: '16.899.000',
        discount: 'Tiết kiệm: 20%',
        tag: { text: 'HOT', type: 'hot' }
    },
    {
        code: 'LTAU0890',
        name: 'LAPTOP ASUS VIVOBOOK A1505VA-MA468W (I5 13500H/16GB RAM/512GB)',
        image: 'https://hanoicomputercdn.com/media/product/88545_laptop_asus_vivobook_x1404va_nk394w_i3_1315u_8gb_ram_512gb_ssd_14_fhd_win11_bac.jpg',
        oldPrice: '20.999.000',
        price: '16.899.000',
        discount: 'Tiết kiệm: 20%',
        tag: { text: 'HOT', type: 'hot' }
    },
    {
        code: 'LTAU0890',
        name: 'LAPTOP ASUS VIVOBOOK A1505VA-MA468W (I5 13500H/16GB RAM/512GB)',
        image: 'https://hanoicomputercdn.com/media/product/88545_laptop_asus_vivobook_x1404va_nk394w_i3_1315u_8gb_ram_512gb_ssd_14_fhd_win11_bac.jpg',
        oldPrice: '20.999.000',
        price: '16.899.000',
        discount: 'Tiết kiệm: 20%',
        tag: { text: 'HOT', type: 'hot' }
    },
    {
        code: 'LTAU0890',
        name: 'LAPTOP ASUS VIVOBOOK A1505VA-MA468W (I5 13500H/16GB RAM/512GB)',
        image: 'https://hanoicomputercdn.com/media/product/88545_laptop_asus_vivobook_x1404va_nk394w_i3_1315u_8gb_ram_512gb_ssd_14_fhd_win11_bac.jpg',
        oldPrice: '20.999.000',
        price: '16.899.000',
        discount: 'Tiết kiệm: 20%',
        tag: { text: 'HOT', type: 'hot' }
    },
    // ... các sản phẩm khác
])

const filteredProducts = computed(() => {
    if (!selectedBrand.value) return allProducts.value
    return allProducts.value.filter(p => p.name.toUpperCase().includes(selectedBrand.value))
})

function onSelectBrand(brand) {
    selectedBrand.value = brand
}
</script>
