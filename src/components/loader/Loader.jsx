import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <>
      <div >
        <div class="loader">
          <div class="circles">
            <span class="one"></span>
            <span class="two"></span>
            <span class="three"></span>
          </div>
          <div class="pacman">
            <span class="top"></span>
            <span class="bottom"></span>
            <span class="left"></span>
            <div class="eye"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
