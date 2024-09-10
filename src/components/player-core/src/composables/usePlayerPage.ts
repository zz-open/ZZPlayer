import { ref } from 'vue'
import { useMusicBg, useWindowReSize } from '@/composables'

export function usePlayerPage() {
  useWindowReSize()
  const heoMusicPageRef = ref()
  const { musicBgRef, changeMusicBg } = useMusicBg()
  const handlePlayerLoadedData = () => {
    changeMusicBg()
  }

  return {
    musicBgRef,
    heoMusicPageRef,
    handlePlayerLoadedData,
  }
}
