import React, { useRef, useEffect } from "react";
// import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi"

const VisualFeature = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  }, []);

  return (
    <div className="snippt-feature-wrapper">
      <div className="snippt-feature-header">
        <p className="font-2nd-head">
          Simplicity and Flexibility at its core.
          <b
            style={{
              color: "rgb(180, 65, 65)",
            }}
          ></b>
        </p>
        <p className="sub-font-head" style={{ marginBottom: "3rem" }}>
          Langflow is designed to redefine the boundaries of AI development in
          experimentation and real-world scenarios.
        </p>
      </div>
      <div className="snippt-feature-video">
        <div className="video-width-50" style={{ width: "30%" }}>
          <video
            ref={videoRef}
            src="https://framerusercontent.com/assets/raIsyrxbwNUCYj9hnazVvcGKyoo.mp4"
            muted
            autoPlay
            controls
            style={{ width: "340px", height: "auto", borderRadius: 20 }} // For responsive sizing
          />
          <div className="width-80">
            <h3 className="video-header">Prompt Variables</h3>
            <p className="video-text">
              Dynamic inputs are introduced using curly brackets {}.
            </p>
          </div>
        </div>
        <div className="video-width-50" style={{ width: "70%" }}>
          <video
            ref={videoRef}
            src="https://framerusercontent.com/assets/Fi8N4KnCUKxoR3J7a9QxFMXg0.mp4"
            muted
            autoPlay
            controls
            style={{ width: "850px", height: "auto", borderRadius: 20 }} // For responsive sizing
          />
          <div className="width-80">
            <h3 className="video-header">Prompt Variables</h3>
            <p className="video-text">
              Dynamic inputs are introduced using curly brackets.
            </p>
          </div>
        </div>
      </div>
      <div className="snippt-feature-video" style={{flexDirection: "row-reverse"}}>
        <div className="video-width-50" style={{ width: "30%" }}>
          <video
            ref={videoRef}
            src="https://framerusercontent.com/assets/raIsyrxbwNUCYj9hnazVvcGKyoo.mp4"
            muted
            autoPlay
            controls
            style={{ width: "340px", height: "auto", borderRadius: 20 }} // For responsive sizing
          />
          <div className="width-80">
            <h3 className="video-header">Custom Components</h3>
            <p className="video-text">
            Go beyond the surface and code your own components.
            </p>
          </div>
        </div>
        <div className="video-width-50" style={{ width: "70%" }}>
          <video
            ref={videoRef}
            src="https://framerusercontent.com/assets/V8eLUVT7yItwuUSVXrRri9sNZ5s.mp4"
            muted
            autoPlay
            controls
            style={{ width: "850px", height: "auto", borderRadius: 20 }} // For responsive sizing
          />
          <div className="width-80">
            <h3 className="video-header">Group Components</h3>
            <p className="video-text">
            Higher-level components naturally emerge from AI building blocks. Store and share your creations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualFeature;
