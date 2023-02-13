import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import youtubeApi from "@/apis/youtube"
import {
  Avatar,
  Box,
  Button,
  CardContent,
  CardMedia,
  Stack,
  Typography
} from "@mui/material"
import Videos from "@/components/Videos"
import { IChannel, IVideos } from "@/types"
import { url } from "inspector"
import DefaultLayout from "@/layout/DefaultLayout"
import Sidebar from "@/components/Sidebar"
import Link from "next/link"
import { CheckCircle } from "@mui/icons-material"

const Channel = () => {
  const [videos, setVideos] = useState<IVideos[]>([])
  const [channelDetail, setChannelDetail] = useState<IChannel>()

  const route = useRouter()
  const id = route.query.channel_id

  useEffect(() => {
    youtubeApi
      .get("/channels", {
        params: {
          part: "snippet,contentDetails,statistics,status",
          id: id
        }
      })
      .then(response => {
        console.log(response.data.items[0])
        setChannelDetail(response.data.items[0])
      })

    youtubeApi
      .get("/search", {
        params: {
          part: "snippet",
          channelId: id,
          order: "date"
        }
      })
      .then(response => {
        console.log(response.data.items)
        setVideos(response.data.items)
      })
  }, [id])

  return (
    <DefaultLayout>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 }
          }}
        >
          <Sidebar />
        </Box>

        <Box sx={{ overflowY: "auto", height: "90vh" }} minHeight="95vh">
          <div
            style={{
              height: "200px",
              background: `url(${channelDetail?.snippet?.thumbnails?.high?.url}) repeat center`,
              zIndex: 10
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignContent: "space-between",
              borderBottom: "0.1px solid whitesmoke"
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Avatar
                src={channelDetail?.snippet?.thumbnails?.high?.url}
                alt={channelDetail?.snippet?.title}
                sx={{ width: "80px", height: "80px", my: 3, ml: 6 }}
              />

              <Box>
                <Typography
                  variant="h5"
                  sx={{ mt: 3, ml: 6, color: "whitesmoke" }}
                >
                  {channelDetail?.snippet?.title}
                  <CheckCircle
                    sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
                  />
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 1, ml: 6, color: "gray" }}
                >
                  {channelDetail?.snippet?.customUrl}
                </Typography>
                <Typography variant="body2" sx={{ ml: 6, color: "gray" }}>
                  {Number(
                    channelDetail?.statistics?.subscriberCount
                  ).toLocaleString()}{" "}
                  subscribers
                </Typography>
              </Box>
            </Box>
            <Box sx={{ my: 3, ml: 6 }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "20px",
                  color: "black",
                  backgroundColor: "white",
                  ":hover": {
                    color: "black",
                    backgroundColor: "white",
                    opacity: "0.8"
                  }
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>

          <Box p={2} display="flex">
            <Box sx={{ mr: { sm: "100px" } }} />
            <Videos videos={videos} />
          </Box>
        </Box>
      </Stack>
    </DefaultLayout>
  )
}

export default Channel
