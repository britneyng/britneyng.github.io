import React from 'react'
import "../style/ProjectCard.css"

function ProjectCard (props) {
    return (
      <>
        <section className="card-container">
        <element className="card-title">{props.title}</element>
        <element className="card-description">{props.description}</element>
        <element className="card-tech">{props.tech}</element>
        </section>
      </>
    )
}

export default ProjectCard;
