import { Divider, Stack, Typography } from "@mui/material"
import {
  sidebarItemsBody,
  sidebarItemsHeader,
  sidebarItemsExplore
} from "@/utils/constants"
import SidebarItems from "./SidebarItems"

const Sidebar = () => {
  return (
    <Stack
      direction="row"
      className="sidebar"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" }
      }}
    >
      {sidebarItemsHeader.map((item, index) => (
        <SidebarItems key={index} startIcon={item.icon} title={item.title} />
      ))}

      <Divider sx={{ height: "0.1px", backgroundColor: "whitesmoke", my: 1 }} />

      {sidebarItemsBody.map((item, index) => (
        <SidebarItems key={index} startIcon={item.icon} title={item.title} />
      ))}

      <Divider sx={{ height: "0.1px", backgroundColor: "whitesmoke", my: 1 }} />

      <Typography
        variant="body1"
        sx={{
          color: "white",
          py: 1,
          justifyContent: "flex-start",
          textTransform: "capitalize"
        }}
      >
        Explore
      </Typography>

      {sidebarItemsExplore.map((item, index) => (
        <SidebarItems key={index} startIcon={item.icon} title={item.title} />
      ))}
    </Stack>
  )
}

export default Sidebar
