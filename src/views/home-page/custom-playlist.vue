<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouterExtend } from '@/composables'
import type { ServerPlayListItem } from '@/types'

const { goServerPage } = useRouterExtend()

const plv = ref('123')

onMounted(() => {
  const params = {
    name: '我的歌单',
    server: 'netease',
    id: '12554572272',
  }

  plv.value = JSON.stringify(params, null, 2)
})

function playCustomPlaylist() {
  const item = JSON.parse(plv.value) as ServerPlayListItem
  item.type = 'playlist'
  goServerPage(item)
}
</script>

<template>
  <div style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
    <textarea v-model="plv" placeholder="Paste your custom playlist here" style="width: 260px; height: 80px;" />
    <button @click="playCustomPlaylist">
      播放
    </button>
  </div>
</template>
