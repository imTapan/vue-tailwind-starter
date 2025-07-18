<template>
  <header :class="[isDark ? 'bg-gray-900 text-gray-100' : 'bg-white', 'shadow-md']">
    <div class="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
      <div class="flex items-center gap-2">
        <img src="/vite.svg" alt="Logo" class="h-8 w-8" />
        <span :class="[isDark ? 'text-blue-400' : 'text-blue-600', 'text-2xl font-bold']">Vue Tailwind Starter</span>
      </div>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/" :class="[$route.path === '/' ? (isDark ? 'font-bold text-blue-400 underline' : 'font-bold text-blue-600 underline') : (isDark ? 'text-gray-200 hover:text-blue-400 font-medium transition' : 'text-gray-700 hover:text-blue-600 font-medium transition')]">Home</router-link>
          </li>
          <li>
            <router-link to="/store" :class="[$route.path === '/store' ? (isDark ? 'font-bold text-blue-400 underline' : 'font-bold text-blue-600 underline') : (isDark ? 'text-gray-200 hover:text-blue-400 font-medium transition' : 'text-gray-700 hover:text-blue-600 font-medium transition')]">Store</router-link>
          </li>
        </ul>
      </nav>
      <DarkLightToggle :is-dark="isDark" @toggle="onToggleTheme" />
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router';
import DarkLightToggle from './dark-light-toggle.vue';
import { useTheme } from '../composables/use-theme.js';
const $route = useRoute();
const { isDark, toggleTheme } = useTheme();
function onToggleTheme() {
  toggleTheme();
  // Ensure the dark class is always set on <html>
  document.documentElement.classList.toggle('dark', isDark.value);
}
</script>

<style scoped>
/* No custom CSS needed; Tailwind classes are used directly in template */
</style>
