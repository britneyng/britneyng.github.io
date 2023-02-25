import React, { Component } from 'react'
import "../style/Projects.css"
import ProjectCard from './ProjectCard'

const projects = {
    "Schedulii": {
        description: "A calendar application that collates Google Calendar availability for a group of users, and finds the best time to meet.An application that allows for easy storage and management of an ever-growing list of personal recipes.",
        tech: "Go, Typescript, React, PostgreSQL, Github Actions, Docker",
        link: "https://github.com/lourw/schedulii"
    },
    "PomoPet": {
      description: "A Hackathon Project.",
      tech: "Javascript, HTML, CSS",
      link: "https://github.com/britneyng/pomo"
  },
    "MyRecipeBuddy": {
      description: "An application that allows for easy storage and management of an ever-growing list of personal recipes.",
      tech: "Java, Swing, JUnit",
      link: "https://github.com/britneyng/recipebook"
  },
    "This website": {
      description: "An application that allows for easy storage and management of an ever-growing list of personal recipes.",
      tech: "React, HTML, CSS, Javascript",
      link: "https://github.com/britneyng/recipebook"
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
                              tech={projects[key]["tech"]}
                              link={projects[key]["link"]}>

                              </ProjectCard>
                            </div>
          ))}
        </div>

      </div>
    )
  }
}
