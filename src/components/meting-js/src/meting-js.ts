export interface MetingJs {
  id: string
  server: 'netease' | 'tencent' | 'kugou' | 'xiami' | 'baidu'
  type: 'song' | 'playlist' | 'album' | 'search' | 'artist'
  mutex: true | false
  preload: 'auto' | 'metadata' | 'none'
  order: 'random'
  volume: number
}

export interface MetingJsState {
  id: string
  server: 'netease' | 'tencent' | 'kugou' | 'xiami' | 'baidu'
  type: 'song' | 'playlist' | 'album' | 'search' | 'artist'
  mutex: true | false
  preload: 'auto' | 'metadata' | 'none'
  order: 'random'
  volume: number
}

export type MetingJsProps = {
  [key: string]: any
} & Partial<MetingJs>
