import { Box, Typography } from "@mui/material"
import React from "react"

const Channel = () => {
  return (
    <Box
      p={2}
      display="flex"
      justifyContent={"center"}
      sx={{ color: "whitesmoke" }}
    >
      <Typography variant="h6">No Channel Available!</Typography>
    </Box>
  )
}

export default Channel
