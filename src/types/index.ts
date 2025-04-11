export interface MetingJs {
  id: string
  server: 'netease' | 'tencent' | 'kugou' | 'xiami' | 'baidu'
  type: 'song' | 'playlist' | 'album' | 'search' | 'artist'
  mutex: true | false
  preload: 'auto' | 'metadata' | 'none'
  order: 'random' | 'list'
  volume: number
}

export interface SongInfo {
  name: string
  artist: string
  url: string
  cover: string
  lrc: string
}

export interface LocalModeConf {
  songs: SongInfo[]
}

export type ServerModeConf = Pick<MetingJs, 'id' | 'type' | 'server'>

export interface LocalPlayListItem {
  url: string
  name: string
}

export type ServerPlayListItem = Pick<MetingJs, 'id' | 'type' | 'server'> & {
  host?: string
  name: string
}

export interface MusicApiParma {
  host?: string
  id: string
  server: string
  type: string
}
