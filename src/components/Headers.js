import { Button, Stack, Typography } from "@mui/material";
import home from "../assets/headers.gif";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Headers = () => {
  const [login, Setlogin] = useState(true);
  const handleLogin = () => {
    Setlogin(!login);
  };

  const handleRoute = () => {
    return <Navigate to="/register" />;
  };

  return (
    <Stack
      direction={{ md: "row", xs: "column" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
      padding={{ xs: "5rem 1rem", md: "5rem 4rem" }}
      spacing={"4rem"}
    >
      {/* Details */}
      <Stack
        width={{ xs: "100%", sm: "80%", md: "50%" }}
        alignItems={"start"}
        spacing={2}
      >
        <Typography
          sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, fontWeight: "550" }}
        >
          Get Your <span style={{ color: "#29c5f6" }}>Dream Job</span> Today!
        </Typography>
        <Typography fontSize={"1.2rem"} lineHeight={"1.5rem"} color={"#666"}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
        <a
          href="/register"
          // onClick={handleRoute}
          // sx={{
          //   background: "#29c5f6",
          //   color: "#fff",
          //   border: "2px solid #29c5f6",
          //   "&:hover": { background: "#fff", color: "#29c5f6" },
          // }}
          className="button"
        >
          Apply Now
        </a>
      </Stack>
      {/* Image */}
      <Stack width={{ xs: "80%", sm: "60%", md: "50%" }}>
        <img src={home} style={{ width: "90%", height: "90%" }} />
      </Stack>
    </Stack>
  );
};

export default Headers;
