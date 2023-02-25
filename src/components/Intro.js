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

        <footer>
          {/* need to add linking here later */}
          <button>
          Resume
        </button>
        </footer>
      </div>
    )
  }
}
