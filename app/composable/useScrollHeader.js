// composables/useScrollHeader.js
import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScrollHeader() {
  const isAtTop = ref(true)
  const isHidden = ref(false)

  let lastY = 0
  const tolerance = 10

  const onScroll = () => {
    const y = window.scrollY || window.pageYOffset

    // 1. 判斷是否在頂端（決定 100% 還是 80% 樣式）
    isAtTop.value = y <= 0

    // 2. 判斷滑動方向（決定顯示 / 隱藏）
    const diff = y - lastY
    const goingDown = diff > tolerance
    const goingUp = diff < -tolerance

    if (goingDown && y > 0) {
      // 一旦往下滑，就開始隱藏（不管現在在上半部還是中間）
      isHidden.value = true
    } else if (goingUp) {
      // 一旦往上滑，就開始顯示
      isHidden.value = false
    }

    lastY = y
  }

  onMounted(() => {
    lastY = window.scrollY || window.pageYOffset
    isAtTop.value = lastY <= 0
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return {
    isAtTop,
    isHidden,
  }
}
