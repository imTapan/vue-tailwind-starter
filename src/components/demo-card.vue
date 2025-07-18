<template>
  <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6 flex flex-col items-center transition-colors">
    <h3 class="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
      <slot name="title">Demo Card</slot>
    </h3>
    <p class="text-gray-600 dark:text-gray-300 mb-4">
      <slot name="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</slot>
    </p>
    <slot name="actions"></slot>
  </div>
</template>
<script setup>
// No props needed for demo card
</script>
