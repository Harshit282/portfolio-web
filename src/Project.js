import React from "react";
import "./Project.css";
import Project1 from "./img/portfolio-1.png";
import Project2 from "./img/portfolio-2.png";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          I have put my heart and soul into these projects.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">File ORGanizer</h4>
                <a
                  href="https://github.com/Harshit282/forg.git"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">Haazir</h4>
                <a
                  href="https://github.com/teamcastor/haazir-website.git"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
