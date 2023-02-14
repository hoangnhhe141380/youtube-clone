export interface IVideos {
  type: string
  video: {
    author: {
      avatar: {
        height: number
        width: number
        url: string
      }[]
      badge: unknown[]
      canonicalBaseUrl: string
      channelId: string
      title: string
    }
    badge: unknown[]
    descriptionSnippet: unknown
    isLiveNow: boolean
    lengthSeconds: number
    movingThumbnails: unknown
    publishedTimeText: string
    stats: {
      views: number
    }
    thumbnails: any[]
    title: string
    videoId: string
  }
}

export interface IChannel {
  artistBio?: any
  avatar: {
    height: number
    url: string
    width: number
  }
  badges: {
    text: string
    type: string
  }
  banner: {
    desktop: {
      height: number
      url: string
      width: number
    }[]

    mobile: {
      height: number
      url: string
      width: number
    }[]

    tv: {
      height: number
      url: string
      width: number
    }[]
  }
  canonicalBaseUrl: string
  channelId: string
  country?: any
  description: string
  hasBusinessEmail: boolean
  joinedDate: string
  joinedDateText: string
  keywords: string[]
  links: {
    icon: string
    targetUrl: string
    title: string
  }[]
  stats: {
    subscribers: number
    subscribersText: string
    videos: number
    videosText: string
    views: number
  }
  title: string
  username: string
}

export interface ICommunity {
  type: string
  post: {
    attachment: {
      images: {
        source: { height: number; width: number; url: string }[]
      }[]
    }
    author: {
      avatar: { height: number; width: number; url: string }[]
      canonicalBaseUrl: string
      channelId: string
      title: string
    }
    postId: string
    publishedTimeText: string
    stats: {
      comments: number
      likes: number
    }
    text: string
  }
}
