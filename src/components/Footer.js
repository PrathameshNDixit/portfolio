import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "./Footer.css";
function Footer() {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/prathamesh-dixit-440072200/">
                <FaLinkedin size={25} className="footer-icon" />
            </a>
            <a href="https://www.instagram.com/prathamesh1903/">
                <FaInstagram size={25} className="footer-icon" />
            </a>
            <a href="https://github.com/PrathameshNDixit">
                <FaGithub size={25} className="footer-icon" />
            </a>
        </div>
    );
}

export default Footer;
