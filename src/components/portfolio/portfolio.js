import React, { useState } from "react";
import "./portfolio.css";
import "animate.css";
//CSS animation library sourced from
//https://animate.style/
import TN100D from "../../assets/TN100D Dashboard.svg";
import ArrowButton from "../../assets/Arrow Button.png";
import ArrowButtonFilled from "../../assets/Arrow Button Filled.png";
import TrufflowDashboard from "../../assets/Trufflow Dashboard.jpg";

const Portfolio = () => {
    /*Function to handle mouse click - Redirects to Portfolio page
    const handleRedirectPortfolio = () => {
        window.location.href = "./projects";
    };
    */

    //Function to handle mouse click - Open Trufflow website
    const handleRedirectTrufflow = () => {
        window.open("https://trufflow.com", "_blank");
    };

    //Function to handle mouse click - Open TN100D website
    const handleRedirectTN100D = () => {
        window.open("https://thenext100days.app", "_blank");
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
                            <p id="showcase-portfolio-minimized-title">{name}</p>
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

    return (
        <div className="portfolio-comp-wrapper" id="portfolioLink">
            <div className="portfolio-comp-header">
                <div className="portfolio-comp-text">
                    <p>
                        Let's Have a Look at My <span style={{ color: "#BBE8F2" }}>Projects</span>
                    </p>
                </div>
                {/*Placeholder button to redirect to Portfolio page if multi page portfolio website is to be made.
                    <button className="button" onClick={handleRedirectPortfolio}>
                        See All
                    </button>
                */}
            </div>
            <div className="portfolio-comp-header">
                <div className="portfolio-comp-header-inner" onClick={handleRedirectTrufflow}>
                    <PortfolioShowcase
                        style={{ backgroundImage: `url("${TrufflowDashboard}")` }}
                        name="Trufflow"
                        description="App monitoring stack for IT value management."
                    />
                </div>
                <div className="portfolio-comp-header-inner" onClick={handleRedirectTN100D}>
                    <PortfolioShowcase
                        style={{ backgroundImage: `url("${TN100D}")` }}
                        name="The Next 100 Days"
                        description="Productivity app to promote 100 days of habit formation. Balances productivity, mindfulness, and self-care."
                    />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
