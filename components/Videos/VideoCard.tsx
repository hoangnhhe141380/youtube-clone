import React from "react"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  Typography
} from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { IVideos } from "@/types"

const VideoCard = ({ video }: { video: IVideos }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#0f0f0f",
        width: { xs: "100%", sm: "358px", md: "300px" },
        boxShadow: "none"
      }}
    >
      <Link href={`/watch/${video.id.videoId}`}>
        <CardMedia
          image={video.snippet.thumbnails.high.url}
          sx={{
            width: { xs: "100%", sm: "320px" },
            height: 180,
            borderRadius: "5px"
          }}
        />
      </Link>
      <CardContent
        sx={{ backgroundColor: "#0f0f0f", height: "86px", px: 0, py: 1 }}
      >
        <Link href={`/watch/${video.id.videoId}`}>
          <Tooltip title={video.snippet.title} placement={"top"}>
            <Typography
              variant="body1"
              fontWeight="bold"
              color="whitesmoke"
              noWrap={true}
            >
              {video.snippet.title}
            </Typography>
          </Tooltip>
        </Link>
        <Link href={`/channel/${video.snippet.channelId}`}>
          <Typography variant="body2" color="gray">
            {video.snippet.channelTitle}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
