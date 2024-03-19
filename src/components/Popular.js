import { Stack, Typography } from "@mui/material";
import React from "react";
import { vacancies } from "../data/data";

const Popular = () => {
  return (
    <Stack
      spacing={2}
      justifyContent={"start"}
      marginTop={"2rem"}
      padding={"2rem 5%"}
    >
      <h1>Most Popular Vacancies</h1>
      <div className="main">
        {vacancies.map((data) => (
          <Stack
            width={"280px"}
            justifyContent={"center"}
            padding={"1rem"}
            spacing={2}
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "10px",
              transition: "all 0.3s linear",
              "&:hover": {
                boxShadow: "#29c5f6 0px 0px 0px 1px",
                color: "#29c5f6",
              },
            }}
          >
            <Typography variant="h6" fontWeight={"530"}>
              {data.name}
            </Typography>
            <Typography fontSize={"1.1rem"} color={"#777"}>
              {data.positions} open positions
            </Typography>
          </Stack>
        ))}
      </div>
    </Stack>
  );
};

export default Popular;
