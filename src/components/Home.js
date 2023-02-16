import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
import pic from "./images/prathamesh.png";
function Home() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-7 col-lg-7  order-1">
                        <div className="text-box">
                            <h1>
                                Hii, I'm
                                <br />
                                <h1 className="auto-input">
                                    <Typewriter
                                        words={[
                                            "Prathamesh Dixit",
                                            "FullStack Developer",
                                            "React Developer",
                                        ]}
                                        loop={0}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={100}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </h1>
                            </h1>
                            <blockquote class="blockquote">
                                <p>
                                    Sometimes it pays to stay in bed on Monday,
                                    rather than spending the rest of the week
                                    debugging Monday’s code.
                                </p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                <cite title="Source Title">– Dan Salomon</cite>
                            </figcaption>
                            <a
                                className="contact-me"
                                target="_blank"
                                rel="noreferrer"
                                href="https://prathameshndixit.github.io/LiveResume/"
                            >
                                My Resume
                            </a>
                            <a
                                className="my-resume"
                                href="mailto:prathameshdixit1234@gmail.com"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-lg-5 align-self-center myflex">
                        <div className="img-container">
                            <img className="my-img" src={pic}alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
