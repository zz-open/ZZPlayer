import { useRouter } from 'vue-router'
import type { LocalPlayListItem, ServerPlayListItem } from '@/types'

export function useRouterExtend() {
  const router = useRouter()

  const goHome = () => {
    router.push('/')
  }

  const goLocalPage = (item: LocalPlayListItem) => {
    router.push({
      name: 'local',
      query: {
        name: encodeURIComponent(item.name),
        url: encodeURIComponent(item.url),
      },
    })
  }

  const goServerPage = (item: ServerPlayListItem) => {
    router.push({
      name: 'server',
      query: {
        host: item.host,
        name: encodeURIComponent(item.name),
        id: encodeURIComponent(item.id),
        type: encodeURIComponent(item.type),
        server: encodeURIComponent(item.server),
      },
    })
  }

  return {
    goHome,
    goLocalPage,
    goServerPage,
  }
}
