import type { SongInfo } from '@/types'

export function extractValue(input: string) {
  const valueRegex = /\("(\S+)"\)/
  const match = valueRegex.exec(input)
  return match ? match[1] : ''
}

function encodeNonAscii(str: string) {
  return str.replace(/[^\x00-\x7F]/g, (c) => {
    return encodeURIComponent(c)
  })
}

/**
 * 获取歌单歌曲
 * @param url 可以是一个本地文件地址，也可以是一个远程服务器地址
 * @returns 歌单中的歌曲信息
 */
export async function fetchLocalSongs(url: string): Promise<SongInfo[]> {
  try {
    const response = await fetch(url)
    const playList: SongInfo[] = await response.json() ?? []
    const encodedPlayList = playList.map((item: SongInfo) => ({
      name: item.name,
      artist: item.artist,
      url: encodeNonAscii(item.url),
      cover: encodeNonAscii(item.cover),
      lrc: encodeNonAscii(item.lrc),
    }))

    return encodedPlayList
  }
  catch (e: any) {
    console.log('获取本地歌单文件异常:', e)
    alert('获取本地歌单出错')
    return Promise.resolve([])
  }
}
