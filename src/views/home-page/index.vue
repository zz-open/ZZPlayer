<script lang="ts" setup>
import PlayListBtn from '@/components/play-list-btn'
import { getLocalPlayList, getServerPlayList } from '@/utils'
import { useRouterExtend } from '@/composables'

const { goLocalPage, goServerPage } = useRouterExtend()
</script>

<template>
  <div class="bg-all">
    <img id="bg" onerror="this.classList.add('error');" src="/background.webp">
    <div class="cover" />
  </div>
  <div class="play-list-wrapper">
    <div>
      <h1 style="text-align: center;">
        本地歌单
      </h1>
      <div class="row">
        <PlayListBtn v-for="(item, index) in getLocalPlayList()" :key="index" :text="item.name" @click="goLocalPage(item)" />
      </div>
    </div>
    <div style="height: 80px" />
    <div>
      <h1 style="text-align: center;">
        网络歌单
      </h1>
      <div class="row">
        <PlayListBtn v-for="(item, index) in getServerPlayList()" :key="index" :text="item.name" @click="goServerPage(item)" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import './style.css'
</style>
