import React from "react";
import crypto from "./images/crypto.png";
import notes from "./images/notes.png";
import store from "./images/store.png";
import "./Projects.css";
function Projects() {
    return (
        <>
            <h1 className="heading">Projects</h1>
            <div className="project-container">
                <div className="project">
                    <img src={crypto} alt="" />
                    <div className="content">
                        {" "}
                        <h2>Crypto converter</h2>
                        <p>
                            Introducing Crypto Converter, a web application
                            built with React and API integration to provide
                            real-time cryptocurrency exchange rates. With Crypto
                            Converter, users can easily convert their favorite
                            digital currencies to any other supported currency
                            with just a few clicks.
                        </p>
                        <div className="project-link">
                            <a
                                target="_blank"
                                href="https://golden-panda-ff1f0e.netlify.app/"
                            >
                                Live Project
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={store} alt="" />
                    <div className="content">
                        {" "}
                        <h2>Web store using React</h2>
                        <p>
                            It is a Web Application where users can dynamically
                            add, delete and search for notes It uses different
                            react components CSS3 is used for styling
                        </p>
                        <div className="project-link">
                            <a
                                target="_blank"
                                href="https://scintillating-madeleine-3a2ecd.netlify.app/"
                            >
                                Live Project
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={notes} alt="" />
                    <div className="content">
                        {" "}
                        <h2>Notes App</h2>
                        <p>
                            Introducing Notes App, a user-friendly web
                            application built with React and React Hooks that
                            makes it easy to create and manage your notes. With
                            a sleek and intuitive interface, Notes App allows
                            you to quickly jot down your thoughts and ideas,
                            organize them
                        </p>
                        <div className="project-link">
                            <a
                                target="_blank"
                                href="https://deluxe-medovik-c39d8b.netlify.app/"
                            >
                                Live Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
