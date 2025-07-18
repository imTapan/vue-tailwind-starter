<template>
  <header class="bg-white shadow-md">
    <div class="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
      <div class="flex items-center gap-2">
        <img src="/vite.svg" alt="Logo" class="h-8 w-8" />
        <span class="text-2xl font-bold text-blue-600">Vue Tailwind Starter</span>
      </div>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/" class="text-gray-700 hover:text-blue-600 font-medium transition">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="text-gray-700 hover:text-blue-600 font-medium transition">About</router-link>
          </li>
          <li>
            <router-link to="/contact" class="text-gray-700 hover:text-blue-600 font-medium transition">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
// No script logic needed for redesigned header
</script>
