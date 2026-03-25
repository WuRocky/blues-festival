<script setup>
import { useI18n } from "#imports";
import { registrationSections } from "@/data/siteContent";

const { t } = useI18n();
</script>

<template>
  <main class="min-h-screen mt-68px bg-blue-4 px-6 py-18 text-white">
    <div class="max-w-screen-xl mx-auto">
      <p class="text-sm uppercase tracking-[0.3em] text-yellow-1">{{ $t('registration.label') }}</p>
      <h1 class="mt-3 text-4xl font-bold">{{ $t('registration.title') }}</h1>
      <p class="mt-5 max-w-2xl leading-8 text-white/75">
        {{ $t('registration.description') }}
      </p>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <article
          v-for="section in registrationSections"
          :key="section.titleKey"
          class="rounded-3xl border border-white/10 bg-white/6 p-7"
        >
          <h2 class="text-xl font-semibold">{{ t(section.titleKey) }}</h2>
          <div class="mt-5 space-y-4">
            <p
              v-for="pointKey in section.pointsKeys"
              :key="pointKey"
              class="rounded-2xl bg-black/12 px-4 py-3 text-sm leading-7 text-white/78"
            >
              {{ t(pointKey) }}
            </p>
          </div>
        </article>
      </div>

      <div class="mt-10">
        <NuxtLink
          to="#"
          class="inline-flex items-center justify-center rounded-full bg-yellow px-6 py-3 text-sm font-semibold text-black-default"
        >
          {{ $t('registration.cta') }}
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
