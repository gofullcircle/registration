// import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import "./Success.css"

export default function Success() {
  return (
    <div className="Success">
      <header></header>
      <div className="container">
        <div className="success-message mt-5">
          <h1>Success!</h1>
          <p>
            Thank you for applying to participate in the Go Full Circle 2023
            program, which is a partnered program between the City of Melbourne,
            City of Boroondara and City of Stonnington, supported by{" "}
            <a href="http://www.cirquedusoil.com.au/">Cirque du Soil</a>. Please
            note that places are limited; The Go Full Circle team will notify
            you of the outcome of your application.
          </p>
          <p>
            If you haven’t signed up already, we highly recommend that you
            attend the 75 min virtual information session on{" "}
            <b>Wed 2nd August 2023</b> from{" "}
            <b>3:00pm to 4:15pm</b> via zoom. Join us to learn more about the
            circular economy and how Go Full Circle will support you to apply it
            to your business.
          </p>
          <div className="event-link">
            <p>
              <b>Click the button below to register:</b>
            </p>
            <a
              className="btn btn-primary"
              id="event-link-button"
              target="_blank"
              rel="noreferrer"
              href="https://events.humanitix.com/go-full-circle-2023-virtual-information-session"
            >
              Go Full Circle Virtual Info Session
            </a>
          </div>
          <br />
          <br />
          <br />
          <b>WHAT PAST PARTICIPANTS HAVE SAID ABOUT GO FULL CIRCLE:</b>
          <i>
            <blockquote>
              “We joined Go Full Circle to understand what circular economy best
              practices are, as well as hear and share what other businesses are
              focusing on.”
            </blockquote>
            <blockquote>
              “Go Full Circle gave us the opportunity for growth and
              networking.”
            </blockquote>
            <blockquote>
              “This program posed an opportunity for us to engage with experts
              in the Circular Economy field, build relationships with fellow
              businesses and speak directly to representatives of local
              government. It felt like a safe and constructive place to discuss
              our challenges.”
            </blockquote>
            <blockquote>
              “Awesome to meet other participants and network and also great to
              see and chat with speakers. Have already created so many more
              exponential actions and learnings and feel inspired that we can
              all make a difference.”
            </blockquote>
          </i>
          <br />
          <p>We look forward to meeting you soon!</p>

          <p>The Go Full Circle Team</p>
          <br />
          <br />
          <Link className="btn btn-outline-primary" id="home-link" to="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}
