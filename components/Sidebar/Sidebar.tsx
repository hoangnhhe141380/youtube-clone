import { Box, Button, Divider, Stack, Typography } from "@mui/material"
import { sidebarItemsBody, sidebarItemsHeader } from "@/utils/constants"

const Sidebar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" }
      }}
    >
      {sidebarItemsHeader.map((item, index) => (
        <Button
          variant="text"
          startIcon={item.icon}
          sx={{
            color: "white",
            px: 2,
            py: 1,
            justifyContent: "flex-start",
            textTransform: "capitalize"
          }}
          key={index}
        >
          {item.title}
        </Button>
      ))}

      <Divider sx={{ height: "0.1px", backgroundColor: "whitesmoke", my: 1 }} />

      {sidebarItemsBody.map((item, index) => (
        <Button
          variant="text"
          startIcon={item.icon}
          sx={{
            color: "white",
            px: 2,
            py: 1,
            justifyContent: "flex-start",
            textTransform: "capitalize"
          }}
          key={index}
        >
          {item.title}
        </Button>
      ))}
    </Stack>
  )
}

export default Sidebar
