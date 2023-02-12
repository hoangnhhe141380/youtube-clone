import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import Sidebar from "../Sidebar"
import Videos from "../Videos"
import youtubeApi from "@/apis/youtube"

const Homepage = () => {
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    setVideos(null)

    const response = youtubeApi
      .get("/search", {
        params: {
          q: "test"
        }
      })
      .then(data => console.log(data))
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

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Homepage
        </Typography>
      </Box>

      <Videos />
    </Stack>
  )
}

export default Homepage
