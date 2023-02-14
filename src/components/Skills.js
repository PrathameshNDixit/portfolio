import React from "react";
import "./Skills.css";
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJava,
    FaNodeJs,
    FaGithub,
    FaPython,
} from "react-icons/fa";
import { SiMongodb, SiBootstrap, SiExpress, SiMysql } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
function Skills() {
    return (
        <>
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
                <div className="skill-card">
                    <div className="icon">
                        <FaReact size={30} className="ricon" />
                    </div>
                    <div className="skillName">React</div>
                </div>
                <div className="skill-card">
                    <div className="icon">
                        <FaHtml5 size={30} className="ricon" />
                    </div>
                    <div className="skillName">HTML</div>
                </div>
                <div className="skill-card">
                    <div className="icon">
                        <FaCss3Alt size={30} className="ricon" />
                    </div>

                    <div className="skillName">CSS</div>
                </div>
                <div className="skill-card">
                    <div className="icon">
                        <FaJava size={30} className="ricon" />
                    </div>

                    <div className="skillName">Java</div>
                </div>
                <div className="skill-card">
                    <div className="icon">
                        <FaNodeJs size={30} className="ricon" />
                    </div>

                    <div className="skillName">Node.js</div>
                </div>
                <div className="skill-card">
                    <div className="icon">
                        <SiExpress size={30} className="ricon" />
                    </div>

                    <div className="skillName">Express.js</div>
                </div>
                <div className="skill-card">
                    <div className="icon">
                        <FaGithub size={30} className="ricon" />
                    </div>

                    <div className="skillName">GitHUb</div>
                </div>
                <div className="skill-card">
                    <div className="icon">
                        <FaPython size={30} className="ricon" />
                    </div>

                    <div className="skillName">Python</div>
                </div>
                <div className="skill-card">
                    <div className="icon">
                        <SiMongodb size={30} className="ricon" />
                    </div>

                    <div className="skillName">MongoDB</div>
                </div>
                <div className="skill-card">
                    <div className="icon">
                        <SiBootstrap size={30} className="ricon" />
                    </div>

                    <div className="skillName">Bootstrap</div>
                </div>
                <div className="skill-card">
                    <div className="icon">
                        <DiJavascript size={30} className="ricon" />
                    </div>

                    <div className="skillName">Javascript</div>
                </div>
                <div className="skill-card">
                    <div className="icon">
                        <SiMysql size={30} className="ricon" />
                    </div>

                    <div className="skillName">Mysql</div>
                </div>
            </div>
        </>
    );
}

export default Skills;
