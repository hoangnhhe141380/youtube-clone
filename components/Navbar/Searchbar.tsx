import { useState } from "react"
import { Paper, IconButton } from "@mui/material"
import { Search } from "@mui/icons-material"

const Searchbar = () => {
  return (
    <Paper
      component={"form"}
      onSubmit={() => {}}
      sx={{
        backgroundColor: "#0f0f0f",
        color: "whitesmoke",
        borderRadius: 20,
        border: "1px solid #333",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 }
      }}
    >
      <input className="search-bar" placeholder="Search" onChange={() => {}} />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "whitesmoke"
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  )
}

export default Searchbar
