import React from "react";
import "./About.css";
// import ME from "../../assets/profile-img.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5+ Years of Self Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>3+</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+</small>
            </article>
          </div>

          <div className="about__para">
            <p>
              Hi Everyone, I am <span className="spn">Karan Malviya</span> from{" "}
              <span className="spn">Bhopal, India.</span> I am pursuing BTech in
              Computer Science and Engineering with my major in Web Development
              and React JS Development.
              <br /> <br />A curious tech enthusiast who is eager to create,
              work and learn about the latest technologies and various
              programming languages. I want to be associated with prestigious
              organizations to utilize and enhance my professional skills with
              mutual growth.
            </p>
            <p>
              I'm interested in the whole frontend stack Like trying new things
              and building great projects and build modern-day UI components to
              improvise application performance. I'm an independent freelancer
              and blogger. I love to write blogs and read books. I believe
              everything is an Art when you put your consciousness in it. You
              can connect with me via social links.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
