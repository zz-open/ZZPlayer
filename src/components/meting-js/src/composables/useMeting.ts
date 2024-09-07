import { useScriptTag } from '@vueuse/core'
import { useHead } from '@unhead/vue'
import { onMounted, onUnmounted, ref } from 'vue'
import type { EmitFn } from 'vue'
import type { MetingJsState } from '../meting-js'
import type { PlayListFlag } from '@/utils'
import { PL_FLAG_DEFAULT, PL_FLAG_JAY, getDefaultPlayListCache, loadPlayList, setDefaultPlayListCache } from '@/utils'

/**
 * use MetingJS and Aplayer
 * @see https://github.com/MoePlayer/APlayer
 * @see https://github.com/metowolf/MetingJS
 */
export function useMeting() {
  const aPlayerMinJs = new URL('/heo-music/js/APlayer.min.js', import.meta.url).href
  const meting2MinJs = new URL('/heo-music/js/Meting2.min.js', import.meta.url).href
  const aPlayerMinCss = new URL('/heo-music/css/APlayer.min.css', import.meta.url).href
  const mainCss = new URL('/heo-music/css/main.css', import.meta.url).href

  useHead({
    link: [
      {
        rel: 'stylesheet',
        href: aPlayerMinCss,
      },
      {
        rel: 'stylesheet',
        href: mainCss,
      },
    ],
  })

  // load meting after aplayer
  useScriptTag(aPlayerMinJs, () => {
    useScriptTag(meting2MinJs)
  })
}

export function useAplayer(state: MetingJsState, emit: EmitFn) {
  const aplayerRef = ref()
  const playListFlag = ref(PL_FLAG_DEFAULT)

  const aplayerOnLoadeddata = () => {
    // 监听 aplayer 的 loadeddata
    aplayerRef.value.on('loadeddata', () => {
      emit('aplayerLoadeddata')
    })

    // 绑定快捷键
    document.addEventListener('keydown', (event) => {
      // 暂停开启音乐
      if (event.code === 'Space') {
        event.preventDefault()
        aplayerRef.value.toggle()
      };
      // 切换下一曲
      if (event.keyCode === 39) {
        event.preventDefault()
        aplayerRef.value.skipForward()
      };
      // 切换上一曲
      if (event.keyCode === 37) {
        event.preventDefault()
        aplayerRef.value.skipBack()
      }
      // 增加音量
      if (event.keyCode === 38) {
        if (state.volume <= 1) {
          console.log('++++')
          state.volume += 0.1
          aplayerRef.value.volume(state.volume, true)
        }
      }
      // 减小音量
      if (event.keyCode === 40) {
        if (state.volume >= 0) {
          console.log('-----')
          state.volume += -0.1
          aplayerRef.value.volume(state.volume, true)
        }
      }
    })
  }

  const changePlayList = async (flag: PlayListFlag) => {
    let songs = []
    if (flag === PL_FLAG_JAY) {
      songs = await loadPlayList(PL_FLAG_JAY)
    }
    else {
      songs = getDefaultPlayListCache()
    }

    // 清除当前播放列表并添加新的歌曲
    aplayerRef.value.list.clear()
    // 设置歌单
    aplayerRef.value.list.add(songs)
  }

  return {
    aplayerRef,
    playListFlag,
    aplayerOnLoadeddata,
    changePlayList,
  }
}

export function useMetingLoadObserver(state: MetingJsState, emit: EmitFn) {
  const metingJsRef = ref()
  const { aplayerRef, aplayerOnLoadeddata, changePlayList } = useAplayer(state, emit)

  let hasExecuted = false
  let observer: MutationObserver | null

  const clearObserve = () => {
    observer?.disconnect()
    observer = null
  }

  const onMetingLoadBefore = () => {
    aplayerOnLoadeddata()
  }

  const onMetingLoad = () => {
    setDefaultPlayListCache(aplayerRef.value.list.audios)
  }

  // 搞一个观察者，观察meting-js内部的aplayer是否加载了
  onMounted(() => {
    observer = new MutationObserver((mutations) => {
      function load() {
        if (hasExecuted) {
          return
        }

        aplayerRef.value = metingJsRef.value.aplayer as HTMLElement
        if (aplayerRef.value) {
          hasExecuted = true

          setTimeout(() => {
            onMetingLoadBefore()
            requestAnimationFrame(() => {
              onMetingLoad()
              clearObserve()
            })
          }, 0)
        }
      }

      mutations.forEach((_mutation) => {
        load()
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })
  })

  onUnmounted(() => {
    clearObserve()
  })

  return {
    metingJsRef,
    changePlayList,
  }
}
