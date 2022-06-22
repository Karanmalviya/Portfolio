import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Coronavirus Tracking System",
    github: "https://github.com/Karanmalviya/Covid_Traker_Application",
    demo: "https://user-images.githubusercontent.com/72023877/165787593-b481847e-09c5-45e3-944e-7a0348c69450.gif",
  },
  {
    id: 2,
    image: IMG2,
    title: "Rythm: The Music Player",
    github: "https://github.com/Karanmalviya/Rythm",
    demo: "#",
  },
  {
    id: 3,
    image: IMG3,
    title: "Spotify Clone",
    github: "https://github.com/Karanmalviya/spotify-clone",
    demo: "#",
  },
  {
    id: 4,
    image: IMG4,
    title: "Todo List",
    github: "https://github.com/Karanmalviya/Todo_list",
    demo: "https://2odo-list.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Mouzikka",
    github: "https://github.com/Karanmalviya/Mouzikka.git",
    demo: "https://user-images.githubusercontent.com/72023877/175067235-4a3a4543-6343-497a-9ea0-0cb847b82cc9.gif",
  },
  {
    id: 6,
    image: IMG6,
    title: "Railway Management System",
    github: "https://github.com/Karanmalviya/Railway-Management-System.git",
    demo: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  rel="noopener noreferrer"
                  target="_blank">
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
