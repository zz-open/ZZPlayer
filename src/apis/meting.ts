import type { MusicApiParma } from '@/types'

export async function fetchSongs(params: MusicApiParma) {
  try {
    const { id, type, server } = params
    // const baseUrl = `https://meting.zhheo.com?server=${server}&type=${type}&id=${id}&r=${Math.random()}`
    const baseUrl = `http://meting-api.zdog.top:9876/api?server=${server}&type=${type}&id=${id}&r=${Math.random()}`
    const res = await fetch(baseUrl)
    return await res.json()
  }
  catch (e: any) {
    console.log('获取远程服务器数据失败:', e)
    alert('获取网络歌单出错')
    return Promise.resolve([])
  }
}
