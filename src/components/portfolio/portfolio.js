import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";
import "animate.css";
//CSS animation library sourced from
//https://animate.style/
import TN100D from "../../assets/TN100D Dashboard.svg";
import ArrowButton from "../../assets/Arrow Button.png";
import ArrowButtonFilled from "../../assets/Arrow Button Filled.png";

const Portfolio = () => {
    //Function to handle mouse click - Redirects to Portfolio page
    const handleRedirectPortfolio = () => {
        window.location.href = "./projects";
    };

    //Portfolio component to showcase individual portfolio projects
    const PortfolioShowcase = ({ style, name, description }) => {
        const [isHidden, setIsHidden] = useState(true);

        //When mouse enters the portfolio window
        const handleMouseEnter = () => {
            setIsHidden(false);
        };

        //When mouse leaves the portfolio window
        const handleMouseLeave = () => {
            setIsHidden(true);
        };

        return (
            <div
                className="showcase-wrapper"
                style={style}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                {isHidden ? (
                    <div
                        className="animate__animated animate__fadeIn"
                        key="minimized"
                        style={{ height: "100%", width: "100%" }}>
                        <div className="showcase-portfolio-minimized">
                            <img src={ArrowButton} alt="" id="button-arrow" />
                            <p>{name}</p>
                        </div>
                    </div>
                ) : (
                    <div
                        className="animate__animated animate__fadeIn"
                        key="maximized"
                        style={{ height: "100%", width: "100%" }}>
                        <div className="showcase-portfolio-maximized">
                            <img src={ArrowButtonFilled} alt="" id="button-arrow" />
                            <div className="showcase-portfolio-details">
                                <p className="showcase-portfolio-text-name">{name}</p>
                                <p id="showcase-portfolio-text">{description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    //Bubble call outs regarding skills
    const BubbleCallOuts = () => {
        const skills = [
            "No-Code Developer",
            "Front-End Development",
            "Chartered Professional Accountant",
            "Digital Creator",
        ];

        return (
            <div className={"bubbleCallout-comp-wrapper"}>
                {skills.map((x) => (
                    <p>{x}</p>
                ))}
            </div>
        );
    };

    return (
        <div className="portfolio-comp-wrapper">
            <div className="portfolio-comp-header">
                <div className="portfolio-comp-text">
                    <p>
                        Let's Have a Look at My <span style={{ color: "#BBE8F2" }}>Projects</span>
                    </p>
                </div>
                <button className="button" onClick={handleRedirectPortfolio}>
                    See All
                </button>
            </div>
            <div className="portfolio-comp-header">
                <a href="https://thenext100days.app">
                    <PortfolioShowcase
                        style={{ backgroundImage: `url("${TN100D}")` }}
                        name="The Next 100 Days"
                        description="Productivity app centered around achieving 100 days of mindfulness, self-care, and productivity."
                    />
                </a>
                <a href="https://thenext100days.app">
                    <PortfolioShowcase
                        style={{ backgroundImage: `url("${TN100D}")` }}
                        name="TBD"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Sed lobortis orci elementum egestas
                                    lobortis."
                    />
                </a>
            </div>
            <div className="portfolio-comp-header">
                <BubbleCallOuts />
            </div>
        </div>
    );
};

export default Portfolio;
