import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import YouTubeIcon from "@mui/icons-material/YouTube"
import Link from "next/link"
import Searchbar from "./Searchbar"
import { Menu } from "@mui/icons-material"

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      p={2}
      sx={{
        position: "sticky",
        background: "#0f0f0f",
        top: 0,
        gap: "30%"
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <IconButton sx={{ color: "whitesmoke" }}>
          <Menu />
        </IconButton>
        <Link href={"/"} style={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="text"
            startIcon={<YouTubeIcon fontSize="large" color="error" />}
            sx={{ color: "white", fontWeight: "bold", fontSize: "1rem" }}
          >
            Clone
          </Button>
        </Link>
      </Box>
      <Searchbar />
    </Stack>
  )
}

export default Navbar
