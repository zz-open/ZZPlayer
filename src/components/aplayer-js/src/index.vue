<script lang="ts" setup>
import type { EmitFn } from 'vue'
import { useAplayerMain } from './composables/useAplayer'
import type { AplayerJsProps } from './types'
import { DEFAULT_LRC_TYPE, DEFAULT_VOLUME } from '@/utils'

defineOptions({ name: 'AplayerJs', inheritAttrs: false })

const props = withDefaults(defineProps<AplayerJsProps>(), {
  volume: DEFAULT_VOLUME,
  lrcType: DEFAULT_LRC_TYPE,
  songs: () => [],
})
const emit = defineEmits(['aplayerLoadeddata', 'aplayerReady']) as EmitFn

const { containerRef } = await useAplayerMain(props, emit)
</script>

<template>
  <div ref="containerRef" />
</template>
