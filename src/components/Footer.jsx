// src/Footer.js
import React from "react";
import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Footer = () => {
  return (
    <footer className="footer">
      <div style={{ display: "flex", flexFlow: "row-sreverse" }}>
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row-reverse",
          transform: "translateY(-30px)",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontWeight: 500,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            fontSize: 15,
          }}
        >
          Contact
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontWeight: 500,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            fontSize: 15,
          }}
        >
          Privacy Policy
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontWeight: 500,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            fontSize: 15,
          }}
        >
          About
        </Typography>
      </div>
      <Divider />
      <p style={{ fontSize: "16px" }}>@2024. All rights reserved</p>
    </footer>
  );
};

export default Footer;
