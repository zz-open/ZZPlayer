<script setup lang="ts">
import { usePlayerPage } from './composables/usePlayerPage'
import type { PlayerPageProps } from './types'
import CircleBtn from '@/components/circle-btn'
import { AsyncAplayerJs, DOM_ID_HEO_MUSIC_PAGE, DOM_ID_MUSIC_BG } from '@/utils'
import { useRouterExtend } from '@/composables'

defineOptions({ name: 'PlayerCore', inheritAttrs: false })
const props = withDefaults(defineProps<PlayerPageProps>(), {
  songs: () => [],
})

defineEmits(['playerReady'])

const { musicBgRef, heoMusicPageRef, handlePlayerLoadedData } = usePlayerPage()
const { goHome } = useRouterExtend()
</script>

<template>
  <div class="player-core-wrapper">
    <div :id="DOM_ID_MUSIC_BG" ref="musicBgRef" />
    <CircleBtn text="回到首页" :hide="true" @click="goHome" />
    <div :id="DOM_ID_HEO_MUSIC_PAGE" ref="heoMusicPageRef" class="localMusic" />
    <Suspense>
      <template #default>
        <AsyncAplayerJs :songs="props.songs" @aplayer-loadeddata="handlePlayerLoadedData" @aplayer-ready="$emit('playerReady')" />
      </template>
    </Suspense>
  </div>
</template>

<style lang="scss" scoped>
.player-core-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
