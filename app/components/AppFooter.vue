<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";

const isOpen = ref(false);
</script>

<template>
  <footer class="w-full bg-blue px-6 py-10 mt-20">
    <div class="max-w-screen-xl mx-auto flex flex-col space-y-3">
      <!-- Event Info -->
      <div class="text-center">
        <div
          class="flex flex-col md:flex-row justify-center items-center md:gap-10 gap-2 opacity-90"
        >
          <p>Nov XX–XX, 2026 · Taipei, Taiwan</p>
          <p>Venue: xxx</p>
          <p>Contact: xxx@gmail.com</p>
        </div>
      </div>

      <div class="text-center">
        <div class="flex justify-center gap-6 text-2xl">
          <NuxtLink to="#">
            <Icon name="i-entypo-social:instagram" size="1.5rem" />
          </NuxtLink>
          <NuxtLink to="#">
            <Icon name="i-entypo-social:facebook" size="1.5rem" />
          </NuxtLink>
          <NuxtLink to="#">
            <Icon name="i-entypo-social:youtube" size="1.6rem" />
          </NuxtLink>
        </div>
      </div>

      <div class="text-center text-sm opacity-60">
        © 2026 Blues Festival, VR Blues
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
