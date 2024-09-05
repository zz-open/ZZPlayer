import { onMounted, ref } from 'vue'
import { extractValue } from '@/utils'

export function useMusicPlanet() {
  const musicBgRef = ref()
  const heoMusicPageRef = ref()

  const changeMusicBg = () => {
    // player loadeddata 会进入此处
    const musiccover = document.querySelector('#heoMusic-page .aplayer-pic') as HTMLElement
    const img = new Image()
    img.src = extractValue(musiccover.style.backgroundImage)
    img.onload = function () {
      musicBgRef.value.style.backgroundImage = musiccover.style.backgroundImage
    }
  }

  const handlePlayerLoadedData = () => {
    changeMusicBg()
  }

  onMounted(() => {
    const vh = window.innerHeight * 1
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 1
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  })

  return {
    musicBgRef,
    heoMusicPageRef,
    handlePlayerLoadedData,
  }
}
