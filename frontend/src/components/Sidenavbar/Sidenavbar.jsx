import React from "react";
import {
  Box,
  Stack,
  Typography,
  Divider,
  Avatar,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";

const Sidenavbar = ({ sideNavbar }) => {
  if (!sideNavbar) return null; // hide when false

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 275,
        height: "92vh",
        position: "fixed",
        top: 55,
        left: 0,
        bgcolor: "black",
        color: "white",
        p: 2,
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "1px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#555",
          borderRadius: "8px",
        },
      }}
    >
      {/* TOP SECTION */}
      <Stack spacing={0.5} pb={1.5} borderBottom="1px solid #555">
        {[
          { icon: <HomeIcon />, title: "Home" },
          { icon: <VideocamIcon />, title: "Shorts" },
          { icon: <SubscriptionsIcon />, title: "Subscription" },
        ].map((item, idx) => (
          <Stack
            key={idx}
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{
              p: "9px 10px",
              borderRadius: "12px",
              cursor: "pointer",
              "&:hover": { bgcolor: "#232323" },
            }}
          >
            {item.icon}
            <Typography fontSize={14} fontWeight={450}>
              {item.title}
            </Typography>
          </Stack>
        ))}
      </Stack>

      {/* MIDDLE SECTION */}
      <Stack spacing={0.5} py={1.5} borderBottom="1px solid #555">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            p: "9px 10px",
            borderRadius: "12px",
            cursor: "pointer",
            "&:hover": { bgcolor: "#232323" },
          }}
        >
          <Typography fontSize={14} fontWeight={500}>
            You
          </Typography>
          <ChevronRightIcon />
        </Stack>

        {[
          { icon: <RecentActorsIcon />, title: "Your Channel" },
          { icon: <HistoryIcon />, title: "History" },
          { icon: <PlaylistAddIcon />, title: "Playlist" },
          { icon: <SmartDisplayOutlinedIcon />, title: "Your videos" },
          { icon: <WatchLaterOutlinedIcon />, title: "Watch later" },
          { icon: <ThumbUpAltOutlinedIcon />, title: "Liked videos" },
          { icon: <ContentCutOutlinedIcon />, title: "Your clips" },
        ].map((item, idx) => (
          <Stack
            key={idx}
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{
              p: "9px 10px",
              borderRadius: "12px",
              cursor: "pointer",
              "&:hover": { bgcolor: "#232323" },
            }}
          >
            {item.icon}
            <Typography fontSize={14}>{item.title}</Typography>
          </Stack>
        ))}
      </Stack>

      {/* SUBSCRIPTION SECTION */}
      <Stack spacing={1} py={1.5}>
        <Typography fontWeight={600} px={1}>
          Subscriptions
        </Typography>

        {[
          {
            img: "https://www.medianews4u.com/wp-content/uploads/2020/04/Aaj-Tak-2.jpg",
            title: "Aaj Tak",
          },
          {
            img: "https://www.nicepng.com/png/detail/258-2588351_malayalam-news-paper-indian-news-channel-logo.png",
            title: "ZEE NEWS",
          },
          {
            img: "https://i.pinimg.com/736x/8b/12/52/8b125232501ef2f169a7085149b14a3b.jpg",
            title: "NDTV India",
          },
        ].map((item, idx) => (
          <Stack
            key={idx}
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{
              p: "9px 10px",
              borderRadius: "12px",
              cursor: "pointer",
              "&:hover": { bgcolor: "#232323" },
            }}
          >
            <Avatar
              src={item.img}
              alt={item.title}
              sx={{ width: 25, height: 25 }}
            />
            <Typography fontSize={14} fontWeight={500}>
              {item.title}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Sidenavbar;
