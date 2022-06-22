import React from "react";
import "./Service.css";
import { BiCheck } from "react-icons/bi";
const Service = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services </h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Fast Experience</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsiveness</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Easy to Use</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVLOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Better Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Reusability</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Component Based Programming</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Fullfill Expectation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>RDBMS</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Friendly</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lastest</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Well Structured</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Industry Related Topics</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Research</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data analysis</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Service;
