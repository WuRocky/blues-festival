<script setup>
import { computed, ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { useScrollHeader } from "@/composable/useScrollHeader";
import { createNavigationItems, createEventMeta } from "@/data/siteContent";
import { useI18n, useSwitchLocalePath } from "#imports";

const { isAtTop, isHidden } = useScrollHeader({
  hideOffset: 68,
});

const isOpen = ref(false);
const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const navigationItems = computed(() => createNavigationItems(t));
const eventMeta = computed(() => createEventMeta(t));
const localeOptions = computed(() => locales.value.map((item) => ({
  code: item.code,
  name: item.name,
  to: switchLocalePath(item.code),
})));
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
          <NuxtLink to="/" class="font-bold text-xl tracking-wide">
            {{ eventMeta.name }}
          </NuxtLink>

          <nav
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <ul class="hidden md:flex items-center gap-6 font-medium list-none">
              <li v-for="item in navigationItems" :key="item.to">
                <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
              </li>
            </ul>
          </nav>

          <div class="hidden md:flex items-center gap-2 ml-auto text-sm">
            <NuxtLink
              v-for="item in localeOptions"
              :key="item.code"
              :to="item.to"
              class="rounded-full px-3 py-1.5 transition-colors"
              :class="locale === item.code ? 'bg-white text-blue-4' : 'text-white/75 hover:text-white'"
            >
              {{ item.name }}
            </NuxtLink>
          </div>

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

                <NuxtLink
                  v-for="item in navigationItems"
                  :key="item.to"
                  :to="item.to"
                  @click="isOpen = false"
                >
                  {{ item.label }}
                </NuxtLink>

                <div class="pt-4 border-t border-black/10 space-y-3">
                  <NuxtLink
                    v-for="item in localeOptions"
                    :key="item.code"
                    :to="item.to"
                    class="block"
                    @click="isOpen = false"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </div>
              </DialogPanel>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
