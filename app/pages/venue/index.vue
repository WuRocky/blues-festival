<script setup>
import { useI18n } from "#imports";
import { venueSections } from "@/data/siteContent";

const { t } = useI18n();
</script>

<template>
  <main class="min-h-screen mt-68px bg-white px-6 py-18">
    <div class="max-w-screen-xl mx-auto">
      <p class="text-sm uppercase tracking-[0.3em] text-red-default">{{ $t('venue.label') }}</p>
      <h1 class="mt-3 text-4xl font-bold">{{ $t('venue.title') }}</h1>
      <p class="mt-5 max-w-2xl leading-8 text-black-3">
        {{ $t('venue.description') }}
      </p>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <article
          v-for="section in venueSections"
          :key="section.titleKey"
          class="rounded-3xl bg-#f8f4eb p-7 ring-1 ring-black/6"
        >
          <h2 class="text-xl font-semibold">{{ t(section.titleKey) }}</h2>
          <p class="mt-4 leading-7 text-black-3">{{ t(section.descriptionKey) }}</p>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
