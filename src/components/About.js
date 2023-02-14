import React from "react";
import "./About.css";
function About() {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <div className="about">
                "Hi there, my name is Prathamesh Dixit! I'm a student with a
                passion for web development, particularly the MERN stack. When
                I'm not hitting the books, I love to code, read, and watch
                cricket. I'm always striving to learn new things and stay
                up-to-date with the latest web development trends and
                technologies😁.
            </div>
            <div className="about">
                {" "}
                As a budding web developer, I enjoy building websites and web
                applications that are intuitive, user-friendly, and
                aesthetically pleasing. I believe that web development is both
                an art and a science, and I love the challenge of creating
                something that not only functions well, but also looks great.😍
            </div>{" "}
            <div className="about">
                👽So whether you're a fellow student, a small business owner, or
                anyone in between, I'm excited to collaborate with you on your
                next web development project. Let's create something amazing
                together!"
            </div>
        </div>
    );
}

export default About;
