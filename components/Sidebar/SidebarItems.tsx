import { Button } from "@mui/material"
import React from "react"

interface SidebarItemsProps {
  startIcon: React.ReactNode
  title: string
}

const SidebarItems = ({ startIcon, title }: SidebarItemsProps) => {
  return (
    <Button
      variant="text"
      startIcon={startIcon}
      sx={{
        color: "white",
        px: 2,
        py: 1,
        justifyContent: "flex-start",
        textTransform: "capitalize"
      }}
    >
      <p style={{ marginLeft: "10px" }}>{title}</p>
    </Button>
  )
}

export default SidebarItems
