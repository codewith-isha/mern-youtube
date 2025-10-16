import React, { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Avatar,
  Typography,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import SearchIcon from "@mui/icons-material/Search";
import YouTubeIcon from "@mui/icons-material/YouTube";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VideoCallIcon from "@mui/icons-material/VideoCall";

const Navbar = () => {
  const [userPic] = useState(
    "https://th.bing.com/th/id/OIP.Wy2uo_y-ttULYs4chLmqSAAAAA?rs=1&pid=ImgDetMain"
  );
  const [navbarModal, setNavbarModal] = useState(false);

  const handleClickModal = () => {
    setNavbarModal((prev) => !prev);
  };

  return (
    <Box
      sx={{
        height: "56px",
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        width: "100%",
        bgcolor: "black",
        zIndex: 10,
      }}
    >
      {/* LEFT SECTION */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton sx={{ color: "white" }}>
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center", color: "white", cursor: "pointer" }}>
          <YouTubeIcon sx={{ color: "red", fontSize: 34 }} />
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Lora, serif",
              fontWeight: 600,
              ml: 0.5,
            }}
          >
            YouTube
          </Typography>
        </Box>
      </Box>

      {/* MIDDLE SECTION */}
      <Box sx={{ display: "flex", alignItems: "center", width: "50%", gap: 1 }}>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            bgcolor: "#121212",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgb(58,57,57)",
          }}
        >
          <InputBase
            placeholder="search"
            sx={{
              ml: 2,
              flex: 1,
              color: "white",
              fontSize: 16,
              "&::placeholder": { color: "white" },
            }}
          />
          <IconButton
            sx={{
              p: "10px",
              bgcolor: "rgb(42,42,42)",
              borderRadius: 0,
              color: "white",
              borderLeft: "1px solid rgb(42,42,42)",
              width: 70,
            }}
          >
            <SearchIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Paper>

        <IconButton
          sx={{
            bgcolor: "rgb(42,42,42)",
            width: 40,
            height: 40,
            color: "white",
            borderRadius: "50%",
          }}
        >
          <KeyboardVoiceIcon />
        </IconButton>
      </Box>

      {/* RIGHT SECTION */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, position: "relative" }}>
        <IconButton sx={{ color: "white" }}>
          <VideoCallIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <NotificationsIcon sx={{ fontSize: 30 }} />
        </IconButton>

        <Avatar
          src={userPic}
          sx={{ width: 30, height: 30, cursor: "pointer" }}
          onClick={handleClickModal}
        />

        {navbarModal && (
          <Box
            sx={{
              position: "absolute",
              top: 40,
              right: 0,
              width: "120px",
              bgcolor: "rgb(85,85,85)",
              borderRadius: "8px",
              overflow: "hidden",
              zIndex: 20,
              color: "white",
            }}
          >
            {["Profile", "Logout", "Login"].map((item) => (
              <Box
                key={item}
                sx={{
                  p: 1,
                  cursor: "pointer",
                  "&:hover": { bgcolor: "rgb(34,33,33)" },
                }}
              >
                {item}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
