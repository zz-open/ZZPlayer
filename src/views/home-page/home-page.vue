<script lang="ts" setup>
import customPlaylist from './custom-playlist.vue'
import backgroundImg from '@/assets/img/background.webp?url'
import PlayListBtn from '@/components/play-list-btn'
import { getLocalPlayList, getNeteaseServerPlayList, getTecentServerPlayList } from '@/utils'
import { useRouterExtend } from '@/composables'

const { goLocalPage, goServerPage } = useRouterExtend()
</script>

<template>
  <div class="bg-all">
    <img id="bg" onerror="this.classList.add('error');" :src="backgroundImg">
    <div class="cover" />
  </div>
  <div class="play-list-wrapper">
    <div>
      <h1 style="text-align: center;">
        本地歌单(local)
      </h1>
      <div class="row">
        <PlayListBtn v-for="(item, index) in getLocalPlayList()" :key="index" :text="item.name" @click="goLocalPage(item)" />
      </div>
    </div>
    <div style="height: 40px" />
    <div>
      <h1 style="text-align: center;">
        网易云歌单(netease)
      </h1>
      <div class="row">
        <PlayListBtn v-for="(item, index) in getNeteaseServerPlayList()" :key="index" :text="item.name" @click="goServerPage(item)" />
      </div>
    </div>
    <div style="height: 40px" />
    <div>
      <h1 style="text-align: center;">
        企鹅音乐歌单(tencent)
      </h1>
      <div class="row">
        <PlayListBtn v-for="(item, index) in getTecentServerPlayList()" :key="index" :text="item.name" @click="goServerPage(item)" />
      </div>
    </div>
    <div>
      <h1 style="text-align: center;">
        自定义歌单(custom)
      </h1>
      <div class="row">
        <customPlaylist />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import './style.css'
</style>
