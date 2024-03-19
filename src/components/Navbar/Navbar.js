import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import r_logo from "../../assets/r-logo.png";
import user from "../../assets/user.png";

const pages = ["Home", "About Us", "Blogs", "Services"];
const settings = [
  "Profile",
  "Add Job",
  "Manage Jobs",
  "Applications",
  "Logout",
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#fff" }}>
      <Stack
        alignItems={"center"}
        direction={"row"}
        padding={"0.5rem 2rem"}
        justifyContent={"space-between"}
      >
        <Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              width: "4rem",
              height: "4rem",
            }}
          >
            <img src={logo} alt="Job-portal" />
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              width: "4rem",
              height: "4rem",
            }}
          >
            <img src={r_logo} alt="Job-portal" />
          </Box>
        </Box>
        <Box>
          <Stack spacing={1} direction={"row"} alignItems={"center"}>
            {/*Nav items */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#333", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            {/* Avatar User */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Amaar Raza">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={user} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* Menu Button */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="#333"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </AppBar>
  );
}
export default ResponsiveAppBar;
