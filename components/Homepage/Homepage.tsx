import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import Sidebar from "../Sidebar"
import Videos from "../Videos"
import youtubeApi from "@/apis/youtube"
import { IVideos } from "@/types"

const Homepage = () => {
  const [videos, setVideos] = useState<IVideos[]>([])

  useEffect(() => {
    setVideos([])

    youtubeApi
      .get("/search", {
        params: {
          part: "snippet",
          q: ""
        }
      })
      .then(response => {
        setVideos(response.data.items)
        console.log(response.data)
      })
  }, [])

  return (
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

      <Box p={2} sx={{ overflowY: "auto", height: "90vh" }}>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Homepage
