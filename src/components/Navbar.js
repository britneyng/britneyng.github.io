import React, { Component } from 'react'
import "../style/navbar.css"

export default class navbar extends Component {
  render() {
    return (
    <div id="navbar">
         <section className="navbar-links">
            <ul>
                <li><a href="#about"> &lt;about&gt; </a></li>
                <li><a href="#projects">  &lt;projects&gt; </a></li>
                <li><a href="#contact">  &lt;contact&gt; </a></li>
            </ul>
        </section>
    </div>

    )
  }
}
