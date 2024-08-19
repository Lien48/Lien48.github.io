import React from "react";
import Hero from "../../components/hero/hero";
import Portfolio from "../../components/portfolio/portfolio";
import Story from "../../components/story/story";
import About from "../../components/about/about";

const Home = () => {
    return (
        // Navigation component goes here from the Root component
        <body>
            <Hero />
            <Portfolio />
            <Story />
            <About />
        </body>
    );
};

export default Home;
