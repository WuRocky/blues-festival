<script setup>
import { ref, shallowRef, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
// VueUse 已自動匯入：useIntersectionObserver

const isFixed = ref(true)
const route = useRoute()

// 要觀察的 DOM 目標（哨兵）
const releaseTarget = shallowRef(null)
let stopIO // 停用觀察器
let offScroll // 停用像素門檻的 scroll 事件（無哨兵時用）

async function wireUp() {
  // 清理舊的
  stopIO?.()
  offScroll?.()
  stopIO = undefined
  offScroll = undefined

  await nextTick()
  // 尋找頁面上的哨兵：<div data-header-release></div>
  releaseTarget.value = document.querySelector('[data-header-release]') ?? null

  if (releaseTarget.value) {
    // 有哨兵：用 IntersectionObserver
    const io = useIntersectionObserver(
      releaseTarget,
      ([entry]) => {
        // 哨兵可見 => 還在頂部區域 => Nav 維持 fixed
        isFixed.value = entry?.isIntersecting ?? true
      },
      { threshold: 0 }
    )
    stopIO = io.stop
    // 初始狀態
    isFixed.value = true
  } else {
    // 沒放哨兵：退回像素門檻
    const releaseAt = 320
    const onScroll = () => {
      isFixed.value = window.scrollY <= releaseAt
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    offScroll = () => window.removeEventListener('scroll', onScroll)
  }
}

onMounted(() => {
  if (import.meta.client) wireUp()
})
watch(
  () => route.fullPath,
  () => {
    if (import.meta.client) wireUp()
  }
)
onBeforeUnmount(() => {
  stopIO?.()
  offScroll?.()
})
</script>

<template>
  <div class="relative">
    <!-- 頂部時 fixed；越過哨兵後變 absolute -->
    <TopNav
      :class="isFixed ? 'fixed top-0 left-0 right-0 z-50' : 'absolute top-0 left-0 right-0 z-30'"
    />

    <!-- fixed 時推開內容（含 AppHeader） -->
    <main :class="isFixed ? 'pt-14' : ''">
      <AppHeader />
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
