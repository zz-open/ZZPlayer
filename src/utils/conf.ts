import { fetchLocalSongs } from './fn'
import type { LocalModeConf, LocalPlayListItem, ServerModeConf, ServerPlayListItem } from '@/types'

export const DEFAULT_LRC_TYPE = 3
export const DEFAULT_VOLUME = 0.8
export const DEFAULT_METING_JS_SERVER = 'netease'
export const DEFAULT_METING_JS_ID = '12554572272'
export const DEFAULT_METING_JS_TYPE = 'playlist'
export const DOM_ID_MUSIC_BG = 'music_bg'
export const DOM_ID_HEO_MUSIC_PAGE = 'heoMusic-page'

export function getDefaultServerModeConf(): ServerModeConf {
  return {
    id: DEFAULT_METING_JS_ID,
    server: DEFAULT_METING_JS_SERVER,
    type: DEFAULT_METING_JS_TYPE,
  }
}

export async function getDefaultLocalModeConf(): Promise<LocalModeConf> {
  const songs = await fetchLocalSongs('/playlist/default.json')
  return {
    songs,
  }
}

export function getLocalPlayList(): LocalPlayListItem[] {
  return [
    {
      name: '默认歌单',
      url: '/playlist/default.json',
    },
    {
      name: '周杰伦',
      url: '/playlist/jay.json',
    },
  ]
}

export function getServerPlayList(): ServerPlayListItem[] {
  return [
    {
      name: '默认歌单(网易云)',
      id: '12554572272',
      server: 'netease',
      type: 'playlist',
    },
    {
      name: '歌单1(网易云)',
      id: '8835928221',
      server: 'netease',
      type: 'playlist',
    },
    {
      name: '歌单2(网易云)',
      id: '9379831714',
      server: 'netease',
      type: 'playlist',
    },
    // {
    //   name: '歌单3(qq音乐)',
    //   id: 'HKrEn5a15RDE', // https://c6.y.qq.com/base/fcgi-bin/u?__=HKrEn5a15RDE
    //   server: 'tencent',
    //   type: 'playlist',
    // },
  ]
}
