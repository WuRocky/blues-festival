<script setup>
import { computed } from "vue";
import { createEventMeta, createNavigationItems } from "@/data/siteContent";
import { useI18n } from "#imports";

const { t } = useI18n();
const eventMeta = computed(() => createEventMeta(t));
const navigationItems = computed(() => createNavigationItems(t));
</script>

<template>
  <footer class="w-full bg-blue-4 px-6 pt-16 pb-10 text-white">
    <div class="max-w-screen-xl mx-auto">
      <div class="grid gap-10 border-t border-white/10 pt-10 text-sm md:grid-cols-3">
        <div class="space-y-4 text-white/80">
          <p class="text-xs uppercase tracking-[0.28em] text-white/45">
            Event
          </p>
          <div class="space-y-2 leading-7">
            <p class="text-white text-xl font-semibold">{{ eventMeta.name }}</p>
            <p>{{ eventMeta.date }}</p>
            <p>{{ eventMeta.location }} · {{ eventMeta.venue }}</p>
          </div>
        </div>

        <div class="space-y-4 text-white/80">
          <p class="text-xs uppercase tracking-[0.28em] text-white/45">
            {{ $t("footer.quickLinks") }}
          </p>
          <div class="grid gap-2">
            <NuxtLink
              v-for="item in navigationItems"
              :key="item.to"
              :to="item.to"
              class="text-white/85 transition-colors hover:text-yellow-1"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>

        <div class="space-y-4 text-white/80">
          <p class="text-xs uppercase tracking-[0.28em] text-white/45">
            Contact
          </p>
          <div class="space-y-2 leading-7">
            <p>{{ eventMeta.contact }}</p>
            <p>© 2026 {{ eventMeta.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
