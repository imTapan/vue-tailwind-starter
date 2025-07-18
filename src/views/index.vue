<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
    <main class="flex-grow flex flex-col items-center justify-center px-4">
      <section class="w-full max-w-2xl text-center mt-20">
        <h2 class="text-4xl font-extrabold mb-4 text-blue-700 dark:text-blue-400">
          Welcome to Your Modern Vue Starter
        </h2>
        <p class="text-lg mb-8 text-gray-600 dark:text-gray-300">
          Build fast, beautiful, and responsive web apps with Vue 3, Tailwind CSS,
          and composables. Switch between light and dark themes for a comfortable
          experience.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DemoCard>
            <template #title>Composable Demo</template>
            <template #content>
              <span class="text-gray-700 dark:text-gray-200"
                >Local state with composables. Click to increment the count.</span
              >
            </template>
            <template #actions>
              <button
                class="px-4 py-2 bg-green-600 dark:bg-green-800 text-white rounded shadow hover:bg-green-700 dark:hover:bg-green-900 transition"
                @click="increment()"
              >
                Increment ({{ count }})
              </button>
            </template>
          </DemoCard>
          <DemoCard>
            <template #title>Reusable Components</template>
            <template #content>
              <span class="text-gray-700 dark:text-gray-200"
                >Build your UI with reusable Vue components and Tailwind CSS.</span
              >
            </template>
          </DemoCard>
        </div>
        <div class="mt-12">
          <span class="inline-block px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg shadow font-semibold">
            Try switching themes using the toggle in the header!
          </span>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import DemoCard from "../components/demo-card.vue";
import { useDemo } from "../composables/use-demo.js";
import { useTheme } from "../composables/use-theme.js";
const { count, increment } = useDemo();
const { isDark } = useTheme();
</script>

<style scoped>
/* Tailwind handles styling */
</style>
