import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import profilePic from "../../assets/images/profile.jpg"; // Add your image here
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-centered">
          <img src={profilePic} alt="Sri" className="profile-pic" />
          <h1 className="greeting-title">
            Hello World! <span className="wave-emoji">{emoji("👋")}</span> I'm{" "}
            <span className="highlight-name">{greeting.username}</span>
          </h1>
          <p className="greeting-subtitle">{greeting.subTitle}</p>

          <div className="badge-container">
            <span className="badge purple">FPGA</span>
            <span className="badge blue">VLSI Design</span>
            <span className="badge gray">UMBC</span>
          </div>

          <SocialMedia />

          <div className="button-greeting-div">
            <Button text="Contact me" href="#contact" />
            {greeting.resumeLink && (
              <a href={greeting.resumeLink} target="_blank" rel="noopener noreferrer">
                <Button text="Download my resume" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
