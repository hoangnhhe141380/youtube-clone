import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import Sidebar from "@/components/Sidebar"
import youtubeApi from "@/apis/youtube"
import { IVideos } from "@/types"
import { useRouter } from "next/router"
import DefaultLayout from "@/layout/DefaultLayout"
import Videos from "@/components/Videos"

const Results = () => {
  const [videos, setVideos] = useState<IVideos[]>([])

  const route = useRouter()
  const query = route.query.search_query

  useEffect(() => {
    setVideos([])

    youtubeApi
      .get("/search/", {
        params: {
          q: query
        }
      })
      .then(response => {
        setVideos(response.data.contents)
        console.log(response.data.contents)
      })
  }, [query])

  return (
    <DefaultLayout>
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
    </DefaultLayout>
  )
}

export default Results
