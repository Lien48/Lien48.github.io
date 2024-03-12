import React from "react";
import "./portfolio.css";
import TN100D from "../../assets/TN100D Cover.jpg";

const Portfolio = () => {
    //Function to handle mouse click - Portfolio
    const handleRedirectPortfolio = () => {
        window.location.href = "./projects";
    };

    const PortfolioShowcase = ({ style, name }) => {
        return (
            <div className="showcase-wrapper" style={style}>
                <p>{name}</p>
            </div>
        );
    };
    console.log(TN100D);
    return (
        <div className="portfolio-comp-wrapper">
            <div className="portfolio-comp-header">
                <div className="portfolio-comp-text">
                    <p>Let's have a look at</p>
                    <p>
                        My <span style={{ color: "#BBE8F2" }}>Portfolio</span>
                    </p>
                </div>
                <button className="button" onClick={handleRedirectPortfolio}>
                    See All
                </button>
            </div>
            <div className="portfolio-comp-header">
                <PortfolioShowcase style={{ backgroundImage: `url("${TN100D}")` }} name="TN100D" />
                <PortfolioShowcase style={{ backgroundImage: `url("${TN100D}")` }} name="TBD" />
            </div>
        </div>
    );
};

export default Portfolio;
