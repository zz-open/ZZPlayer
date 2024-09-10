import { useScriptTag } from '@vueuse/core'
import { onUnmounted, reactive, ref, watch, watchEffect } from 'vue'
import type { EmitFn, Ref } from 'vue'
import type { AplayerJsProps, AplayerJsState } from '../types'
import { createAplayer } from '@/utils'
import { useAplayer } from '@/composables'

export async function useAplayerMain(props: AplayerJsProps, emit: EmitFn) {
  const containerRef = ref()
  const { aplayerRef, onKeydown, onAplayerLoadeddata, onAplayerReady, changePlayList, pause } = useAplayer()

  const state = reactive<AplayerJsState>({
    volume: props.volume!,
    lrcType: props.lrcType!,
    songs: props.songs!,
  })

  // 当歌单发生变化的时候就调用aplayer设置
  watch(() => state.songs, (newSongs) => {
    changePlayList(newSongs)
  })

  watchEffect(() => {
    state.volume = props.volume!
    state.lrcType = props.lrcType!
    state.songs = props.songs!
  })

  onUnmounted(() => {
    // 离开页面要暂停播放
    pause()
    aplayerRef.value = null
  })

  await useLoadScriptAndStyle(aplayerRef)

  onKeydown(state)
  // aplayer 初始化完成之后触发这个事件,此时可以传递歌单数据了
  onAplayerReady(() => emit('aplayerReady'))
  // 其实没什么用，加载完歌曲之后才会触发这个事件
  onAplayerLoadeddata(() => emit('aplayerLoadeddata'))

  return {
    containerRef,
    aplayerRef,
  }
}

/**
 * use MetingJS and Aplayer
 * @see https://github.com/MoePlayer/APlayer
 */
export async function useLoadScriptAndStyle(aplayerRef: Ref<any>) {
  const aPlayerMinJs = new URL('/APlayer.min.js', import.meta.url).href

  const { load, unload } = useScriptTag(aPlayerMinJs, () => {
    aplayerRef.value = createAplayer()
  }, { manual: true })

  await load()
  unload()
}
