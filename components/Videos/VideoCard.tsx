import React from "react"
import Link from "next/link"
import { Avatar, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { IVideos } from "@/types"
import { Box } from "@mui/system"
import { abbreviateNumber, timeFormat } from "@/utils/format"

const VideoCard = ({ video }: { video: IVideos }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#0f0f0f",
        width: { xs: "100%", sm: "358px", md: "290px" },
        boxShadow: "none",
        paddingBottom: "30px"
      }}
    >
      <Link href={`/watch/${video.video.videoId}`}>
        <CardMedia
          image={video.video.thumbnails[0]?.url}
          sx={{
            width: { xs: "100%", sm: "320px" },
            height: 180,
            borderRadius: "10px"
          }}
        />
        <Box
          sx={{
            position: "relative",
            top: "-30px",
            width: "max-content",
            padding: "3px 5px 3px 5px",
            margin: "auto",
            marginRight: "10px",
            borderRadius: "5px",
            zIndex: 99,
            backgroundColor: "rgba(0,0,0,0.8)",
            color: "whitesmoke",
            fontSize: "14px",
            lineHeight: "12px",
            fontWeight: "500"
          }}
        >
          {timeFormat(video.video.lengthSeconds)}
        </Box>
      </Link>
      <CardContent
        sx={{ backgroundColor: "#0f0f0f", height: "86px", px: 0, py: 0 }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
          <Link href={`/channel/${video.video?.author?.channelId}`}>
            <Avatar
              src={video.video?.author?.avatar[0]?.url}
              alt={video.video?.author?.title}
            />
          </Link>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Link href={`/watch/${video.video.videoId}`}>
              <Typography
                variant="body1"
                fontWeight="bold"
                color="whitesmoke"
                sx={{ fontSize: "14.7px" }}
              >
                {video.video.title.length > 50
                  ? `${video.video.title.slice(0, 50)}...`
                  : video.video.title}
              </Typography>
            </Link>
            <Box>
              <Link href={`/channel/${video.video?.author?.channelId}`}>
                <Typography
                  variant="body2"
                  color="gray"
                  sx={{
                    fontSize: "12px",
                    fontWeight: "400",
                    lineHeight: "18px"
                  }}
                >
                  {video.video?.author?.title}
                  {video.video?.author?.title && (
                    <CheckCircle
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  )}
                </Typography>
              </Link>
              <Typography
                variant="body2"
                color="gray"
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "18px"
                }}
              >
                {abbreviateNumber(video.video?.stats?.views)} views •{" "}
                {video.video?.publishedTimeText}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default VideoCard
