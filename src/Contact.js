import React, { useState } from "react";
import "./Contact.css";
import contactImg from "./img/about-9.png";
function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [content, setContent] = useState();
  const joined = "mailto:harshit.banssal@gmail.com?subject=" + subject + "&body=Hi, I'm " + name + ".%0D%0AReply me on " + email + ".%0D%0A" +  content;
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me.</h1>
              <p className="hire__text white">
                I am available for freelance work. Connect with me via phone:
              </p>
              <p className="hire__text white">
                <strong>+91 7015942546</strong> or email{" "}
                <strong>harshit.banssal@gmail.com</strong>
              </p>
            </div>
            <div className="input__box">
              <input
                type="text"
                className="contact name"
                placeholder="Your name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="contact email"
                placeholder="Your Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                className="contact subject"
                placeholder="Write a Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write Your message"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <a href={joined}>
                <button className="btn contact pointer" type="submit">
                  Submit
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
