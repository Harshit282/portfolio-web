import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img"/>
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                
              </p>
              <p className="about__text p__color">
                My name is Harshit Bansal. I am a Software and Web Developer.
                I am from "Yamuna Nagar", India.
                I have keen interest in coding and developing various applications and websites that
                which not only makes me understand this world of computers but also sharpens my knowledge
                and skills.
              </p>
              <p className="about__text p__color">
                I have currently developed 2 projects - File ORGainzer, Haazir. Both of them were my favourites as 
                i get to know about how the software aplication and websites work.
              </p>
              <p className="about__text p__color">
                FORG, a GUI Based File Orgainzer was the first ever major project i built along with my team 
                members. I learned the software implementation of Python, the significant role of the database 
                and how does database acts as the backbone of the project. I got to learn a lot from my team members
                and the ideas they had regarding the scalability of the project. This project would have not been 
                so efficiently implemented without my team.
              </p>
              <p className="about__text p__color">
                Next as of Haazir, it's a Android Based Facial Recognition Attendance marking application 
                where i contributed by not only developing the admin side website for our Admins but also 
                connecting the android database to the website.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="Resume.pdf" download>
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
