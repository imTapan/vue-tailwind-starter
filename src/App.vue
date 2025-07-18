<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <main class="flex-1 flex flex-col items-center justify-center px-4 py-8">
      <RouterView />
    </main>
    <footer class="bg-white border-t mt-8 py-4 text-center text-gray-500 text-sm">
      &copy; 2025 Vue Tailwind Starter. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>