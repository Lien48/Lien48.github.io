import React from "react";
import "./story.css";
import "animate.css";
//CSS animation library sourced from
//https://animate.style/
import Timeline from "../../assets/Timeline.png";

const Story = () => {
    return (
        <div className="story-comp-wrapper">
            <h1>
                What's <span id="story-title">My Story</span>
            </h1>
            <div className="story-timeline-wrapper">
                {/*Left column denoting employment history */}
                <div className="story-timeline-column">
                    <div className="story-timeline-textbox">
                        <h2>The Next Pivot</h2>
                        <p>2024 - Present</p>
                    </div>
                    <div className="story-timeline-textbox">
                        <h2>Sagen</h2>
                        <p>2021 - 2024</p>
                    </div>
                    <div className="story-timeline-textbox">
                        <h2>KPMG</h2>
                        <p>2017 - 2021</p>
                    </div>
                </div>

                {/*Middle column for timeline image*/}
                <div className="story-timeline-column">
                    <img src={Timeline} alt="Dotted lines with circles to denote a timeline" />
                </div>

                {/*Right column for employment description*/}
                <div className="story-timeline-column">
                    <div className="story-timeline-textbox">
                        <h2>Founder</h2>
                        <p>No code Developer</p>
                    </div>
                    <div className="story-timeline-textbox">
                        <h2>Director, Investments Accounting and Operations</h2>
                        <p>
                            Subject matter expert for investments accounting. Managed full
                            accounting cycle and led team of six.{" "}
                        </p>
                    </div>
                    <div className="story-timeline-textbox">
                        <h2>Senior Accountant</h2>
                        <p>Audit</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;
