import React, { Component } from "react";
import "../style/Projects.css";
import ProjectCard from "./ProjectCard";

const projects = {
  Schedulii: {
    description:
      "A calendar application that collates Google Calendar availability for a group of users, and finds the best time to meet.",
    tech: "Go, Typescript, React, PostgreSQL, Github Actions, Docker",
    link: "https://github.com/lourw/schedulii",
  },
  Pomo: {
    description:
      "A pomodoro study app, complete with a virtual pet that motivates and encourages users to keep being productive.",
    tech: "Javascript, HTML, CSS",
    link: "https://github.com/britneyng/pomo",
  },
  RecipeBuddy: {
    description:
      "An application that allows for easy storage and management of an ever-growing list of personal recipes.",
    tech: "Java, Swing, JUnit",
    link: "https://github.com/britneyng/recipebook",
  },
  "This website": {
    description:
      "The website you're on now! Built from scratch with React, this site acts as a personal portfolio for my work.",
    tech: "React, Javascript, HTML, CSS",
    link: "https://github.com/britneyng/personal-website",
  },
};

export default class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <section className="projects-title">/projects</section>

        <section className="projects-description">
          <p>Here are some projects that I've worked on in the past:</p>
        </section>

        <div className="projects-displaygrid">
          {Object.keys(projects).map((key, value) => (
            <div className='"project-card'>
              <ProjectCard
                title={key}
                description={projects[key]["description"]}
                tech={projects[key]["tech"]}
                link={projects[key]["link"]}
              ></ProjectCard>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
