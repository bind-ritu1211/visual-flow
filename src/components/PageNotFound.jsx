import React from "react";
import bmcLogo from "../assets/images/pagenotfound.jpg";
import Button from "@mui/material/Button";

export default function PageNotFound() {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <img src={bmcLogo} style={{ width: "100%", height: "750px" }} alt="not found" />
      <Button
        href="/"
        variant="contained"
        className="border-round btn-hover"
        sx={{
          backgroundColor: "#000",
          borderRadius: 50,
          color: "#fff",
          textTransform: "none",
          fontFamily: ["Inter", "sans-serif"],
          fontSize: 16,
          m: 0.5,
          height: 45,
          width: 190,
        }}
      >
        Go Home
      </Button>
    </div>
  );
}
