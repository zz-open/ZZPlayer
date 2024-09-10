import { onMounted } from 'vue'

export function useWindowReSize() {
  onMounted(() => {
    const vh = window.innerHeight * 1
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 1
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  })
}
