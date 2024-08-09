import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GitHubIcon from "@mui/icons-material/GitHub";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const texts = [
  "AI-Driven Apps",
  "Autonomous Agents",
  "ML Workflows",
  "AGI Research",
  "Conversational AI",
  "Autonomous Agents",
  "",
];

const VisualHome = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      setSpeed(isDeleting ? 30 : 150);
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, speed]);

  useEffect(() => {
    setCurrentText(texts[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <div className="home-wrapper">
      <div className="home-wrapper-header">
        <Button
          variant="outlined"
          className="home-btn"
          sx={{
            backgroundColor: "#fff",
            borderColor: "transparent",
            color: "#000",
            textTransform: "none",
            fontSize: 16,
            fontWeight: 500,
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 2px 0px",
          }}
        >
          Langflow 1.0 is OUT with a new free cloud service! 🎉 &ensp;
          <b>Try it now</b>&ensp;
          <ArrowForwardIcon />
        </Button>
        <p className="font-head">
          The easiest way to create and share{" "}
          <b
            style={{
              color: "rgb(180, 65, 65)",
            }}
          >
            {currentText}
          </b>
        </p>
        <p className="sub-font-head">
          Discover a simpler way to build around Foundation Models
        </p>
        <p className="home-btn-wraspper">
          <Button
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
            Get Started
            <NavigateNextIcon />
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#000",
              borderRadius: 50,
              color: "#000",
              textTransform: "none",
              fontFamily: ["Inter", "sans-serif"],
              fontSize: 16,
              m: 0.5,
              height: 45,
              width: 190,
            }}
          >
            <GitHubIcon />
            GitHub
          </Button>
        </p>
      </div>
    </div>
  );
};

export default VisualHome;
