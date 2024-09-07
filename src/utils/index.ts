import type { InitMetingJs } from '@/components/meting-js'

export type PlayListFlag = 'default' | 'jay'

export const PL_FLAG_DEFAULT: PlayListFlag = 'default'
export const PL_FLAG_JAY: PlayListFlag = 'jay'

export function getInitMetingJs(): InitMetingJs {
  const urlParams = new URLSearchParams(window.location.search)
  const metingJsId = urlParams.get('id') || '12554572272'
  const metingJsServer = urlParams.get('server') || 'netease'
  return {
    id: metingJsId,
    server: metingJsServer as InitMetingJs['server'],
    type: 'playlist',
  }
}

export function extractValue(input: string) {
  const valueRegex = /\("(\S+)"\)/
  const match = valueRegex.exec(input)
  return match ? match[1] : ''
}

export function getDefaultPlayListCache() {
  const currentTime = new Date().getTime()
  const cacheData = JSON.parse(localStorage.getItem('playlist-cache') as string) || { timestamp: 0 }

  // 如果缓存的数据没有过期，直接返回
  if (currentTime - cacheData.timestamp < 24 * 60 * 60 * 1000) {
    return cacheData.songs
  }

  return []
}

export function setDefaultPlayListCache(songs: []) {
  const cacheData = {
    timestamp: new Date().getTime(),
    songs,
  }

  localStorage.setItem('playlist-cache', JSON.stringify(cacheData))
}

export async function loadPlayList(flag: PlayListFlag) {
  let url = ''
  if (flag === PL_FLAG_JAY) {
    url = new URL('/json/jay.json', import.meta.url).href
  }

  if (!url) {
    throw new Error('Invalid play list flag')
  }

  const response = await fetch(url)
  return await response.json()
}
