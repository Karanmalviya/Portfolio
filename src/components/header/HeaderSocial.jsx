import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a
        href="https://linkedin.com/in/karanmalviya1"
        target="_blank"
        rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Karanmalviya"
        target="_blank"
        rel="noopener noreferrer">
        <FaGithub />
      </a>
      {/* <a href="#" target="_blank"></a> */}
    </div>
  );
};

export default HeaderSocial;
