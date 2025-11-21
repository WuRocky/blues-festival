<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { useScrollHeader } from "@/composable/useScrollHeader";

const { isAtTop, isHidden } = useScrollHeader({
  hideOffset: 10,
});

const isOpen = ref(false);
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50">
    <div class="mx-auto">
      <div
        class="px-4 py-5 transition-transform transition-opacity duration-500"
        :class="[
          isAtTop
            ? 'bg-blue rounded-none shadow-none mt-0'
            : 'bg-blue/40 w-[80%] mx-auto rounded-xl shadow-xl backdrop-blur-xl mt-2',

          isHidden ? '-translate-y-16 opacity-0' : 'translate-y-0 opacity-100',
        ]"
      >
        <div class="max-w-screen-xl mx-auto flex items-center">
          <NuxtLink to="/" class="font-bold text-xl">Blues Festival</NuxtLink>

          <nav
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
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
                <button class="ml-auto text-2xl" @click="isOpen = false">
                  ✕
                </button>

                <NuxtLink to="/" @click="isOpen = false">Home</NuxtLink>
                <NuxtLink to="/schedule" @click="isOpen = false">
                  Schedule
                </NuxtLink>
                <NuxtLink to="/teachers" @click="isOpen = false">
                  Teachers
                </NuxtLink>
                <NuxtLink to="/registration" @click="isOpen = false">
                  Registration
                </NuxtLink>
                <NuxtLink to="/info" @click="isOpen = false">Info</NuxtLink>
                <NuxtLink to="/about" @click="isOpen = false">About</NuxtLink>
              </DialogPanel>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
