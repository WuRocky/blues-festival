<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isVisible = ref(false);

const onScroll = () => {
  const y = window.scrollY || window.pageYOffset;
  isVisible.value = y > 0;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-blue text-white shadow-lg flex items-center justify-center text-xl hover:bg-blue-1 transition-transform transition-colors duration-200 hover:-translate-y-1"
    aria-label="Back to top"
  >
    ↑
  </button>
</template>
