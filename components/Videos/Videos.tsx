import { Box, Stack } from "@mui/system"
import React from "react"
import { IVideos } from "@/types"
import VideoCard from "./VideoCard"
import Loader from "../Loader"
interface VideosProps {
  videos: IVideos[]
}

const Videos = ({ videos }: VideosProps) => {
  if (!videos?.length) return <Loader />

  return (
    <Stack
      className="video-list"
      direction={"row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, index) => (
        <VideoCard key={index} video={item as IVideos} />
      ))}
    </Stack>
  )
}

export default Videos
