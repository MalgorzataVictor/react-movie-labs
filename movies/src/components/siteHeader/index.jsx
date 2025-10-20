import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Trending Today", path: "/movies/trending/today" },
  ];

  const handleMenuSelect = (path) => {
    setDrawerOpen(false);
    navigate(path);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#cc0000" }}>
        <Toolbar sx={{ justifyContent: "space-between", position: "relative" }}>
          <Typography variant="h5"> </Typography>
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Malgosia Movies
            </Typography>
          </Box>
          <IconButton color="inherit" edge="end" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            paddingTop: 2,
          }}
          role="presentation"
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", marginBottom: 2, fontWeight: "bold" }}
          >
            Menu
          </Typography>
          <List>
            {menuOptions.map((opt) => (
              <ListItem
                button
                key={opt.label}
                onClick={() => handleMenuSelect(opt.path)}
              >
                <ListItemText primary={opt.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Offset />
    </>
  );
};

export default SiteHeader;
