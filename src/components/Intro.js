import React, { Component } from 'react'
import "../style/intro.css"

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

        <button>
          Resume
        </button>
        <footer>
          {/* need to add linking here later */}
        </footer>
      </div>
    )
  }
}
