import React from "react"
import { Link, useNavigate } from "react-router-dom"

import Logo from "../Logo/Logo"
import "./Homepage.css"

export default function Homepage() {
  const navigate = useNavigate()
  return (
    <div className="Homepage">
      <header></header>
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-none d-md-inline">
            <Logo display={"block"} />
          </div>
          <div className="col-md-8">
            <div className="course-description">
              <div className="title-container d-flex">
                <Logo display={"inline"} breakpoint={"md"} />
                <h1 className="h1 course-title m-auto p-3">Go Full Circle 2023</h1>
              </div>
              <b>
                Unleash the Power of Circular Economy: Transform Your Business
                for Success!
              </b>

              <p>
                Introducing the Go Full Circle program, a game-changing
                opportunity for local businesses to revolutionise their
                operations and unlock unparalleled financial, environmental, and
                social advantages.
              </p>

              <p>
                Embark on an exhilarating eight-week journey that will equip you
                with the knowledge, tools, and network to thrive in the circular
                economy. Our immersive virtual course, divided into four dynamic
                modules, will ignite your business's transformation like never
                before.
              </p>

              <div className="actions">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/signup")}
                >
                  Register now
                </button>
                <Link to="/info" className="readmore-link m-3">Read more...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
