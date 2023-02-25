import React, { Component } from 'react'
import "../style/about.css"

export default class About extends Component {
  render() {
    return (
      <div id="about">
        <section className="about-title">
            /about me
        </section>
        <section className="about-description">
            <p>
                I'm currently a Computer Science student at the <element className="name">University of British Columbia</element>.
                I'm an aspiring software developer, and am always looking to further my knowledge in the world of full-stack development.

                Currently seeking internships!
            </p>
            <p>
                Outside of school, I love video games, browsing pinterest, and exploring new places to eat with my friends.
            </p>
        </section>
      </div>
    )
  }
}
