<template>
  <BaseContainer>
    <h1 class="text-4xl font-bold text-gray-800 mb-6 text-center">Welcome to Vue 3 + Tailwind Starter</h1>
    <BaseCard>
      <p class="text-lg text-gray-600 mb-4 text-center">
        This starter project helps you build modern, responsive web apps quickly.
      </p>
      <div class="flex flex-col gap-4 w-full">
        <BaseCard>
          <h2 class="text-2xl font-semibold mb-2">Features</h2>
          <ul class="list-disc list-inside text-gray-700">
            <li>Vue 3 + Vite for fast development</li>
            <li>Tailwind CSS for utility-first styling</li>
            <li>Reusable components for rapid prototyping</li>
            <li>Easy routing and project structure</li>
          </ul>
        </BaseCard>
        <BaseCard>
          <h2 class="text-2xl font-semibold mb-2">Get Started</h2>
          <div class="flex gap-2 justify-center">
            <BaseButton @click="$router.push('/')">Home</BaseButton>
            <BaseButton @click="$router.push('/about')" color="secondary">About</BaseButton>
          </div>
        </BaseCard>
        <BaseCard>
          <h2 class="text-2xl font-semibold mb-2">Resources</h2>
          <div class="flex gap-2 justify-center">
            <BaseButton @click="window.open('https://vuejs.org/', '_blank')">Vue Docs</BaseButton>
            <BaseButton @click="window.open('https://tailwindcss.com/', '_blank')" color="secondary">Tailwind Docs</BaseButton>
          </div>
        </BaseCard>
      </div>
    </BaseCard>
  </BaseContainer>
</template>

<script setup>
import BaseButton from '../components/BaseButton.vue'
import BaseCard from '../components/BaseCard.vue'
import BaseContainer from '../components/BaseContainer.vue'
</script>

<style scoped>
/* Tailwind handles styling */
</style>