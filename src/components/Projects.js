import React, { Component } from 'react'
import "../style/Projects.css"
import ProjectCard from './ProjectCard'

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

        <div className='projects-displaygrid'>
                        {Object.keys(projects).map((key, value) => (
                            <div className='"project-card'>
                              <ProjectCard
                              title={key}
                              description={projects[key]["description"]}
                              tech={projects[key]["tech"]}></ProjectCard>

                        </div>
                        ))}
        </div>

      </div>
    )
  }
}
