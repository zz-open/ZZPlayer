import type { MusicApiParma } from '@/types'

export async function fetchSongs(params: MusicApiParma) {
  try {
    const { id, type, server } = params
    const host = params.host ? params.host : 'https://meting-api.zdog.top/meting/api'
    const baseUrl = `${host}?server=${server}&type=${type}&id=${id}&r=${Math.random()}`
    const res = await fetch(baseUrl)
    return await res.json()
  }
  catch (e: any) {
    console.log('获取远程服务器数据失败:', e)
    alert('获取网络歌单出错')
    return Promise.resolve([])
  }
}
