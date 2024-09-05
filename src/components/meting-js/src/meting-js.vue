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
  id: '12554572272',
  server: 'netease',
  type: 'playlist',
  mutex: true,
  preload: 'auto',
  order: 'random',
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
const { metingJsRef } = useMetingLoadObserver(state, emit)
</script>

<template>
  <!-- eslint-disable-next-line vue/component-name-in-template-casing -->
  <meting-js ref="metingJsRef" v-bind="state" />
</template>
