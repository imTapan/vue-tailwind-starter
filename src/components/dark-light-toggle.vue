<template>
  <button
    class="px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    @click="$emit('toggle')"
    aria-label="Toggle dark/light mode"
  >
    <span v-if="isDark">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>
<script setup>
defineProps({
  isDark: Boolean
})
</script>
