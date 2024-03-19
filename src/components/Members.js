import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { Team_member } from "../data/data";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Members = () => {
  return (
    <div className="main" style={{ padding: "0rem 5%" }}>
      <div className="heading">
        <h1 className="head">
          Meet Our <span style={{ color: "#29c5f6" }}>Leadership</span>{" "}
        </h1>
      </div>

      {/* Team Members card */}
      <div className="container">
        <div className="cards">
          {Team_member.map((member) => (
            <div className="card">
              <div className="content">
                <div className="img">
                  <img src={member.avatar} alt={member.name} />
                </div>
                <div className="details">
                  <div className="name">{member.name}</div>
                  <div className="job">{member.position}</div>
                </div>
                <div className="media-icons">
                  <IconButton className="a">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton className="a">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton className="a">
                    <InstagramIcon />
                  </IconButton>
                  <IconButton className="a">
                    <LinkedInIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
