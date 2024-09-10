import { useRoute } from 'vue-router'
import type { SongInfo } from '@/types'
import { fetchLocalSongs, getDefaultLocalModeConf, getDefaultServerModeConf } from '@/utils'
import { fetchSongs } from '@/apis'

export function useLoadLocalSongs() {
  const route = useRoute()

  async function loadSongs() {
    let songs = [] as SongInfo[]
    const queryUrl = route.query.url ? decodeURIComponent(route.query.url as string) : ''
    if (queryUrl) {
      songs = await fetchLocalSongs(queryUrl)
    }
    else {
      const conf = await getDefaultLocalModeConf()
      songs = conf.songs
    }

    return songs
  }

  return {
    loadSongs,
  }
}

export function useLoadServerSongs() {
  const route = useRoute()
  const loadSongs = async () => {
    let queryId = route.query.id ? decodeURIComponent(route.query.id as string) : ''
    let queryServer = route.query.server ? decodeURIComponent(route.query.server as string) : ''
    let queryType = route.query.type ? decodeURIComponent(route.query.type as string) : ''
    if (!queryId) {
      const conf = getDefaultServerModeConf()
      queryId = conf.id
      queryServer = conf.server
      queryType = conf.type
    }

    if (queryId && queryServer && queryType) {
      return await fetchSongs({ id: queryId, server: queryServer, type: queryType })
    }

    return []
  }

  return {
    loadSongs,
  }
}
