<script setup lang="ts">
import { useMetingJs, useMusicPlanet } from './composables/useMusicPlanet'
import PlayListBtn from './components/play-list-btn.vue'
import MetingJs from '@/components/meting-js'

defineOptions({
  name: 'MusicPlanet',
  inheritAttrs: false,
})

const { musicBgRef, heoMusicPageRef, handlePlayerLoadedData } = useMusicPlanet()
const { mjRef, mjProps, handleClickPlayListBtnJay, handleClickPlayListBtnDefault } = useMetingJs()
</script>

<template>
  <div id="music_bg" ref="musicBgRef" />
  <div id="heoMusic-page" ref="heoMusicPageRef">
    <PlayListBtn text="Jay" style="right: 15vw" @click="handleClickPlayListBtnJay" />
    <PlayListBtn text="default" style="right: 11vw;" @click="handleClickPlayListBtnDefault" />
    <div id="heoMusic-page-meting">
      <MetingJs ref="mjRef" v-bind="mjProps" @aplayer-loadeddata="handlePlayerLoadedData" />
    </div>
  </div>
</template>
