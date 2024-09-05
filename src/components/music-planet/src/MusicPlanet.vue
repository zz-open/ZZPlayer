<script setup lang="ts">
import { useMusicPlanet } from './composables/useMusicPlanet'
import MetingJs from '@/components/meting-js'

defineOptions({
  name: 'MusicPlanet',
  inheritAttrs: false,
})

const { musicBgRef, heoMusicPageRef, handlePlayerLoadedData } = useMusicPlanet()
</script>

<template>
  <div id="music_bg" ref="musicBgRef" />
  <div id="heoMusic-page" ref="heoMusicPageRef">
    <MetingJs @aplayer-loadeddata="handlePlayerLoadedData" />
  </div>
</template>
