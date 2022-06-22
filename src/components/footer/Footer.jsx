import React from "react";
import "./Footer.css";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { ReactSVG } from "react-svg";
import logo from "../../assets/logo_name.svg";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        <ReactSVG src={logo} className="footer__svg-container" />
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://github.com/Karanmalviya"
          className="github"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/karanmalviya1"
          className="linkedin"
          target="_blank"
          rel="noopener noreferrer">
          <BsLinkedin />
        </a>
        <a
          href="https://www.facebook.com/karan.malviya.7370/"
          className="facebook"
          target="_blank"
          rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/karan26_/"
          className="instagram"
          target="_blank"
          rel="noopener noreferrer">
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/KaranMalviyaa"
          className="twitter"
          target="_blank"
          rel="noopener noreferrer">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Karan Malviya 2022 . All rights reserved</small>
      </div>
      <div className="footer__author">
        <small>Designed & Developed by Karan Malviya</small>
      </div>
    </footer>
  );
};

export default Footer;
