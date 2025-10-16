import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  InputBase,
  Avatar,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import SearchIcon from "@mui/icons-material/Search";
import YouTubeIcon from "@mui/icons-material/YouTube";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VideoCallIcon from "@mui/icons-material/VideoCall";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius * 10,
  backgroundColor: alpha("#121212", 1),
  "&:hover": {
    backgroundColor: alpha("#1E1E1E", 1),
  },
  marginLeft: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  border: "1px solid #3A3A3A",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flex: 1,
  paddingLeft: theme.spacing(2),
  "& .MuiInputBase-input": {
    color: "white",
    padding: theme.spacing(1, 0, 1, 0),
    width: "100%",
  },
}));

const Navbar = () => {
  const [userPic] = useState(
    "https://th.bing.com/th/id/OIP.Wy2uo_y-ttULYs4chLmqSAAAAA?rs=1&pid=ImgDetMain"
  );

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "black",
        boxShadow: "none",
        px: { xs: 1, sm: 2 },
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
        {/* Left Section */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>

          <Stack
            direction="row"
            alignItems="center"
            sx={{ cursor: "pointer", color: "white" }}
          >
            <YouTubeIcon sx={{ color: "red", fontSize: 32 }} />
            {!isMobile && (
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, fontFamily: "Lora, serif", ml: 0.5 }}
              >
                YouTube
              </Typography>
            )}
          </Stack>
        </Stack>

        {/* Middle Section (Search) */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "50%",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Search sx={{ flexGrow: 1 }}>
              <StyledInputBase placeholder="Search" />
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>

            <IconButton sx={{ bgcolor: "#2A2A2A", color: "white" }}>
              <KeyboardVoiceIcon />
            </IconButton>
          </Box>
        )}

        {/* Right Section */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <IconButton sx={{ color: "white" }}>
            <VideoCallIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <NotificationsIcon />
          </IconButton>
          <Avatar src={userPic} sx={{ width: 32, height: 32, cursor: "pointer" }} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
