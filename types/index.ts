export interface IVideos {
  etag: string
  id: {
    kind: string
    videoId: string
  }
  kind: string
  snippet: {
    channelId: string
    channelTitle: string
    desciption: string
    liveBroadcastContent: string
    publishTime: string
    publishedAt: string
    thumbnails: {
      default: {
        height: number
        width: number
        url: string
      }
      high: {
        height: number
        width: number
        url: string
      }
      medium: {
        height: number
        width: number
        url: string
      }
    }
    title: string
  }
}

export interface IChannel {
  kind: string
  etag: string
  id: string
  snippet: {
    title: string
    description: string
    customUrl: string
    publishedAt: string
    thumbnails: {
      high: {
        url: string
        width: number
        height: number
      }
    }
    defaultLanguage: string
    localized: {
      title: string
      description: string
    }
    country: string
  }
  contentDetails: {
    relatedPlaylists: {
      likes: string
      favorites: string
      uploads: string
    }
  }
  statistics: {
    viewCount: number
    subscriberCount: number // this value is rounded to three significant figures
    hiddenSubscriberCount: boolean
    videoCount: number
  }
  status: {
    privacyStatus: string
    isLinked: boolean
    longUploadsStatus: string
    madeForKids: boolean
    selfDeclaredMadeForKids: boolean
  }
  brandingSettings: {
    channel: {
      title: string
      description: string
      keywords: string
      trackingAnalyticsAccountId: string
      moderateComments: boolean
      unsubscribedTrailer: string
      defaultLanguage: string
      country: string
    }
    watch: {
      textColor: string
      backgroundColor: string
      featuredPlaylistId: string
    }
  }
  auditDetails: {
    overallGoodStanding: boolean
    communityGuidelinesGoodStanding: boolean
    copyrightStrikesGoodStanding: boolean
    contentIdClaimsGoodStanding: boolean
  }
  contentOwnerDetails: {
    contentOwner: string
    timeLinked: string
  }
}
