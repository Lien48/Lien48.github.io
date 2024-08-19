import React from "react";
import "./story.css";
import "animate.css";
//CSS animation library sourced from
//https://animate.style/
import Timeline from "../../assets/Portfolio Timeline.png";

//Bubble call outs regarding skills
const BubbleCallOuts = () => {
    const skills = [
        "Chartered Professional Accountant",
        "No-Code Developer",
        "UI/UX",
        "Front-End Web Development",
    ];

    return (
        <div className={"bubbleCallout-comp-wrapper"}>
            {skills.map((content) => (
                <p>{content}</p>
            ))}
        </div>
    );
};

const Story = () => {
    return (
        <div className="story-comp-wrapper" id="experienceLink">
            <h1>
                What's <span id="story-title">My Story</span>
            </h1>
            <div className="story-timeline-wrapper-outer">
                <BubbleCallOuts />
                <div className="story-timeline-wrapper-inner">
                    {/*Left column denoting employment history */}
                    <div className="story-timeline-column">
                        <div className="story-timeline-textbox" id="text-align_left">
                            <h2>Trufflow</h2>
                            <p>2024 - Present</p>
                        </div>
                        <div className="story-timeline-textbox" id="text-align_left">
                            <h2>The Next Pivot</h2>
                            <p>2024 - Present</p>
                        </div>
                        <div className="story-timeline-textbox" id="text-align_left">
                            <h2>Sagen</h2>
                            <p>2021 - 2024</p>
                        </div>
                        <div className="story-timeline-textbox" id="text-align_left">
                            <h2>KPMG</h2>
                            <p>2017 - 2021</p>
                        </div>
                    </div>

                    {/*Middle column for timeline image*/}
                    <div className="story-timeline-column">
                        <img src={Timeline} alt="Dotted lines with circles to denote a timeline" />
                    </div>

                    {/*Right column for employment description*/}
                    <div className="story-timeline-column" id="rightColumn">
                        <div className="story-timeline-textbox">
                            <h2>Founder</h2>
                            <p className="story-timeline-textbox-subheading">
                                Building micro-SaaS solutions using no code.
                            </p>
                            <ul id="rocketshipBulletPoints">
                                <li>
                                    Building{" "}
                                    <b>
                                        <a
                                            href="https://thenext100days.app"
                                            target="_blank"
                                            rel="noreferrer">
                                            The Next 100 Days
                                        </a>
                                    </b>{" "}
                                    to promote habit formation and mental wellness.
                                </li>
                            </ul>
                        </div>
                        <div className="story-timeline-textbox">
                            <h2>Founder</h2>
                            <p className="story-timeline-textbox-subheading">
                                Building micro-SaaS solutions using no code.
                            </p>
                            <ul id="rocketshipBulletPoints">
                                <li>
                                    Building{" "}
                                    <b>
                                        <a
                                            href="https://thenext100days.app"
                                            target="_blank"
                                            rel="noreferrer">
                                            The Next 100 Days
                                        </a>
                                    </b>{" "}
                                    to promote habit formation and mental wellness.
                                </li>
                            </ul>
                        </div>
                        <div className="story-timeline-textbox">
                            <h2>Director, Investments Accounting and Operations</h2>
                            <p className="story-timeline-textbox-subheading">
                                Subject matter expert for investments and derivatives accounting.
                            </p>
                            <ul id="brainBulletPoints">
                                <li>Technical accounting expert and financial leader.</li>
                            </ul>
                        </div>
                        <div className="story-timeline-textbox">
                            <h2>Senior Accountant</h2>
                            <p className="story-timeline-textbox-subheading">
                                Audit of publicly traded companies.
                            </p>
                            <ul id="checkmarkBulletPoints">
                                <li>
                                    Audit professional for financial audits of public corporations
                                    in relation to GAAP standard.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;
