import { IChannel, ICommunity } from "@/types"
import { abbreviateNumber } from "@/utils/format"
import {
  CommentOutlined,
  MoreVert,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined
} from "@mui/icons-material"
import {
  Avatar,
  Box,
  CardMedia,
  IconButton,
  Tooltip,
  Typography
} from "@mui/material"
import React from "react"

interface CommunityProps {
  channelDetail: IChannel | undefined
  community: ICommunity
}

const Community = ({ channelDetail, community }: CommunityProps) => {
  return (
    <Box
      sx={{
        border: "1px solid gray",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 1,
        p: 2,
        color: "whitesmoke"
      }}
    >
      <Box display={"flex"} flexDirection={"row"} gap={2}>
        <Box>
          <Avatar
            src={channelDetail?.avatar[0]?.url}
            alt={channelDetail?.title}
            sx={{ width: "40px", height: "40px" }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "14px", fontWeight: "600" }}
            >
              {channelDetail?.title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "12px", color: "gray", pl: 1 }}
            >
              {community.post.publishedTimeText}
            </Typography>
          </Box>
          <Box pb={2}>
            <Typography variant="body2" sx={{ pt: 1, pb: 2 }}>
              {community.post.text}
            </Typography>
            <CardMedia
              image={community.post.attachment?.images?.[0]?.source[0]?.url}
              sx={{
                width: community.post.attachment?.images?.[0]?.source[0]?.width,
                height:
                  community.post.attachment?.images?.[0]?.source[0]?.height,
                borderRadius: "10px"
              }}
            />
          </Box>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
            <Tooltip title="Like">
              <IconButton>
                <ThumbUpAltOutlined sx={{ color: "whitesmoke" }} />
              </IconButton>
            </Tooltip>
            <Typography variant="body2">
              {abbreviateNumber(community.post.stats.likes)}
            </Typography>
            <Tooltip title="Dislike">
              <IconButton>
                <ThumbDownAltOutlined sx={{ color: "whitesmoke" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Comment">
              <IconButton>
                <CommentOutlined sx={{ color: "whitesmoke" }} />
              </IconButton>
            </Tooltip>
            <Typography variant="body2">
              {community.post.stats.comments}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <IconButton>
          <MoreVert sx={{ color: "whitesmoke" }} />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Community
