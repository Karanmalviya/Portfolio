import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/profile-img.png";
import HeaderSocial from "./HeaderSocial";
import Typed from "react-typed";
import { ReactSVG } from "react-svg";
import logo from "../../assets/logo_name2.svg";

const Header = () => {
  return (
    <header id="home">
      <div className="svg-container">
        <a href="#home">
          <ReactSVG src={logo} className="svg__container-logo" />
        </a>
      </div>
      <div className="container header__container">
        <h5 className="header_hello">
          Hello I'm
          <span className="wave">👋🏻</span>
        </h5>

        <h1>Karan Malviya</h1>
        <h5 className="text-light">
          <Typed
            strings={[
              "Full Stack Developer",
              "Frontend Developer",
              "Python Developer",
              "React JS Developer",
            ]}
            typeSpeed={50}
            backSpeed={45}
            loop
          />
        </h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" className="img" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
