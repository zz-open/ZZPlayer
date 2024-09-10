import { ref } from 'vue'
import { DOM_ID_HEO_MUSIC_PAGE, extractValue } from '@/utils'

export function useMusicBg() {
  const musicBgRef = ref()

  const changeMusicBg = () => {
    const musiccover = document.querySelector(`#${DOM_ID_HEO_MUSIC_PAGE} .aplayer-pic`) as HTMLElement
    const img = new Image()
    img.src = extractValue(musiccover.style.backgroundImage)
    img.onload = function () {
      musicBgRef.value.style.backgroundImage = musiccover.style.backgroundImage
    }
  }

  return {
    musicBgRef,
    changeMusicBg,
  }
}
