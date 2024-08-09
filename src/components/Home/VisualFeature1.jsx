import React, { useRef } from "react";
// import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi"

const VisualFeature = () => {
  return (
    <div className="snippt-interface">
      <div style={{width:" 7s8%"}}>
        <p className="font-head"><b>VisualFeature:</b> Create user interfaces from components</p>
        <p className="sub-font-head">
          React lets you build user interfaces out of individual pieces called
          components. Create your own React components like Thumbnail,
          LikeButton, and Video. Then combine them into entire screens, pages,
          and apps.
        </p>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <p className="sub-font-head">
          Whether you work on your own or with thousands of other developers,
          using React feels the same. It is designed to let you seamlessly
          combine components written by independent people, teams, and
          organizations.
        </p>
      </div>
    </div>
  );
};

export default VisualFeature;
