<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";

const isOpen = ref(false);
</script>

<template>
  <header class="relative w-full bg-blue flex items-center px-4 py-5">
    <NuxtLink to="/" class="font-bold text-xl"> Blues Festival </NuxtLink>

    <nav class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <ul class="hidden md:flex items-center gap-6 font-medium list-none">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/schedule">Schedule</NuxtLink></li>
        <li><NuxtLink to="/teachers">Teachers</NuxtLink></li>
        <li><NuxtLink to="/registration">Registration</NuxtLink></li>
        <li><NuxtLink to="/info">Info</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>

    <button class="md:hidden text-3xl ml-auto" @click="isOpen = true">
      ☰
    </button>

    <div class="md:hidden">
      <Dialog :open="isOpen" @close="isOpen = false">
        <DialogPanel
          class="fixed inset-0 bg-white p-6 space-y-6 flex flex-col text-lg"
        >
          <button class="ml-auto text-2xl" @click="isOpen = false">✕</button>

          <NuxtLink to="/" @click="isOpen = false">Home</NuxtLink>
          <NuxtLink to="/schedule" @click="isOpen = false">Schedule</NuxtLink>
          <NuxtLink to="/teachers" @click="isOpen = false">Teachers</NuxtLink>
          <NuxtLink to="/registration" @click="isOpen = false"
            >Registration</NuxtLink
          >
          <NuxtLink to="/info" @click="isOpen = false">Info</NuxtLink>
          <NuxtLink to="/about" @click="isOpen = false">About</NuxtLink>
        </DialogPanel>
      </Dialog>
    </div>
  </header>
</template>

<style scoped></style>
