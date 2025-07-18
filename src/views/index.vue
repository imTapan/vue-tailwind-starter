<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <div class="flex-grow flex flex-col items-center justify-center px-4">
      <section class="w-full max-w-2xl text-center mt-20">
        <h2 class="text-4xl font-extrabold text-blue-700 mb-4">
          Vue 3 + Tailwind Starter
        </h2>
        <p class="text-lg text-gray-600 mb-8">
          Build modern, responsive web apps with ease. This starter provides a
          clean structure, reusable components, and best practices for rapid
          development.
        </p>
        <div class="flex flex-col gap-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BaseCard>
              <h3 class="text-xl font-bold mb-2 text-gray-800">Quick Start</h3>
              <ul class="list-disc list-inside text-gray-700 text-left">
                <li>Install dependencies</li>
                <li>Run the dev server</li>
                <li>Edit components and views</li>
              </ul>
              <BaseButton class="mt-4 w-full" @click="$router.push('/about')"
                >Learn More</BaseButton
              >
            </BaseCard>
            <BaseCard>
              <h3 class="text-xl font-bold mb-2 text-gray-800">
                Why Use This?
              </h3>
              <ul class="list-disc list-inside text-gray-700 text-left">
                <li>Fast setup with Vite</li>
                <li>Utility-first Tailwind CSS</li>
                <li>Reusable UI components</li>
                <li>Easy routing and structure</li>
              </ul>
              <BaseButton
                class="mt-4 w-full"
                @click="window.open('https://github.com/', '_blank')"
                >View on GitHub</BaseButton
              >
            </BaseCard>
          </div>
          <BaseButton
            color="primary"
            class="mx-auto w-40"
            @click="$router.push('/about')"
            >Get Started</BaseButton
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "@/components/BaseButton.vue";
import BaseCard from "@/components/BaseCard.vue";
</script>

<style scoped>
/* Tailwind handles styling */
</style>
