import React, { Component } from 'react'
import "../style/Projects.css"

const projects = {
    "Schedulii": {
        description: "A calendar application that collates Google Calendar availability for a group of users, and finds the best time to meet.",
        tech: "Go, Typescript, React, PostgreSQL, Github Actions, Docker"
    },
    "PomoPet": {
      description: "A Hackathon Project.",
      tech: "Javascript, HTML, CSS"
  },
    "MyRecipeBuddy": {
      description: "An application that allows for easy storage and management of an ever-growing list of personal recipes.",
      tech: "Java, Swing, JUnit"
  }
}


export default class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <section className='projects-title'>
            /projects
        </section>


        <section className='projects-description'>
            <p>
            Here are some projects that I've worked on in the past:
            </p>
            </section>

        <div>
        <ul className='projects-displaygrid'>
                        {Object.keys(projects).map((key, value) => (
                            <li className='"projects-card'>
                            <div className='card-name'>{key}</div>
                            <div className='card-description'>{projects[key]["description"]}</div>
                            <div className='card-tech'>{projects[key]["tech"]}</div>
                        </li>
                        ))}
                    </ul>
        </div>

      </div>
    )
  }
}
