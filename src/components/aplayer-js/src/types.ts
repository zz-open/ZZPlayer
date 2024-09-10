import type { SongInfo } from '@/types'

export interface AplayerJs {
  volume: number
  songs: SongInfo[]
  lrcType: number
}

export type AplayerJsState = AplayerJs

export type AplayerJsProps = Partial<AplayerJs>
