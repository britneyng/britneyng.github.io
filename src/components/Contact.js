import React, { Component } from 'react'
import "../style/Contact.css"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import email from "../images/email.png"

export default class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <section className='contact-title'>
            /contact
        </section>
        <section className='contact-description'>
            If you're interested in connecting with me, you can find me here:
        </section>

        <div className='contact-links'>
          <a href="https://github.com/britneyng" target="_blank">
          <img src={github} alt="github-icon" className="contact-icon"></img>
          </a>
          <a href="https://www.linkedin.com/in/britneyng/" target="_blank">
          <img src={linkedin} alt="linkedin-icon" className="contact-icon"></img>
          </a>
          <a href="mailto:britneyng1@gmail.com" target="_blank">
          <img src={email} alt="email-icon" className="contact-icon"></img>
          </a>
        </div>
    </div>
    )
  }
}
