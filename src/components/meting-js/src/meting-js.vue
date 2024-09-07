<script lang="ts" setup>
import { reactive } from 'vue'
import type { EmitFn } from 'vue'
import { useMeting, useMetingLoadObserver } from './composables/useMeting'
import type { MetingJsProps, MetingJsState } from './meting-js'

defineOptions({
  name: 'MetingJs',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<MetingJsProps>(), {
  id: '',
  server: 'netease',
  type: 'playlist',
  mutex: true,
  preload: 'auto',
  order: 'list',
  volume: 0.8,
})

const state = reactive<MetingJsState>({
  id: props.id,
  server: props.server,
  type: props.type,
  mutex: props.mutex,
  preload: props.preload,
  order: props.order,
  volume: props.volume,
})

const emit = defineEmits(['aplayerLoadeddata']) as EmitFn

useMeting()
const { metingJsRef, changePlayList } = useMetingLoadObserver(state, emit)

// 重命名一下才能正常暴露出去
const changePlayListFn = changePlayList

defineExpose({
  changePlayListFn,
})
</script>

<template>
  <div>
    <!-- eslint-disable-next-line vue/component-name-in-template-casing -->
    <meting-js ref="metingJsRef" v-bind="state" />
  </div>
</template>
