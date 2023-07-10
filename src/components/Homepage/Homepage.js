import React from "react"
import { useNavigate } from "react-router-dom"

import "./Homepage.css"

export default function Homepage() {
  const navigate = useNavigate()
  return (
    <div className="Homepage">
      <header></header>
      <div className="container">
        <div className="row">
          {/* <div className="col-md-4 d-none d-md-inline">
            <Logo display={"block"} />
          </div> */}
          <div className="d-none d-md-block col-md-1 col-lg-2"></div>
          <div className="col-12 col-md-10 col-lg-8">
            <div className="course-description">
              <div className="title-container d-flex">
                {/* <Logo display={"inline"} breakpoint={"md"} /> */}
                <h1 className="h1 course-title m-auto p-3">
                  <b>Go Full Circle 2023</b>
                </h1>
              </div>
              <h2>
                Unleash the Power of the Circular Economy: Adapting Your
                Business for the Future
              </h2>
              <br></br>
              <h3>About the program:</h3>
              <p className="intro-copy justify">
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
                <br />
                <br />
                Each participant will be provided with a one-hour 1 on 1 session
                with a course facilitator to provide additional assistance
                throughout their learning journey. 1 on 1 sessions are available
                in the second half of the course, and will be confirmed on an
                individual basis.
              </p>

              <br></br>

              <h3>Who is this course for?</h3>
              <ul>
                <li>
                  For businesses located in Melbourne, Stonnington or Boroondara
                  Council Area(s)
                </li>
                <li>
                  This course is designed for owners or staff with the ability
                  to implement new practices in their business
                </li>
                <li>
                  It has been designed predominantly for businesses from the
                  hospitality and retail sectors, however we encourage all
                  businesses to apply
                </li>
                <li>
                  This is designed to be an online experience. Participants will
                  need to have a computer or tablet with a microphone and camera
                  that can support Zoom
                </li>
              </ul>

              <br></br>

              <h3>Reasons to do this course:</h3>
              <div className="reason">
                <b className="reason-header">Ignite Innovation</b>
                <p className="reason-text">
                  Discover real and tangible circular opportunities to create
                  value and practice using the tools needed to successfully
                  implement them within your business.
                </p>
              </div>
              <div className="reason">
                <b className="reason-header">Collaborative Transformation</b>
                <p className="reason-text">
                  Collaborate with others and learn how to apply circular design
                  tools to real business environments, revealing fresh
                  perspectives and effective approaches to tackling challenges.
                  Forge connections with like-minded businesses and local
                  councils, forming a supportive network that assists your
                  journey towards circularity.
                </p>
              </div>
              <div className="reason">
                <b className="reason-header">
                  Thrive Economically and Improve Patronage
                </b>
                <p className="reason-text">
                  Explore where and how you can apply substantial cost savings
                  through waste reduction and minimisation, or create new
                  revenue streams, while attracting and retaining customers who
                  value responsible businesses.
                </p>
              </div>
              <div className="reason">
                <b className="reason-header">Attract & Retain Top Talent</b>
                <p className="reason-text">
                  Showcase your dedication to the planet: attract and retain
                  exceptional staff members who take pride in your improved
                  mission for the environment.{" "}
                </p>
              </div>
              <div className="reason">
                <b className="reason-header">Future-Proof Your Success</b>
                <p className="reason-text">
                  Safeguard your supply chains and your business's resilience in
                  the face of ever-changing requirements.
                </p>
              </div>
              <br></br>
              <p className="intro-copy justify">
                Join us in reshaping the future of business, as we empower you
                to embrace the circular economy and propel your company to
                better practices. Apply for the Go Full Circle program today and
                unlock boundless possibilities for a brighter, sustainable
                tomorrow!
              </p>

              <div className="actions">
                <button
                  className="btn btn-primary"
                  id="apply-now-button"
                  onClick={() => navigate("/signup")}
                >
                  Apply now
                </button>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block col-md-1 col-lg-2"></div>
        </div>
      </div>
    </div>
  )
}
