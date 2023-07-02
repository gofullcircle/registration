import React from "react"
import { Link, useNavigate } from "react-router-dom"

import Logo from "../Logo/Logo"
import "./MoreInfo.css"

export default function MoreInfo() {
  const navigate = useNavigate()
  return (
    <div className="MoreInfo">
      <header></header>
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-none d-md-inline">
            <Logo display="block" />
          </div>
          <div className="col-md-8">
            <div className="course-description">
              <div className="title-container d-flex">
                <Logo display="inline" breakpoint="md" />
                <h1 className="course-title m-auto p-3">Go Full Circle 2023</h1>
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

              <p>
                Engage in riveting 75-minute interactive sessions, where you'll
                dive deep into the cutting-edge theories and practical insights
                of the circular economy through captivating real-life case
                studies. Then, armed with this newfound wisdom, you'll spend the
                following weeks applying these concepts to real-world scenarios,
                ensuring a comprehensive and hands-on learning experience.
              </p>

              <p>Reasons to Choose This Course:</p>

              <p>
                Ignite Innovation: Discover exciting opportunities to create
                value and master the tools needed to successfully implement them
                within your business.
              </p>

              <p>
                Power of Connection: Forge invaluable connections with
                like-minded businesses and local councils, forming a supportive
                network that amplifies your journey towards circularity.
              </p>

              <p>
                Collaborative Transformation: Gain access to collaborative
                environments where you can apply circular design tools to your
                own business, unraveling fresh perspectives and unlocking
                untapped potential.
              </p>

              <p>
                Thrive Economically: Experience substantial cost savings through
                waste reduction, while attracting and retaining customers who
                appreciate your commitment to minimising waste.
              </p>

              <p>
                Attract Top Talent: Showcase your dedication to sustainability,
                attracting and retaining exceptional staff members who align
                with your green values.
              </p>

              <p>
                Eco-Partnerships: Open doors to new 'green' business
                partnerships and complementary ventures eager to join forces
                with environmentally conscious enterprises.
              </p>

              <p>
                Future-Proof Your Success: Safeguard your supply chains and
                fortify your business's resilience in the face of ever-changing
                market dynamics.
              </p>

              <p>
                Join us in reshaping the future of business, as we empower you
                to embrace the circular economy and propel your company to
                extraordinary heights. Enrol in the Go Full Circle program today
                and unlock boundless possibilities for a brighter, sustainable
                tomorrow!"
              </p>
            </div>

            <div className="actions">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/signup")}
              >
                Register now
              </button>
              <Link to="/" className="homepage-link m-3">
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
