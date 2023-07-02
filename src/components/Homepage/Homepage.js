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
                <h1 className="h1 course-title m-auto p-3">
                  Go Full Circle 2023
                </h1>
              </div>
              <p>
                Introducing the Go Full Circle program, a tailor-made program
                for local businesses to revolutionise their operations and
                unlock environmental, social and financial advantages. <br />
                <br />
                Embark on an eight-week journey that will equip you with the
                knowledge, tools, and network to thrive in the circular economy.
                Our immersive virtual course, divided into four dynamic modules,
                will kick-start your business's transformation, to take you
                beyond just “sustainability”. <br />
                <br />
                Engage with a new community of likeminded people through 4
                interactive sessions, where you'll dive deep into the theories,
                tools and practical insights of the circular economy through
                local, practical real-life case studies. Then, armed with this
                newfound wisdom, you'll spend the following weeks at your own
                pace applying these concepts to your business, how to create
                your own network of support, with shared peer to peer learning,
                ensuring you walk away with a strategy, hands-on learning
                experience and a community of like minded businesses to support
                you into the future.
              </p>

              <div className="actions">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/signup")}
                >
                  Register now
                </button>
                <Link to="/info" className="readmore-link m-3">
                  Read more...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
