<script setup>
import { computed } from "vue";
import { useI18n } from "#imports";
import { contactSections, createEventMeta } from "@/data/siteContent";

const { t } = useI18n();
const eventMeta = computed(() => createEventMeta(t));
</script>

<template>
  <main class="min-h-screen mt-68px bg-blue-4 px-6 py-18 text-white">
    <div class="max-w-screen-xl mx-auto">
      <p class="text-sm uppercase tracking-[0.3em] text-yellow-1">{{ $t('contact.label') }}</p>
      <h1 class="mt-3 text-4xl font-bold">{{ $t('contact.title') }}</h1>
      <p class="mt-5 max-w-2xl leading-8 text-white/75">
        {{ $t('contact.description') }}
      </p>

      <div class="mt-10 rounded-3xl border border-white/10 bg-white/6 p-7">
        <p class="text-sm text-white/55">{{ $t('contact.email') }}</p>
        <p class="mt-2 text-2xl font-semibold">{{ eventMeta.contact }}</p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <article
          v-for="section in contactSections"
          :key="section.titleKey"
          class="rounded-3xl border border-white/10 bg-black/12 p-7"
        >
          <h2 class="text-xl font-semibold">{{ t(section.titleKey) }}</h2>
          <p class="mt-4 text-sm leading-7 text-white/78">{{ t(section.descriptionKey) }}</p>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
