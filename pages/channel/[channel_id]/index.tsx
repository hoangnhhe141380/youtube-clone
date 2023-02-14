import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import youtubeApi from "@/apis/youtube"
import {
  Avatar,
  Box,
  Button,
  Stack,
  Tab,
  Tabs,
  Typography
} from "@mui/material"
import Videos from "@/components/Videos"
import { IChannel, IVideos } from "@/types"
import DefaultLayout from "@/layout/DefaultLayout"
import Sidebar from "@/components/Sidebar"
import { CheckCircle } from "@mui/icons-material"

const Channel = () => {
  const [videos, setVideos] = useState<IVideos[]>([])
  const [channelDetail, setChannelDetail] = useState<IChannel>()
  const [tab, setTab] = useState<number>(0)

  const route = useRouter()
  const id = route.query.channel_id

  useEffect(() => {
    youtubeApi
      .get("/channel/details/", {
        params: {
          id: id
        }
      })
      .then(response => {
        console.log(response.data)
        setChannelDetail(response.data)
      })

    youtubeApi
      .get("/channel/videos/", {
        params: {
          id: id
        }
      })
      .then(response => {
        console.log(response.data.contents)
        setVideos(response.data.contents)
      })
  }, [id])

  return (
    <DefaultLayout>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            px: { sx: 0, md: 2 }
          }}
        >
          <Sidebar />
        </Box>

        <Box
          sx={{ overflowY: "auto", height: "90vh" }}
          minHeight="95vh"
          width="100%"
        >
          <div
            style={{
              height: "200px",
              background: `url(${channelDetail?.banner?.desktop[0]?.url}) repeat center`,
              backgroundSize: "100%",
              zIndex: 10
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Avatar
                src={channelDetail?.avatar?.url}
                alt={channelDetail?.title}
                sx={{ width: "80px", height: "80px", my: 3, ml: 6 }}
              />
              <Box>
                <Typography
                  variant="h5"
                  sx={{ mt: 3, ml: 6, color: "whitesmoke" }}
                >
                  {channelDetail?.title}
                  <CheckCircle
                    sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
                  />
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 1, ml: 6, color: "gray" }}
                >
                  {channelDetail?.username}
                </Typography>
                <Typography variant="body2" sx={{ ml: 6, color: "gray" }}>
                  {`${Number(
                    channelDetail?.stats?.subscribers
                  ).toLocaleString()} subscribers`}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ my: 3, mr: 3 }}>
              <Button
                variant="outlined"
                sx={{
                  marginRight: "10px",
                  borderRadius: "20px",
                  border: 0,
                  color: "white",
                  textTransform: "capitalize",
                  backgroundColor: "#272727",
                  ":hover": {
                    opacity: "0.8",
                    border: 0
                  }
                }}
              >
                Join
              </Button>

              <Button
                variant="outlined"
                sx={{
                  borderRadius: "20px",
                  border: 0,
                  color: "black",
                  textTransform: "capitalize",
                  backgroundColor: "white",
                  ":hover": {
                    color: "black",
                    backgroundColor: "white",
                    opacity: "0.8",
                    border: 0
                  }
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              borderBottom: "1px solid whitesmoke",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Tabs
              value={tab}
              onChange={(event: React.SyntheticEvent, newValue: number) => {
                setTab(newValue)
              }}
            >
              <Tab label="HOME" onClick={() => route.push(`/channel/${id}`)} />
              <Tab
                label="VIDEOS"
                onClick={() => route.push(`/channel/${id}/videos`)}
              />
              <Tab
                label="SHORTS"
                onClick={() => route.push(`/channel/${id}/shorts`)}
              />
              <Tab
                label="LIVE"
                onClick={() => route.push(`/channel/${id}/live`)}
              />
              <Tab
                label="PLAYLISTS"
                onClick={() => route.push(`/channel/${id}/playlists`)}
              />
              <Tab
                label="COMMUNITY"
                onClick={() => route.push(`/channel/${id}/community`)}
              />
              <Tab
                label="CHANNELS"
                onClick={() => route.push(`/channel/${id}/channels`)}
              />
              <Tab
                label="ABOUTS"
                onClick={() => route.push(`/channel/${id}/about`)}
              />
            </Tabs>
          </Box>

          <Box p={2} display="flex">
            Home
          </Box>
        </Box>
      </Stack>
    </DefaultLayout>
  )
}

export default Channel
