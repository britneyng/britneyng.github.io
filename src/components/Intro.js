import React, { Component } from 'react'
import "../style/Intro.css"
import arrow from "../images/down-scroll.png"
import resume from "../images/resume.pdf"
import TypewriterComponent from 'typewriter-effect'

export default class Intro extends Component {
  render() {
    return (
      <div id="intro">
        <section className="intro-title">
          hi there, i'm <element className="name">britney.</element>
        </section>

        <section className="intro-subtitle">
            welcome to my personal website!
        </section>

        <a href={resume} target="_blank">
          <button>
          Resume
        </button>
        </a>

        <footer>
          <a href="#about">
          <img src={arrow} alt="scroll-arrow" id="scroll-arrow"></img>
          </a>
        </footer>
      </div>
    )
  }
}
