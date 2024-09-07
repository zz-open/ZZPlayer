import { onMounted, reactive, ref } from 'vue'
import { PL_FLAG_DEFAULT, PL_FLAG_JAY, extractValue, getInitMetingJs } from '@/utils'
import type { MetingJsProps } from '@/components/meting-js'

export function useMetingJs() {
  const mjRef = ref()
  const mjProps = reactive<MetingJsProps>(getInitMetingJs())

  const handleClickPlayListBtnJay = async () => {
    const { changePlayListFn } = mjRef.value
    await changePlayListFn(PL_FLAG_JAY)
  }

  const handleClickPlayListBtnDefault = async () => {
    const { changePlayListFn } = mjRef.value
    await changePlayListFn(PL_FLAG_DEFAULT)
  }

  const handleClickPlayListBtn2 = async () => {
  }

  return {
    mjRef,
    mjProps,
    handleClickPlayListBtnJay,
    handleClickPlayListBtnDefault,
    handleClickPlayListBtn2,
  }
}

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
