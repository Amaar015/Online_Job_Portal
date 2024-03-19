import { Stack, Typography } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Works = () => {
  return (
    <div className="works">
      <Stack
        spacing={2}
        justifyContent={"start"}
        marginTop={"2rem"}
        color={"#fff"}
      >
        <Typography
          variant={"h4"}
          sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem" } }}
          color={"#fff"}
        >
          How Job Portal Works
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.3rem" },
            width: { sm: "80%", md: "50%" },
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Typography>
        <div className="main">
          {/* 1 */}
          <Stack direction={"row"}>
            <Typography>Open roles</Typography>
            <ArrowRightAltIcon />
          </Stack>
          {/* 2 */}
          <Stack direction={"row"}>
            <Typography>Internship program</Typography>
            <ArrowRightAltIcon />
          </Stack>
          {/* 1 */}
          <Stack direction={"row"}>
            <Typography>Our Values</Typography>
            <ArrowRightAltIcon />
          </Stack>
          {/* 1 */}
          <Stack direction={"row"}>
            <Typography>Meet Our leadership</Typography>
            <ArrowRightAltIcon />
          </Stack>
        </div>
        <div className="main main-1">
          <Stack>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1.6rem", sm: "1.8rem" } }}
            >
              12
            </Typography>
            <Typography variant="p" fontSize={"1.1rem"}>
              Offices worldwide
            </Typography>
          </Stack>
          <Stack>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1.6rem", sm: "1.8rem" } }}
            >
              300+
            </Typography>
            <Typography variant="p">Full time colleagues</Typography>
          </Stack>
          <Stack>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1.6rem", sm: "1.8rem" } }}
            >
              40
            </Typography>
            <Typography variant="p">Hours per week</Typography>
          </Stack>
          <Stack>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1.6rem", sm: "1.8rem" } }}
            >
              Unlimited
            </Typography>
            <Typography variant="p">Paid time off</Typography>
          </Stack>
        </div>
      </Stack>
    </div>
  );
};

export default Works;
