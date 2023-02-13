import { Stack, Box } from "@mui/system"
import { CircularProgress } from "@mui/material"

const Loader = () => {
  return (
    <Box minHeight="95vh" minWidth="95vw">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <CircularProgress sx={{ color: "whitesmoke" }} />
      </Stack>
    </Box>
  )
}

export default Loader
