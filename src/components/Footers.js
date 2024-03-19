import {
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
// soical icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import logo from "../assets/logo.png";
const Footers = () => {
  return (
    <div
      style={{
        padding: "3rem 5%",
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      {/* 1 */}
      <Stack spacing={2} width={"250px"}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "130px", height: "130px" }}
        />
        <Typography variant="p" fontSize={"1.2rem"} color={"#777"}>
          A job portal is a website or online platform that connects job seekers
          with employers.A job portal is a website or online platform that
          connects job seekers with employers.
        </Typography>
      </Stack>
      {/* 2 */}
      <Stack spacing={2} width={"200px"}>
        <Typography variant="h5">Resources</Typography>
        <List>
          <ListItemButton>
            <ListItemText primary="SaaS development" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Our Products" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="User Flow" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="User Strategy" />
          </ListItemButton>
        </List>
      </Stack>
      {/* 3 */}
      <Stack spacing={2} width={"200px"}>
        <Typography variant="h5">Company</Typography>
        <List>
          <ListItemButton>
            <ListItemText primary="About TailGrids" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Contact & Support" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Success History" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Success & Privacy" />
          </ListItemButton>
        </List>
      </Stack>
      {/* 4 */}
      <Stack spacing={2} width={"200px"}>
        <Typography variant="h5">Quick Links</Typography>
        <List>
          <ListItemButton>
            <ListItemText primary="Premium Support" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Our Services" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Know Our Team" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Download App" />
          </ListItemButton>
        </List>
      </Stack>
      <Stack spacing={2} width={"200px"}>
        <Typography variant="h5">Follow Us On</Typography>
        <List>
          <Stack direction={"row"} spacing={1} marginBottom={"1rem"}>
            {/* social icons */}
            <IconButton
              sx={{
                color: "#333",
                "&:hover": {
                  color: "#29c5f6",
                },
              }}
            >
              <FacebookIcon sx={{ fontSize: "1.8rem" }} />
            </IconButton>
            <IconButton
              sx={{
                color: "#333",
                "&:hover": {
                  color: "#29c5f6",
                },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "#333",
                "&:hover": {
                  color: "#29c5f6",
                },
              }}
            >
              <InstagramIcon sx={{ fontSize: "1.8rem" }} />
            </IconButton>
            <IconButton
              sx={{
                color: "#333",
                "&:hover": {
                  color: "#29c5f6",
                },
              }}
            >
              <LinkedInIcon sx={{ fontSize: "1.8rem" }} />
            </IconButton>
          </Stack>
          <Typography color={"#666"} fontSize={"1.2rem"}>
            &#169; All Rights Reserved
          </Typography>
        </List>
      </Stack>
    </div>
  );
};

export default Footers;
