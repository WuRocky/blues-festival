<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { createEventMeta, createHomeSections } from "@/data/siteContent";
import { useI18n } from "#imports";

const { t } = useI18n();
const eventMeta = computed(() => createEventMeta(t));
const homeSections = computed(() => createHomeSections(t));
const heroImages = [
  "/img/bg-1.jpg",
  "/img/bg-2.jpg",
  "/img/bg-3.jpg",
  "/img/bg-4.jpg",
  "/img/bg-5.jpg",
  "/img/bg-6.jpg",
];
const activeImageIndex = ref(0);
let heroTimer = null;

onMounted(() => {
  heroTimer = window.setInterval(() => {
    activeImageIndex.value = (activeImageIndex.value + 1) % heroImages.length;
  }, 5200);
});

onBeforeUnmount(() => {
  if (heroTimer) {
    window.clearInterval(heroTimer);
  }
});
</script>

<template>
  <div class="bg-#f5efe3 text-black-default">
    <section
      class="relative overflow-hidden min-h-[78vh] bg-gradient-to-b from-blue-4 via-blue-3 to-#10203e"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,214,102,0.12),transparent_28%)]"
      />

      <div
        class="relative z-10 max-w-screen-xl mx-auto px-6 pt-24 pb-18 md:pt-28 md:pb-22"
      >
        <div
          class="max-w-6xl mx-auto rounded-[2.25rem] border border-white/10 bg-black/22 px-7 py-8 text-white shadow-2xl backdrop-blur-md md:px-10 md:py-10 lg:px-12"
        >
          <div
            class="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20 aspect-[16/9] md:aspect-[21/9]"
          >
            <div
              v-for="(image, index) in heroImages"
              :key="image"
              class="absolute inset-0 transition-opacity duration-1600 ease-out"
              :class="index === activeImageIndex ? 'opacity-100' : 'opacity-0'"
            >
              <img
                :src="image"
                alt=""
                class="block h-full w-full object-cover object-center"
              />
            </div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10"
            />
          </div>

          <div>
            <h1
              class="mt-5 text-5xl md:text-7xl leading-[0.95] font-bold tracking-tight"
            >
              {{ eventMeta.name }}
            </h1>
            <p
              class="mt-6 max-w-4xl text-lg md:text-2xl leading-8 md:leading-9 text-white/90"
            >
              {{ $t("home.hero.subtitle") }}
            </p>

            <div class="mt-7 flex flex-wrap gap-3">
              <div
                class="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm"
              >
                {{ eventMeta.date }}
              </div>
              <div
                class="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm"
              >
                {{ eventMeta.location }}
              </div>
            </div>

            <div
              class="mt-8 max-w-4xl space-y-4 text-sm md:text-base leading-7 md:leading-8 text-white/82"
            >
              <p>{{ $t("home.hero.story1") }}</p>
              <p>{{ $t("home.hero.story2") }}</p>
            </div>

            <div class="mt-10 flex flex-col sm:flex-row gap-4">
              <NuxtLink
                :to="homeSections.hero.primaryCta.to"
                class="inline-flex items-center justify-center rounded-full bg-yellow px-6 py-3 text-sm font-semibold text-black-default shadow-lg"
              >
                {{ homeSections.hero.primaryCta.label }}
              </NuxtLink>
              <NuxtLink
                :to="homeSections.hero.secondaryCta.to"
                class="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/6 px-6 py-3 text-sm font-semibold text-white"
              >
                {{ homeSections.hero.secondaryCta.label }}
              </NuxtLink>
            </div>
          </div>

          <div class="mt-10 grid gap-4 sm:grid-cols-3">
            <div
              v-for="stat in homeSections.hero.stats"
              :key="stat.label"
              class="rounded-[1.5rem] border border-white/10 bg-white/8 p-5"
            >
              <p class="text-xs uppercase tracking-[0.24em] text-white/55">
                {{ stat.label }}
              </p>
              <p class="mt-3 text-lg font-semibold leading-7 text-white">
                {{ stat.value }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped></style>
