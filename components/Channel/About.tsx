import { IChannel } from "@/types"
import { abbreviateNumber } from "@/utils/format"
import { FlagOutlined } from "@mui/icons-material"
import {
  Box,
  Button,
  IconButton,
  Link,
  Tooltip,
  Typography
} from "@mui/material"
import React from "react"

interface AboutProps {
  channelDetail: IChannel | undefined
}

const About = ({ channelDetail }: AboutProps) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", width: "100%", px: "100px" }}
    >
      <Box
        sx={{
          width: "75%",
          color: "whitesmoke",
          pr: 3
        }}
      >
        <Box sx={{ borderBottom: "1px solid gray", pb: 3 }}>
          <Typography variant="body1" sx={{ py: 3 }}>
            Description
          </Typography>
          <Typography variant="body2">{channelDetail?.description}</Typography>
        </Box>
        <Box sx={{ borderBottom: "1px solid gray", pb: 3 }}>
          <Typography variant="body1" sx={{ py: 3 }}>
            Details
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "12px", color: "gray", py: 1 }}
          >
            For business inquiries:
            <Button
              variant="outlined"
              sx={{
                marginLeft: "10px",
                borderRadius: "20px",
                border: 0,
                color: "white",
                textTransform: "capitalize",
                backgroundColor: "#272727",
                ":hover": {
                  opacity: "0.8",
                  border: 0
                }
              }}
            >
              View email address
            </Button>
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "12px", color: "gray", py: 1 }}
          >
            Location: {channelDetail?.country ?? "Vietnam"}
          </Typography>
        </Box>
        <Box sx={{ borderBottom: "1px solid gray", pb: 3 }}>
          <Typography variant="body1" sx={{ py: 3 }}>
            Links
          </Typography>
          {channelDetail?.links?.map((item, index) => (
            <Link href={item.targetUrl} underline="hover" key={index}>
              <Typography variant="body2">{item.title}</Typography>
            </Link>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: "25%",
          color: "whitesmoke"
        }}
      >
        <Typography
          variant="body1"
          sx={{
            borderBottom: "1px solid gray",
            pl: 1,
            py: 2,
            fontSize: "16px"
          }}
        >
          Stats
        </Typography>
        <Typography
          variant="body1"
          sx={{
            borderBottom: "1px solid gray",
            pl: 1,
            py: 2,
            fontSize: "14px"
          }}
        >
          {channelDetail?.joinedDateText}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            borderBottom: "1px solid gray",
            pl: 1,
            py: 2,
            fontSize: "14px"
          }}
        >
          {channelDetail?.stats?.views?.toLocaleString()} views
        </Typography>
        <Box sx={{ py: 1, fontSize: "14px" }}>
          <Tooltip title="Report user">
            <IconButton>
              <FlagOutlined sx={{ color: "whitesmoke" }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}

export default About
