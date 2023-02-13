import React from "react";
import Typewriter from "typewriter-effect";
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
                                I'm{" "}
                                <h1 className="auto-input">
                                    <Typewriter
                                        onInit={(t) => {
                                            t.changeDelay(200)
                                                .typeString("Prathamesh Dixit")
                                                .pauseFor(2000)
                                                .changeDelay(205)
                                                .deleteAll()
                                                .typeString("Web Developer")
                                                .pauseFor(2000)
                                                .changeDelay(210)
                                                .deleteAll()
                                                .typeString(
                                                    "in Love with Coding"
                                                )
                                                .pauseFor(2000)
                                                .deleteAll()
                                                .typeString("Prathamesh Dixit")
                                                .pauseFor(2000)
                                                .changeDelay(225)
                                                .deleteAll()
                                                .typeString("Web Developer")
                                                .pauseFor(2000)
                                                .changeDelay(250)
                                                .deleteAll()
                                                .typeString("Prathamesh Dixit")
                                                .start();
                                        }}
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
                        <img className="my-img" src={pic} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
