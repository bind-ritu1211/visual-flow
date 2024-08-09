import React, { useRef } from "react";
import PersonIcon from "@mui/icons-material/Person";

const VisualCommunity = ({ text, title, description }) => {
  return (
      <div class="visual-community-card">
        <p className="margin-0" style={{ float: "right" }}>
          <PersonIcon className="card-person-detail" />
          <b style={{ fontSize: 25 }}>{text}+</b>
        </p>
        <p className="margin-0">
          <b style={{ fontSize: 20 }}>{title}</b>
        </p>
        <p>
          <b style={{ fontSize: 28 }}>{description}</b>
        </p>
        <a href="#" class="community-card-title">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Cursus quam
          placerat tellus ultricies tempus torquent conubia ornare integer.
        </a>
      </div>
  );
};

export default VisualCommunity;
