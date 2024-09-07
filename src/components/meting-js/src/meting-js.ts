export interface MetingJs {
  id: string
  server: 'netease' | 'tencent' | 'kugou' | 'xiami' | 'baidu'
  type: 'song' | 'playlist' | 'album' | 'search' | 'artist'
  mutex: true | false
  preload: 'auto' | 'metadata' | 'none'
  order: 'random' | 'list'
  volume: number
}

export type MetingJsState = MetingJs

export type MetingJsProps = {
  [key: string]: any
} & Partial<MetingJs>

export type InitMetingJs = Pick<MetingJs, 'id' | 'type' | 'server'>
