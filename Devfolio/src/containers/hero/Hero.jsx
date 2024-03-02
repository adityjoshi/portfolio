import React from "react";
import "./hero.css";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import main from "../../assets/sujit.png";
import Skills from "../../components/skills/Skills";
const Hero = () => {
  return (
    <section className="myPortfolio__hero" id="home">
      <div className="container">
        <div className="hero__main">
          <div className="hero-text">
            <h1>Hey, I am Aditya </h1>
            <p>
            I am a CS Engineer passionate about Building Systems and enjoys delving into the intricacies of Networking. In 2024, I took the leap of faith and Founded <a href="https://www.linkedin.com/company/101479701/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B2Kn6nMfRTmCtIQM3KOudjA%3D%3D">BashCraft Club</a>, where I am operating as the President .
            </p>
            <p2>I keep diving deep into engineering topics and share my learning across <a href="http://biodrop.io/adityjoshi">socials</a>. To put my learning to practice, I keep building things on the side and a few of my learning and good hobby projects include
            
</p2>

<p3>
            <ul>
                <li>Project 3</li>
                <li>Project 4</li>
              </ul>
            </p3> 
            
            <span>
              <a href="https://twitter.com/iAmSujitMemane" target="_blank">
                <AiFillTwitterCircle></AiFillTwitterCircle>
              </a>
              <a
                href="https://www.linkedin.com/in/sujit-memane-4704b01b0/"
                target="_blank"
              >
                <AiFillLinkedin></AiFillLinkedin>
              </a>
              <a href="https://github.com/sujitmemane" target="_blank">
                <AiFillGithub></AiFillGithub>
              </a>
            </span>
          </div>
          <div className="hero-image vibrate-1">
            <img src={main} alt="Main-Image" className="main-img" />
          </div>
        </div>
      </div>
      <Skills></Skills>
    </section>
  );
};

export default Hero;
