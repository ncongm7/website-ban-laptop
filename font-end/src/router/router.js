import { createRouter, createWebHistory } from 'vue-router'
import FilterProduct from '../views/filter-product/FitlerProduct.vue'
import HomePage from '../views/home/HomePage.vue'
import GioiThieu from '../views/gioi-thieu/GioiThieu.vue'
// ... các import khác

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  // ... các route khác
  {
    path: '/filter',
    name: 'FilterProduct',
    component: FilterProduct
  },
  {
    path: '/about',
    name: 'GioiThieu',
    component: GioiThieu
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router