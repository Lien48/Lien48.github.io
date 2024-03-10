import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  //Function to handle mouse click - Portfolio
  const handleRedirectPortfolio = () => {
    window.location.href = "./projects";
  };

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
    </div>
  );
};

export default Portfolio;
