import type { SongInfo } from '@/types'

export interface PlayerPage {
  songs: SongInfo[]
}

export type PlayerPageProps = Partial<PlayerPage>
