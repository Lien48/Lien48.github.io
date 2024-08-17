import React from "react";
import Hero from "../../components/hero/hero";
import Portfolio from "../../components/portfolio/portfolio";
import Story from "../../components/story/story";

const Home = () => {
    return (
        // Navigation component goes here from the Root component
        <body>
            <Hero />
            <Portfolio />
            <Story />
        </body>
    );
};

export default Home;
