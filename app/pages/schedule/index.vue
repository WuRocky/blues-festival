<script setup>
import { useI18n } from "#imports";
import { scheduleSections } from "@/data/siteContent";

const { t } = useI18n();
</script>

<template>
  <main class="min-h-screen mt-68px bg-white px-6 py-18">
    <div class="max-w-screen-xl mx-auto">
      <p class="text-sm uppercase tracking-[0.3em] text-red-default">{{ $t('schedule.label') }}</p>
      <h1 class="mt-3 text-4xl font-bold">{{ $t('schedule.title') }}</h1>
      <p class="mt-5 max-w-2xl leading-8 text-black-3">
        {{ $t('schedule.description') }}
      </p>

      <div class="mt-12 grid gap-6">
        <article
          v-for="section in scheduleSections"
          :key="section.day"
          class="rounded-3xl bg-#f8f4eb p-8 ring-1 ring-black/6"
        >
          <div class="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p class="text-sm uppercase tracking-[0.3em] text-red-default">
                {{ section.day }}
              </p>
              <h2 class="mt-2 text-2xl font-semibold">{{ t(section.titleKey) }}</h2>
            </div>
          </div>

          <div class="mt-6 grid gap-4 md:grid-cols-3">
            <div
              v-for="itemKey in section.itemsKeys"
              :key="itemKey"
              class="rounded-2xl bg-white p-5"
            >
              <p class="leading-7 text-black-3">{{ t(itemKey) }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
