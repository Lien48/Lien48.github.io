import "./about.css";
import Lien from "../../assets/Lien.jpg";

const About = () => {
    return (
        <div className="wrapper" id="aboutLink">
            <div className="contentWrapper">
                {/*Left column - Image */}
                <figure>
                    <img src={Lien} alt="Lien Chueh" />
                </figure>
                {/*Right column - Details */}
                <div className="contentDetails">
                    <h1>Lien Chueh</h1>
                    <p>
                        My name is Lien (he/him) and my professional background is in finance,
                        specifically in areas of accounting, audit, and financial planning and
                        analysis. I am also a Chartered Professional Accountant (CPA) and am a
                        registered member with CPA Canada.{" "}
                    </p>
                    <h4>What keeps me busy:</h4>
                    <ul>
                        <li>
                            No-code/low code enthusiast. Currently building{" "}
                            <a href="https://thenext100days.app/" target="_blank" rel="noreferrer">
                                The Next 100 Days
                            </a>{" "}
                            on{" "}
                            <a href="https://bubble.io/" target="_blank" rel="noreferrer">
                                Bubble
                            </a>
                            .
                        </li>
                        <li id="sparklesBulletPoints">
                            Hobbyist web developer - Javascript, React
                        </li>
                        <li id="balloonBulletPoints">
                            I run a{" "}
                            <a
                                href="https://theballoonandyou.com/home"
                                target="_blank"
                                rel="noreferrer">
                                balloon arrangement business
                            </a>{" "}
                            with my family on the side.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
