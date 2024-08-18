import React, { useState, useEffect } from "react";
import "./hero.css";
import "animate.css";
//CSS animation library sourced from
//https://animate.style/
import HelloVector from "../../assets/Vector Lines Medium.png";
import NameVector from "../../assets/Vector Lines Large.png";
import ProfileVector from "../../assets/Profile Icon.png";
import RocketVector from "../../assets/Rocket Icon.png";
import Eclipse from "../../assets/Blue Eclipse.png";
import Lien from "../../assets/Lien No Background.png";
import Arrow from "../../assets/Diagonal Arrow.png";
import ArrowVector from "../../assets/Background Vectors/Arrow Vector.png";
import CloudVector from "../../assets/Background Vectors/Cloud Vector.png";
import ConstellationVector from "../../assets/Background Vectors/Constellation Vector.png";
import FlowerVector from "../../assets/Background Vectors/Flower Vector.png";
import HeartBalloonVector from "../../assets/Background Vectors/Heart Balloon Vector.png";
import HeartsVector from "../../assets/Background Vectors/Hearts Vector.png";
import PaperAirplaneVector from "../../assets/Background Vectors/Paper Airplane Squiggly Vector.png";
import RaincloudVector from "../../assets/Background Vectors/Raincloud Vector.png";
import SaturnVector from "../../assets/Background Vectors/Saturn Vector.png";
import ShootingStarVector from "../../assets/Background Vectors/Shooting Star Vector.png";
import SquigglyHeartVector from "../../assets/Background Vectors/Squiggly Heart Vector.png";
import Squiggly2Vector from "../../assets/Background Vectors/Squiggly2 Vector.png";
import StarVector from "../../assets/Background Vectors/Star Vector.png";
import Star2Vector from "../../assets/Background Vectors/Star2 Vector.png";
import SwirlVector from "../../assets/Background Vectors/Swirl Vector.png";
import WhirlpoolVector from "../../assets/Background Vectors/Whirlpool Vector.png";

const Hero = () => {
    //State variables to control when BackgroundVector component appears and Intro component disappears
    const [isVectorsVisible, setIsVectorVisible] = useState(false);

    // Function to handle mouse enter and mouse leave events within the PhotoArea component
    const handleMouseEnterPhotoArea = () => {
        setIsVectorVisible(true);
    };

    const handleMouseLeavePhotoArea = () => {
        setIsVectorVisible(false);
    };

    const Intro = () => {
        const occupations = ["Entrepreneur", "Accountant", "No Code Developer", "Web Developer"];

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
                    style={{ opacity, transition: "opacity 2s ease-in-out" }}>
                    <img className="name-vector" src={NameVector} alt="" />
                    {occupations[currentIndex]}
                </div>
            );
        };

        return (
            <div className="intro-group" onMouseEnter={handleMouseLeavePhotoArea}>
                <div className="hello-group">
                    <div>
                        <p className="hello-text">Hello!</p>
                    </div>
                    <div>
                        <img src={HelloVector} className="hello-vector" alt="decorativeVector" />
                    </div>
                </div>
                <div className="name-group">
                    <div className="name-text">
                        <p>I'm </p>
                        <p style={{ marginLeft: "1.5vw", color: "#2685BF" }}>Lien</p>
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
            <div className="icon-bar" onMouseEnter={handleMouseLeavePhotoArea}>
                <div className="icon-bar-icons">
                    <img
                        src={RocketVector}
                        alt="decorativeVector"
                        style={{ marginBottom: "1rem" }}
                    />
                    <img src={ProfileVector} alt="decorativeVector" />
                </div>
                <div className="icon-bar-icons">
                    <p style={{ width: "30%" }}>
                        Chartered Professional Accountant and entrepreneur.
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
            <div className={isVectorsVisible ? "photo-area-shifted" : ""}>
                <div className="photo-area" onMouseEnter={handleMouseEnterPhotoArea}>
                    <img src={Eclipse} id="vectorEclipse" alt="decorativeVector" />
                    <img src={Lien} id="photoLien" alt="photoLien" />
                </div>

                <PortfolioButton />
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
                            onClick={handleRedirectPortfolio}>
                            <p>Portfolio</p>
                            <img src={Arrow} alt="decorativeVector" />
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
                            onClick={handleRedirectConnect}>
                            <p>Connect</p>
                            <img src={Arrow} alt="decorativeVector" />
                        </button>
                    )}
                </div>
            </div>
        );
    };

    const BackgroundVectors = () => {
        return (
            <div className={`vector-wrapper${isVectorsVisible ? "" : "-inactive"}`}>
                <img src={HeartsVector} id="heartsVector" alt="decorativeVector" />
                <img src={CloudVector} id="cloudVector" alt="decorativeVector" />
                <img src={SwirlVector} id="swirlVectorLeftTop" alt="decorativeVector" />
                <img src={SwirlVector} id="swirlVectorRightTop" alt="decorativeVector" />
                <img src={SwirlVector} id="swirlVectorRightBottom" alt="decorativeVector" />
                <img src={SwirlVector} id="swirlVectorLeftBottom" alt="decorativeVector" />
                <img src={SaturnVector} id="saturnVector" alt="decorativeVector" />
                <img src={StarVector} id="starVectorLeft" alt="decorativeVector" />
                <img src={StarVector} id="starVectorRight" alt="decorativeVector" />
                <img src={Star2Vector} id="star2Vector" alt="decorativeVector" />
                <img src={FlowerVector} id="flowerVector" alt="decorativeVector" />
                <img src={ArrowVector} id="arrowVector" alt="decorativeVector" />
                <img src={SquigglyHeartVector} id="squigglyHeartVector" alt="decorativeVector" />
                <img src={Squiggly2Vector} id="squiggly2Vector" alt="decorativeVector" />
                <img src={PaperAirplaneVector} id="paperAirplaneVector" alt="decorativeVector" />
                <img src={ConstellationVector} id="constellationVector" alt="decorativeVector" />
                <img src={HeartBalloonVector} id="heartBalloonVector" alt="decorativeVector" />
                <img src={ShootingStarVector} id="shootingStarVector" alt="decorativeVector" />
                <img src={WhirlpoolVector} id="whirlpoolVector" alt="decorativeVector" />
                <img src={RaincloudVector} id="raincloudVector" alt="decorativeVector" />
            </div>
        );
    };

    return (
        <div className="hero-wrapper">
            {isVectorsVisible ? (
                <div className="animate__animated animate__fadeOutUp">
                    <Intro />
                </div>
            ) : (
                <div className="animate__animated animate__fadeInDown">
                    <Intro />
                </div>
            )}
            {isVectorsVisible ? (
                <div className="animate__animated animate__slideInUp">
                    <div className="icon-bar-shifted">
                        <IconBar />
                    </div>
                </div>
            ) : (
                <div className="animate__animated animate__slideInDown">
                    <IconBar />
                </div>
            )}
            <PhotoArea />
            {isVectorsVisible ? (
                <div className="animate__animated animate__fadeIn">
                    <BackgroundVectors />
                </div>
            ) : (
                <div className="animate__animated animate__fadeOut">
                    <BackgroundVectors />
                </div>
            )}
        </div>
    );
};

export default Hero;
