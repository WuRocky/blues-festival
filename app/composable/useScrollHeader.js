import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScrollHeader(options = {}) {
  const isAtTop = ref(true)
  const isHidden = ref(false)

  const tolerance = options.tolerance ?? 10
  const hideOffset = options.hideOffset ?? 0
  let lastY = 0

  const onScroll = () => {
    const y = window.scrollY || window.pageYOffset

    isAtTop.value = y <= hideOffset

    const diff = y - lastY
    const goingDown = diff > tolerance
    const goingUp = diff < -tolerance

    if (goingDown && y > hideOffset) {
      isHidden.value = true
    } else if (goingUp) {
      isHidden.value = false
    }

    lastY = y
  }

  onMounted(() => {
    if (typeof window === 'undefined') return
    lastY = window.scrollY || window.pageYOffset
    isAtTop.value = lastY <= hideOffset
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onBeforeUnmount(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', onScroll)
    }
  })

  return { isAtTop, isHidden }
}
