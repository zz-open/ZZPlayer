import { useScriptTag } from '@vueuse/core'
import { useHead } from '@unhead/vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import type { EmitFn } from 'vue'
import type { MetingJsState } from '../meting-js'

/**
 * use MetingJS and Aplayer
 * @see https://github.com/MoePlayer/APlayer
 * @see https://github.com/metowolf/MetingJS
 */
export function useMeting() {
  const cdnPrefix = computed(() => '/heo-music')

  useHead({
    link: [
      {
        rel: 'stylesheet',
        href: `${cdnPrefix.value}/css/APlayer.min.css`,
      },
      {
        rel: 'stylesheet',
        href: `${cdnPrefix.value}/css/main.css`,
      },
    ],
  })

  // load meting after aplayer
  useScriptTag(`${cdnPrefix.value}/js/APlayer.min.js`, () => {
    useScriptTag(`${cdnPrefix.value}/js/Meting2.min.js`)
  })
}

export function useAplayer(state: MetingJsState, emit: EmitFn) {
  const aplayerRef = ref()

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

  return {
    aplayerRef,
    aplayerOnLoadeddata,
  }
}

export function useMetingLoadObserver(state: MetingJsState, emit: EmitFn) {
  const metingJsRef = ref()
  const { aplayerRef, aplayerOnLoadeddata } = useAplayer(state, emit)

  let hasExecuted = false
  let observer: MutationObserver | null

  const clearObserve = () => {
    observer?.disconnect()
    observer = null
  }

  const onMetingLoadBefore = () => {
    aplayerOnLoadeddata()
  }

  const onMetingLoad = () => {}

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
  }
}
