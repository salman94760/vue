import { createRouter, createWebHistory } from 'vue-router'
import AdminRegister from '../pages/admin/adminRegister.vue'
import AdminLogin from '../pages/admin/adminLogin.vue'
import Product from '../pages/admin/product.vue'
import AddProduct from '../pages/admin/addProduct.vue'
import EditProduct from '../pages/admin/editProduct.vue'

const routes = [
  {
    path: '/admin-register',
    name: 'AdminRegister',
    component: AdminRegister
  },
  {
    path: '/admin-login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/add-Product',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/edit-Product',
    name: 'EditProduct',
    component: EditProduct
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
