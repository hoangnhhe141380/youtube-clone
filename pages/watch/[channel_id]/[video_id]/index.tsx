import { useState, useEffect } from "react"
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography
} from "@mui/material"
import youtubeApi from "@/apis/youtube"
import { IChannel, IVideos, IWatch } from "@/types"
import { useRouter } from "next/router"
import DefaultLayout from "@/layout/DefaultLayout"
import ReactPlayer from "react-player"
import Link from "next/link"
import {
  CheckCircle,
  ContentCut,
  Menu,
  MoreHoriz,
  Send,
  Share,
  ThumbDown,
  ThumbUp
} from "@mui/icons-material"
import moment from "moment"
import VideoCard from "@/components/Videos/VideoCard"

const Watch = () => {
  const [video, setVideo] = useState<IWatch>()
  const [relatedVideos, setRelatedVideos] = useState<IVideos[]>([])
  const [channel, setChannel] = useState<IChannel>()

  const route = useRouter()
  const video_id = route.query.video_id
  const channel_id = route.query.channel_id

  useEffect(() => {
    youtubeApi
      .get("/video/details/", {
        params: {
          id: video_id
        }
      })
      .then(response => {
        setVideo(response.data)
        console.log(response)
      })
      .catch(error => console.log(error))

    youtubeApi
      .get("/video/related-contents/", {
        params: {
          id: video_id
        }
      })
      .then(response => {
        setRelatedVideos(
          response.data.contents.filter(
            (item: IVideos) => item.type === "video"
          )
        )
      })
      .catch(error => console.log(error))

    youtubeApi
      .get("/channel/details/", {
        params: {
          id: channel_id
        }
      })
      .then(response => {
        setChannel(response.data)
        console.log(response.data)
      })
  }, [video_id, channel_id])

  return (
    <DefaultLayout>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box minHeight="95vh" minWidth={"100vw"}>
          <Stack direction={{ xs: "column", md: "row" }}>
            <Box display={"flex"} justifyContent="center" p={2}>
              <Box flex={1}>
                <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
                  <ReactPlayer
                    width={"100%"}
                    url={`https://www.youtube.com/watch?v=${video_id}`}
                    className="react-player"
                    controls
                  />
                  <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                    {video?.title}
                  </Typography>
                  <Stack
                    direction="column"
                    justifyContent="space-between"
                    sx={{ color: "#fff" }}
                    py={1}
                    px={2}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignContent: "center",
                        alignItems: "center",
                        gap: 1,
                        width: "100%"
                      }}
                    >
                      <Box
                        sx={{ display: "flex", flexDirection: "row", gap: 1 }}
                      >
                        <Box>
                          <Link href={`/channel/${channel_id}`}>
                            <Avatar
                              src={channel?.avatar?.[0]?.url}
                              alt={channel?.title}
                              sx={{
                                width: channel?.avatar?.[0]?.width,
                                height: channel?.avatar?.[0]?.height
                              }}
                            />
                          </Link>
                        </Box>
                        <Box>
                          <Link href={`/channel/${channel_id}`}>
                            <Typography
                              variant={"subtitle1"}
                              color="#fff"
                              sx={{ fontWeight: "bold" }}
                            >
                              {channel?.title}
                              <CheckCircle
                                sx={{
                                  fontSize: "12px",
                                  color: "gray",
                                  ml: "5px"
                                }}
                              />
                            </Typography>
                          </Link>
                          <Typography variant={"subtitle1"} color="gray">
                            {channel?.stats?.subscribers?.toLocaleString()}{" "}
                            subscribers
                          </Typography>
                        </Box>
                        <Box>
                          <Button
                            variant="contained"
                            sx={{
                              borderRadius: "20px",
                              backgroundColor: "whitesmoke",
                              color: "#272727",
                              ":hover": {
                                backgroundColor: "whitesmoke",
                                color: "#272727",
                                opacity: 0.8
                              }
                            }}
                          >
                            Subscriber
                          </Button>
                        </Box>
                        <Box></Box>
                      </Box>
                      <Box
                        sx={{ display: "flex", flexDirection: "row", gap: 2 }}
                      >
                        <Button sx={{ p: 0 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              width: "fit-content",
                              borderRadius: "20px",
                              bgcolor: "#272727",
                              color: "whitesmoke",
                              "& svg": {
                                m: 1.5
                              },
                              "& hr": {
                                mx: 0.5
                              }
                            }}
                          >
                            <ThumbUp />
                            {video?.stats?.likes}
                            <Divider
                              orientation="vertical"
                              variant="middle"
                              flexItem
                            />
                            <ThumbDown />
                          </Box>
                        </Button>
                        <Button
                          startIcon={<Share sx={{ color: "whitesmoke" }} />}
                          sx={{
                            p: 1,
                            background: "#272727",
                            color: "whitesmoke",
                            borderRadius: "20px",
                            textTransform: "capitalize"
                          }}
                        >
                          Share
                        </Button>
                        <Button
                          startIcon={
                            <ContentCut sx={{ color: "whitesmoke" }} />
                          }
                          sx={{
                            p: 1,
                            background: "#272727",
                            color: "whitesmoke",
                            borderRadius: "20px",
                            textTransform: "capitalize"
                          }}
                        >
                          Clip
                        </Button>
                        <Button
                          startIcon={<Menu sx={{ color: "whitesmoke" }} />}
                          sx={{
                            p: 1,
                            background: "#272727",
                            color: "whitesmoke",
                            borderRadius: "20px",
                            textTransform: "capitalize"
                          }}
                        >
                          Save
                        </Button>
                        <IconButton>
                          <MoreHoriz sx={{ color: "whitesmoke" }} />
                        </IconButton>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        borderRadius: "10px",
                        backgroundColor: "#272727",
                        minHeight: '200px',
                        mt: 2,
                        p: 2,
                        gap: 1,
                      }}
                    >
                      <Typography variant="subtitle1">
                        {video?.stats?.views?.toLocaleString()} views{" "}
                        {moment(video?.publishedDate).format("LLL")}
                      </Typography>
                      <Typography variant="subtitle2">
                        {video?.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
              <Box
                px={2}
                py={{ md: 1, xs: 5 }}
                justifyContent="center"
                alignItems="center"
              >
                {relatedVideos.map((item, index) => <VideoCard video={item} key={index} />)}
              </Box>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </DefaultLayout>
  )
}

export default Watch
