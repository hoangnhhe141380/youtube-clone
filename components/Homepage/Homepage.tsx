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
      .get("/search/", {
        params: {
          q: "nhac viet"
        }
      })
      .then(response => {
        setVideos(response.data.contents)
        console.log(response.data.contents)
      })
  }, [])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          width: "15%",
          height: { sx: "auto", md: "92vh" },
          px: { sx: 0, md: 2 }
        }}
      >
        <Sidebar />
      </Box>

      <Box sx={{ overflowY: "auto", width: "85%", height: "90vh" }}>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Homepage
