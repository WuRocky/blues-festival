<script setup>
import { useI18n } from "#imports";
import {
  teacherSections,
  teacherProfiles,
  musicianProfiles,
} from "@/data/siteContent";

const { t } = useI18n();
</script>

<template>
  <main class="min-h-screen mt-68px bg-#f5efe3 px-6 py-18">
    <div class="max-w-screen-xl mx-auto">
      <p class="text-sm uppercase tracking-[0.3em] text-red-default">{{ $t('teachers.label') }}</p>
      <h1 class="mt-3 text-4xl font-bold">{{ $t('teachers.title') }}</h1>
      <p class="mt-5 max-w-2xl leading-8 text-black-3">
        {{ $t('teachers.description') }}
      </p>

      <section class="mt-12">
        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="profile in teacherProfiles"
            :key="profile.name"
            class="rounded-3xl bg-white p-7 ring-1 ring-black/6"
          >
            <p class="text-sm uppercase tracking-[0.28em] text-red-default">
              {{ t(profile.roleKey) }}
            </p>
            <h2 class="mt-3 text-2xl font-semibold">{{ profile.name }}</h2>
            <p class="mt-4 leading-7 text-black-3">{{ profile.description }}</p>
          </article>
        </div>
      </section>

      <section class="mt-10 rounded-3xl bg-blue-4 p-8 text-white">
        <p class="text-sm uppercase tracking-[0.28em] text-yellow-1">{{ $t('teachers.liveMusicLabel') }}</p>
        <h2 class="mt-3 text-2xl font-semibold">{{ $t('teachers.musicTitle') }}</h2>

        <div class="mt-8 grid gap-5 md:grid-cols-2">
          <article
            v-for="profile in musicianProfiles"
            :key="profile.name"
            class="rounded-2xl border border-white/10 bg-white/6 p-6"
          >
            <p class="text-sm text-white/55">{{ t(profile.roleKey) }}</p>
            <h3 class="mt-2 text-xl font-semibold">{{ profile.name }}</h3>
            <p class="mt-2 text-sm text-yellow-1">{{ profile.meta }}</p>
            <p class="mt-4 text-sm leading-7 text-white/78">
              {{ profile.description }}
            </p>
          </article>
        </div>
      </section>

      <section class="mt-12 space-y-6">
        <article
          v-for="section in teacherSections"
          :key="section.titleKey"
          class="rounded-3xl bg-white p-7 ring-1 ring-black/6"
        >
          <h2 class="text-2xl font-semibold">{{ t(section.titleKey) }}</h2>
          <p class="mt-4 max-w-3xl leading-7 text-black-3">
            {{ t(section.descriptionKey) }}
          </p>
        </article>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
