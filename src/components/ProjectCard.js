import React from "react";
import "../style/ProjectCard.css";
import logo from "../images/github.png";

function ProjectCard(props) {
  return (
    <>
      <section className="card-container">
        <a target="_blank" href={props.link}>
          <img src={logo} alt="github" id="github-icon"></img>
        </a>
        <element className="card-title">{props.title}</element>
        <element className="card-description">{props.description}</element>
        <element className="card-tech">{props.tech}</element>
      </section>
    </>
  );
}

export default ProjectCard;
