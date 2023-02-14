import {
  YouTube,
  ThumbUpOutlined,
  HomeOutlined,
  BoltOutlined,
  SubscriptionsOutlined,
  VideoLibraryOutlined,
  HistoryOutlined,
  ScheduleOutlined,
  KeyboardArrowDownOutlined,
  WhatshotOutlined,
  MusicNoteOutlined,
  SportsEsportsOutlined,
  NewspaperOutlined,
  EmojiEventsOutlined
} from "@mui/icons-material"

export const sidebarItemsHeader = [
  { icon: <HomeOutlined />, title: "Home" },
  { icon: <BoltOutlined />, title: "Shorts" },
  { icon: <SubscriptionsOutlined />, title: "Subscriptions" }
]

export const sidebarItemsBody = [
  { icon: <VideoLibraryOutlined />, title: "Library" },
  { icon: <HistoryOutlined />, title: "History" },
  { icon: <YouTube />, title: "Your videos" },
  { icon: <ScheduleOutlined />, title: "Watch later" },
  { icon: <ThumbUpOutlined />, title: "Liked videos" },
  { icon: <KeyboardArrowDownOutlined />, title: "Show more" }
]

export const sidebarItemsExplore = [
  { icon: <WhatshotOutlined />, title: "Trending" },
  { icon: <MusicNoteOutlined />, title: "Music" },
  { icon: <SportsEsportsOutlined />, title: "Gaming" },
  { icon: <NewspaperOutlined />, title: "News" },
  { icon: <EmojiEventsOutlined />, title: "Sports" }
]
