<script setup>
import { ref } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'

// RouterLink ke liye inline style function
const linkStyle = ({ isActive }) => ({
  marginRight: '12px',
  textDecoration: 'none',
  fontWeight: isActive ? '700' : '400'
})

// Tailwind classes
const navItemClass = "text-[18px] font-medium px-4 py-2 transition-colors duration-300 hover:text-white hover:bg-gray-800 rounded-md cursor-pointer"

// Logout function
const router = useRouter()
function logout() {
  localStorage.removeItem('id')
  localStorage.removeItem('name')
  router.push('/admin-login')
}

// Reactive user info
const userId = ref(localStorage.getItem('id'))
const userName = ref(localStorage.getItem('name'))
</script>

<template>
  <nav class="text-black p-4 flex justify-between items-center border-b-2 border-black m-0">
    <h1 class="text-[25px] font-normal">Basics</h1>
    <ul class="flex space-x-4">
      <li :class="navItemClass">
        <RouterLink :to="'/product'" :style="linkStyle">Home</RouterLink>
      </li>

      <template v-if="userId">
        <li :class="navItemClass">
          <strong>{{ userName }}</strong>
        </li>
        <li :class="navItemClass">
          <button class="text-[20px] font-normal hover:text-gray-300" @click="logout">Logout</button>
        </li>
      </template>

      <template v-else>
        <li :class="navItemClass">
          <RouterLink to="/admin-register" class="text-[20px] font-normal hover:text-gray-300">Register</RouterLink>
        </li>
        <li :class="navItemClass">
          <RouterLink to="/admin-login" class="text-[20px] font-normal hover:text-gray-300">Login</RouterLink>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style scoped>
/* Optional extra styling */
</style>
