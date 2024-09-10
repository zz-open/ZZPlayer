<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import PlayerCore from '@/components/player-core'
import CodeBgWall from '@/components/code-bg-wall'
import { useLoadLocalSongs } from '@/composables'
import type { SongInfo } from '@/types'

const state = reactive<{
  songs: SongInfo[]
  apiSongs: SongInfo[]
}>({
  songs: [],
  apiSongs: [],
})

const loading = ref(false)

const { loadSongs } = useLoadLocalSongs()

function handlePlayerReady() {
  state.songs = state.apiSongs
}

onMounted(async () => {
  try {
    loading.value = true
    state.apiSongs = await loadSongs()
  }
  catch (err) {
    console.error(err)
  }
  finally {
    loading.value = false
  }
})
</script>

<template>
  <CodeBgWall v-if="loading" />
  <PlayerCore v-if="state.apiSongs.length > 0" :songs="state.songs" @player-ready="handlePlayerReady" />
</template>
