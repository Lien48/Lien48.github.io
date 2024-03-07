import React, { useState, useEffect } from "react";
import "./hero.css";
import HelloVector from "../../assets/Vector Lines Medium.png";
import NameVector from "../../assets/Vector Lines Large.png";
import ProfileVector from "../../assets/Profile Icon.png";
import RocketVector from "../../assets/Rocket Icon.png";
import Eclipse from "../../assets/Blue Eclipse.png";
import Lien from "../../assets/Lien No Background.png";
import Arrow from "../../assets/Diagonal Arrow.png";
import ArrowVector from "../../assets/Background Vectors/Arrow Vector.png";
import ConsstellationVector from "../../assets/Background Vectors/Constellation Vector.png";
import FlowerVector from "../../assets/Background Vectors/Flower Vector.png";
import HeartBalloonVector from "../../assets/Background Vectors/Heart Balloon Vector.png";
import HeartsVector from "../../assets/Background Vectors/Hearts Vector.png";
import PaperAirplaneVector from "../../assets/Background Vectors/Paper Airplane Squiggly Vector.png";
import RaincloudVector from "../../assets/Background Vectors/Raincloud Vector.png";
import SaturnVector from "../../assets/Background Vectors/Saturn Vector.png";
import ShootingStarVector from "../../assets/Background Vectors/Shooting Star Vector.png";
import SquigglyVector from "../../assets/Background Vectors/Squiggly Vector.png";
import Squiggly2Vector from "../../assets/Background Vectors/Squiggly2 Vector.png";
import StarVector from "../../assets/Background Vectors/Star Vector.png";
import Star2Vector from "../../assets/Background Vectors/Star2 Vector.png";
import SwirlVector from "../../assets/Background Vectors/Swirl Vector.png";
import WhirlpoolVector from "../../assets/Background Vectors/Whirlpool Vector.png";

const Hero = () => {
  const Intro = () => {
    const occupations = [
      "Entrepreneur",
      "Accountant",
      "No Code Developer",
      "Web Developer",
      "Digital Creator",
    ];

    const WordFader = ({ occupations }) => {
      const [currentIndex, setCurrentIndex] = useState(0);
      const [opacity, setOpacity] = useState(1);

      useEffect(() => {
        const interval = setInterval(() => {
          setOpacity(0); // Fade out
          setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % occupations.length);
            setOpacity(1); // Fade in
          }, 2000); // Wait for fade out transition to complete
        }, 3000); // Repeat every 3 seconds

        return () => clearInterval(interval);
      }, [currentIndex, occupations.length]);

      return (
        <div
          id="animated-heading"
          style={{ opacity, transition: "opacity 2s ease-in-out" }}
        >
          <img className="name-vector" src={NameVector} />
          {occupations[currentIndex]}
        </div>
      );
    };

    return (
      <div className="intro-group">
        <div className="hello-group">
          <div>
            <p className="hello-text">Hello!</p>
          </div>
          <div>
            <img src={HelloVector} className="hello-vector" />
          </div>
        </div>
        <div className="name-group">
          <div className="name-text">
            <p>I'm </p>
            <p style={{ marginLeft: "1rem", color: "#2685BF" }}>Lien</p>
            <p>,</p>
          </div>
          <div id="name-text-occupation">
            <WordFader occupations={occupations} />
          </div>
        </div>
      </div>
    );
  };

  const IconBar = () => {
    return (
      <div className="icon-bar">
        <div className="icon-bar-icons">
          <img
            src={RocketVector}
            style={{ width: "35px", marginBottom: "10px" }}
          />
          <img src={ProfileVector} style={{ width: "35px" }} />
        </div>
        <div className="icon-bar-icons">
          <p style={{ width: "30%" }}>
            Chartered Professional Accountant turned developer and entrepreneur.
          </p>
          <div style={{ textAlign: "right" }}>
            <p id="icon-bar-text-title">7 Years</p>
            <p>Professional</p>
            <p>Accounting</p>
            <p>Experience</p>
          </div>
        </div>
      </div>
    );
  };

  const PhotoArea = () => {
    return (
      <div className="photo-area">
        <img src={Eclipse} id="vectorEclipse" />
        <img src={Lien} id="photoLien" />
      </div>
    );
  };

  const PortfolioButton = () => {
    const [isActive, setIsActive] = useState(true);

    // Function to handle mouse enter event
    const handleMouseEnter = () => {
      setIsActive(true);
    };

    // Function to handle mouse leave event
    const handleMouseLeave = () => {
      setIsActive(false);
    };

    //Function to handle mouse click - Portfolio
    const handleRedirectPortfolio = () => {
      window.location.href = "./projects";
    };

    //Function to handle mouse click - Connect
    const handleRedirectConnect = () => {
      window.open("https://ca.linkedin.com/in/lienchueh", "_blank");
    };

    return (
      <div className="portfolio-wrapper">
        <div className="portfolio-group">
          {isActive ? (
            <button
              className="portfolio-button-active"
              onMouseEnter={handleMouseEnter}
              onClick={handleRedirectPortfolio}
            >
              <p>Portfolio</p>
              <img src={Arrow} style={{ width: "20px", marginLeft: "10px" }} />
            </button>
          ) : (
            <button className="portfolio-text" onMouseEnter={handleMouseEnter}>
              Portfolio
            </button>
          )}
          {isActive ? (
            <button className="portfolio-text" onMouseEnter={handleMouseLeave}>
              Connect
            </button>
          ) : (
            <button
              className="portfolio-button-active"
              onMouseEnter={handleMouseLeave}
              onClick={handleRedirectConnect}
            >
              <p>Connect</p>
              <img src={Arrow} style={{ width: "20px", marginLeft: "10px" }} />
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Intro />
      <IconBar />
      <PhotoArea />
      <PortfolioButton />
    </div>
  );
};

export default Hero;
