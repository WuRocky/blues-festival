<script setup>
const bg = new URL('~/assets/images/bg-1.jpg', import.meta.url).href
</script>
<!-- pages/index.vue -->
<template>
  <!-- Hero 區塊（高度隨你） -->
  <section
    class="relative w-full pb-[52.5%] bg-no-repeat bg-center bg-cover md:bg-fixed overflow-hidden rounded-xl"
    :style="{ backgroundImage: `url(${bg})` }"
  >
    <!-- 覆蓋色層（取代 &:before） -->
    <div class="absolute inset-0" />

    <!-- 內容置中（取代 __content + transform） -->
    <div class="absolute inset-0 flex items-center justify-center text-center px-8">
      <div class="w-full">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-white">你的標題</h1>
        <p class="text-xl md:text-2xl text-white/95">你的副標文字</p>
      </div>
    </div>
  </section>

  <!-- 哨兵：可見=Nav 維持 fixed；不可見=Nav 變 absolute -->
  <div data-header-release class="h-px" />

  <!-- 後續內容 -->
  <UCard class="mt-6">...</UCard>
</template>
