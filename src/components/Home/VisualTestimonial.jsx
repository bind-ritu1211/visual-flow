import React, { useRef } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const numbers = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

const VisualTestimonial = () => {
  return (
    <div className="visual-integrations-wrapper">
      <div className="visual-integrations-header" style={{ width: "60%" }}>
        <p className="font-2nd-head">Built with Langflow 💫 </p>
        <p className="sub-font-head" style={{ marginBottom: "3rem" }}>
          Thousands are using Langflow for diverse AI applications. We're proud
          to be the backbone of so many innovative projects.
        </p>
      </div>
      <div className="visual-testimonial-carousel-container">
        <div class="carousel-container normal">
          <div class="carousel">
            {numbers.map((number) => (
              <div class="carousel-item">
                <div class="card">
                  <div style={{ display: "flex", opacity: 0.9 }}>
                    <AccountCircleIcon
                      style={{ width: " 70px", height: "70px" }}
                    />
                    <p className="card-header">
                      <b style={{ fontSize: 20 }}>Mr. Altricies</b>
                      <br></br>
                      <span style={{ fontSize: 15, opacity: 0.6 }}>
                        @consectetuer
                      </span>
                    </p>
                  </div>
                  <p class="card-title">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Cursus
                    quam placerat tellus ultricies tempus torquent conubia
                    ornare integer.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="carousel-container reverse">
          <div class="carousel">
            {numbers.map((number) => (
              <div class="carousel-item">
                <div class="card">
                  <div style={{ display: "flex", opacity: 0.9 }}>
                    <AccountCircleIcon
                      style={{ width: " 70px", height: "70px" }}
                    />
                    <p className="card-header">
                      <b style={{ fontSize: 20 }}>Mr. John</b>
                      <br></br>
                      <span style={{ fontSize: 15, opacity: 0.6 }}>
                        @consectetuer
                      </span>
                    </p>
                  </div>
                  <p class="card-title">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Cursus
                    quam placerat tellus ultricies tempus torquent conubia
                    ornare integer.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="carousel-container normal">
          <div class="carousel">
            {numbers.map((number) => (
              <div class="carousel-item">
                <div class="card">
                  <div style={{ display: "flex", opacity: 0.9 }}>
                    <AccountCircleIcon
                      style={{ width: " 70px", height: "70px" }}
                    />
                    <p className="card-header">
                      <b style={{ fontSize: 20 }}>Mr. Delma</b>
                      <br></br>
                      <span style={{ fontSize: 15, opacity: 0.6 }}>
                        @consectetuer
                      </span>
                    </p>
                  </div>
                  <p class="card-title">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Cursus
                    quam placerat tellus ultricies tempus torquent conubia
                    ornare integer.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualTestimonial;
