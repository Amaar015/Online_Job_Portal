import React from "react";
import ChaletIcon from "@mui/icons-material/Chalet";
import { Avatar, Stack, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";

const WorkStation = () => {
  return (
    <div className="main" style={{ padding: "0rem 5%" }}>
      <div className="heading" style={{ color: "#29c5f6" }}>
        <Stack direction={"row"} alignItems={"center"}>
          <ChaletIcon sx={{ fontSize: "3.5rem" }} />
          <h1 className="head" style={{ color: "#29c5f6" }}>
            Workcation
          </h1>
        </Stack>
      </div>
      <Stack spacing={2} justifyContent={"center"} alignItems={"center"}>
        <Typography
          variant="p"
          sx={{
            fontSize: "1.3rem",
            width: { sm: "90%", md: "60%" },
            textAlign: "center",
          }}
        >
          Managing technology infrastructure, software development,
          cybersecurity, and digital transformation initiatives to support
          business operations and innovation. Researching, designing, and
          creating new products or improving existing ones.
        </Typography>
        <Avatar
          src={faker.image.avatar()}
          alt="CEO profile Image"
          sx={{ height: 50, width: 50 }}
        />
        <Typography sx={{ fontSize: "1.2rem", color: "#777" }}>
          <span style={{ color: "#333", fontWeight: "bold" }}>Bare Log</span> .
          CEO of Workcation
        </Typography>
      </Stack>
    </div>
  );
};

export default WorkStation;
