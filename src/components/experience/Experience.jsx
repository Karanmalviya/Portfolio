import React from "react";
import "./Experience.css";
import { BsFillBootstrapFill, BsGithub } from "react-icons/bs";
import { DiCss3, DiJavascript1, DiLinux } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillHtml5, AiOutlineCopyrightCircle } from "react-icons//ai";
import { FaReact, FaGitAlt, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiOracle, SiPython } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { CgCPlusPlus } from "react-icons/cg";
const data_frontend = [
  {
    id: 1,
    technology_name: "HTML",
    icons: <AiFillHtml5 />,
  },
  { id: 2, technology_name: "CSS", icons: <DiCss3 /> },
  {
    id: 3,
    technology_name: "React JS",
    icons: <FaReact />,
  },
  {
    id: 4,
    technology_name: "Next JS",
    icons: <TbBrandNextjs />,
  },
  {
    id: 5,
    technology_name: "Tailwind",
    icons: <SiTailwindcss />,
  },
  {
    id: 6,
    technology_name: "Bootstrap",
    icons: <BsFillBootstrapFill />,
  },
  {
    id: 7,
    technology_name: "JavaScript",
    icons: <DiJavascript1 />,
  },
];

const data_backend = [
  {
    id: 1,
    technology_name: "Django",
    icons: <SiDjango />,
  },
  {
    id: 2,
    technology_name: "Node JS",
    icons: <IoLogoNodejs />,
  },
  {
    id: 3,
    technology_name: "Oracle",
    icons: <SiOracle />,
  },
];

const data_languages = [
  {
    id: 1,
    technology_name: "C",
    icons: <AiOutlineCopyrightCircle />,
  },
  {
    id: 2,
    technology_name: "C++",
    icons: <CgCPlusPlus />,
  },
  {
    id: 3,
    technology_name: "Python",
    icons: <SiPython />,
  },
  { id: 4, technology_name: "JavaScript", icons: <DiJavascript1 /> },
  { id: 5, technology_name: "Java", icons: <FaJava /> },
];

const data_technicals = [
  {
    id: 1,
    technology_name: "Git",
    icons: <FaGitAlt />,
  },
  {
    id: 2,
    technology_name: "GitHub",
    icons: <BsGithub />,
  },
  {
    id: 3,
    technology_name: "Linux",
    icons: <DiLinux />,
  },
];
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience </h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Devlopment</h3>
          <div className="experience__content">
            {data_frontend.map(
              ({ id, technology_name, experience__details, icons }) => {
                return (
                  <article className="experience__details" key={id}>
                    <div className="experience__details-icon"> {icons} </div>
                    <div>
                      <h4>{technology_name}</h4>
                      <small className="text-light">
                        {experience__details}
                      </small>
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Devlopment</h3>
          <div className="experience__content">
            {data_backend.map(
              ({ id, technology_name, experience__details, icons }) => {
                return (
                  <article className="experience__details" key={id}>
                    <div className="experience__details-icon"> {icons} </div>
                    <div>
                      <h4>{technology_name}</h4>
                      <small className="text-light">
                        {experience__details}
                      </small>
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Programming Languages</h3>
          <div className="experience__content">
            {data_languages.map(
              ({ id, technology_name, experience__details, icons }) => {
                return (
                  <article className="experience__details" key={id}>
                    <div className="experience__details-icon"> {icons} </div>
                    <div>
                      <h4>{technology_name}</h4>
                      <small className="text-light">
                        {experience__details}
                      </small>
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Technical Skills</h3>
          <div className="experience__content">
            {data_technicals.map(
              ({ id, technology_name, experience__details, icons }) => {
                return (
                  <article className="experience__details" key={id}>
                    <div className="experience__details-icon"> {icons} </div>
                    <div>
                      <h4>{technology_name}</h4>
                      <small className="text-light">
                        {experience__details}
                      </small>
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
