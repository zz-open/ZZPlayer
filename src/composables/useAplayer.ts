import type { Reactive } from 'vue'
import { ref, toValue } from 'vue'
import type { SongInfo } from '@/types'

export function useAplayer() {
  const aplayerRef = ref()

  const onAplayerLoadeddata = async (fn: CallableFunction) => {
    aplayerRef.value.on('loadeddata', () => {
      console.log('aplayerLoadeddata:', new Date().toString())
      fn()
    })
  }

  const onAplayerReady = (fn: CallableFunction) => {
    fn()
  }

  const toggle = () => {
    aplayerRef.value.toggle()
  }

  const skipForward = () => {
    aplayerRef.value.skipForward()
  }

  const skipBack = () => {
    aplayerRef.value.skipBack()
  }

  const volume = (volume: number) => {
    aplayerRef.value.volume(volume, true)
  }

  const pause = () => {
    aplayerRef.value.pause()
  }

  const destroy = () => {
    aplayerRef.value.destroy()
  }

  const changePlayList = (songs: SongInfo[]) => {
    if (!toValue(aplayerRef) || !toValue(aplayerRef).list) {
      return
    }

    aplayerRef.value.list.clear()
    aplayerRef.value.list.add(songs)
  }

  const onKeydown = (state: Reactive<any>) => {
    // 空格控制音乐
    document.addEventListener('keydown', (event) => {
      // 暂停开启音乐
      if (event.code === 'Space') {
        event.preventDefault()
        toggle()
      }

      // 切换下一曲
      if (event.keyCode === 39) {
        event.preventDefault()
        skipForward()
      }

      // 切换上一曲
      if (event.keyCode === 37) {
        event.preventDefault()
        skipBack()
      }

      // 增加音量
      if (event.keyCode === 38) {
        if (state.volume <= 1) {
          state.volume += 0.1
          volume(state.volume)
        }
      }

      // 减小音量
      if (event.keyCode === 40) {
        if (state.volume >= 0) {
          state.volume += -0.1
          volume(state.volume)
        }
      }
    })
  }

  return {
    aplayerRef,
    onAplayerLoadeddata,
    onAplayerReady,
    skipForward,
    skipBack,
    toggle,
    volume,
    changePlayList,
    onKeydown,
    pause,
    destroy,
  }
}
