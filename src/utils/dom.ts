import { DEFAULT_LRC_TYPE, DOM_ID_HEO_MUSIC_PAGE } from './conf'

export function getMusicPageContainer() {
  return document.getElementById(DOM_ID_HEO_MUSIC_PAGE) ?? undefined
}

export function createAplayer() {
  return new window.APlayer({
    container: getMusicPageContainer(),
    lrcType: DEFAULT_LRC_TYPE,
    audio: [],
  }) as any
}
