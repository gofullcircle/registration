import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import goalsList from "./goalsList"

import "./Webform.css"

export default function Webform() {
  const navigate = useNavigate()

  function setValueOf(sourceElement, targetElement) {
    // sourceElement is the EVENT from the text input field corresponding to the "other" option
    // targetElement is the "Other" radio/checkbox input button
    var otherButton = document.getElementById(targetElement)
    otherButton.checked = true
    sourceElement.target.classList.remove("inactive")
    otherButton.value = sourceElement.target.value
  }

  function setRequired(element, placeholderText = "") {
    var textInputField = document.getElementById(element)
    textInputField.required = true
    textInputField.classList.remove("inactive")
    if (!textInputField.value) {
      textInputField.placeholder = placeholderText
    }
  }

  function removeRequired(element) {
    var freeTextOption = document.getElementById(element)
    freeTextOption.classList.add("inactive")
    if (freeTextOption.required === true) {
      freeTextOption.required = false
      freeTextOption.placeholder = ""
    }
  }

  useEffect(() => {
    const form = document.getElementById("gfc-form")
    form.addEventListener("submit", function (e) {
      e.preventDefault()
      document.getElementById("submit-button").disabled = true
      const data = new FormData(form)
      const action = e.target.action
      fetch(action, {
        method: "POST",
        body: data,
      })
        .then(() => {
          navigate("/success")
        })
        .catch((error) => {
          console.log(error)
          navigate("/error")
        })
    })
  }, [navigate])

  return (
    <div className="Webform">
      <header></header>

      <div className="form-content container">
        <h1 className="h1 m-3 mb-5">
          Register your interest in the Go Full Circle 2023 course
        </h1>
        <form
          className="gfc-form col-lg-10 col-xlg-8 m-auto"
          id="gfc-form"
          method="POST"
          action="https://script.google.com/macros/s/AKfycbyhtjwCStAprSdNmNKrz97ohws3h78qpmXU8kS8JWdqYqKFdBvRW9qAzGESDTNGVjjNgw/exec?authuser=0"
        >
          <div className="my-details form-section m-3 mb-5">
            <div className="section-header">
              <h3 className="section-title">My contact details</h3>
            </div>
            <div className="questions-container">
              <div className="question short-text mb-3">
                <label className="prompt short-text-prompt" htmlFor="FirstName">
                  First name
                </label>
                <input
                  required
                  autoComplete="given-name"
                  id="FirstName"
                  name="FirstName"
                  type="text"
                  placeholder="First name"
                  className="input-field text-input-field"
                />
              </div>

              <div className="question short-text mb-3">
                <label className="prompt short-text-prompt" htmlFor="LastName">
                  Last name
                </label>
                <input
                  required
                  autoComplete="family-name"
                  id="LastName"
                  name="LastName"
                  type="text"
                  placeholder="Last name"
                  className="input-field text-input-field"
                />
              </div>

              <div className="question short-text mb-3">
                <label className="prompt short-text-prompt" htmlFor="Phone">
                  Phone
                </label>
                <input
                  required
                  autoComplete="tel-national"
                  id="Phone"
                  name="Phone"
                  type="text"
                  placeholder="Phone number"
                  className="input-field text-input-field"
                />
              </div>

              <div className="question short-text mb-3">
                <label className="prompt short-text-prompt" htmlFor="Email">
                  Email
                </label>
                <input
                  required
                  autoComplete="email"
                  id="Email"
                  name="Email"
                  type="email"
                  placeholder="your@email.address"
                  className="input-field text-input-field"
                />
              </div>
            </div>
          </div>

          <div className="my-business-details form-section m-3 mb-5">
            <div className="section-header">
              <h3 className="section-title">My business</h3>
            </div>
            <div className="questions-container">
              <div className="question short-text mb-3">
                <label
                  className="prompt short-text-prompt"
                  htmlFor="BusinessName"
                >
                  Business name
                </label>
                <input
                  required
                  autoComplete="organization"
                  id="BusinessName"
                  name="BusinessName"
                  type="text"
                  placeholder="Business name"
                  className="input-field text-input-field"
                />
              </div>

              <div className="question short-text mb-3">
                <label className="prompt short-text-prompt" htmlFor="Position">
                  Your role in this business
                </label>
                <input
                  required
                  autoComplete="organization-title"
                  id="Position"
                  name="Position"
                  type="text"
                  placeholder="Position or role"
                  className="input-field text-input-field"
                />
              </div>

              <div className="question one-choice-with-other mb-3">
                <fieldset>
                  <legend className="prompt multi-choice-prompt">
                    Business type
                  </legend>

                  <div className="option-label-pair">
                    <input
                      required
                      type="radio"
                      name="BusinessType"
                      id="Retail"
                      value="Retail"
                      onClick={() => removeRequired("inputOtherBusinessType")}
                    />
                    <label htmlFor="Retail">Retail</label>
                  </div>
                  <div className="option-label-pair">
                    <input
                      required
                      type="radio"
                      name="BusinessType"
                      id="Hospitality"
                      value="Hospitality"
                      onClick={() => removeRequired("inputOtherBusinessType")}
                    />
                    <label htmlFor="Hospitality">Hospitality</label>
                  </div>
                  <div className="option-label-othertext">
                    <input
                      // this element's `value` will be set by the text input below
                      required
                      type="radio"
                      name="BusinessType"
                      id="OtherBusinessType"
                      onClick={() =>
                        setRequired("inputOtherBusinessType", "Please specify")
                      }
                    />
                    <label htmlFor="OtherBusinessType">Other sector</label>
                    <input
                      // this text input sets the `value` of the "Other" radio button
                      id="inputOtherBusinessType"
                      className="inactive"
                      type="text"
                      title="Please describe your business type"
                      name="BusinessType"
                      onChange={(e) =>
                        setValueOf(e, "OtherBusinessType", "Please specify")
                      }
                    />
                  </div>
                </fieldset>
              </div>

              <div className="question one-choice mb-3">
                <fieldset>
                  <legend className="prompt multi-choice-prompt">
                    Number of employees
                  </legend>

                  <div className="option-label-pair">
                    <input
                      required
                      type="radio"
                      name="BusinessSize"
                      id="1-5"
                      value="1-5"
                    />
                    <label htmlFor="1-5">1-5</label>
                  </div>
                  <div className="option-label-pair">
                    <input
                      required
                      type="radio"
                      name="BusinessSize"
                      id="6-10"
                      value="6-10"
                    />
                    <label htmlFor="6-10">6-10</label>
                  </div>
                  <div className="option-label-pair">
                    <input
                      required
                      type="radio"
                      name="BusinessSize"
                      id="11+"
                      value="11+"
                    />
                    <label htmlFor="11+">11+</label>
                  </div>
                </fieldset>
              </div>

              <div className="question one-choice-with-other mb-3">
                <fieldset>
                  <legend className="prompt multi-choice-prompt">
                    Business location (LGA)
                  </legend>

                  <div className="option-label-pair">
                    <input
                      required
                      type="radio"
                      name="LGA"
                      id="Boroondara"
                      value="Boroondara"
                      onClick={() => removeRequired("inputOtherLGA")}
                    />
                    <label htmlFor="Boroondara">City of Boroondara LGA</label>
                  </div>
                  <div className="option-label-pair">
                    <input
                      required
                      type="radio"
                      name="LGA"
                      id="Melbourne"
                      value="Melbourne"
                      onClick={() => removeRequired("inputOtherLGA")}
                    />
                    <label htmlFor="Melbourne">City of Melbourne LGA</label>
                  </div>
                  <div className="option-label-pair">
                    <input
                      required
                      type="radio"
                      name="LGA"
                      id="Stonnington"
                      value="Stonnington"
                      onClick={() => removeRequired("inputOtherLGA")}
                    />
                    <label htmlFor="Stonnington">City of Stonnington LGA</label>
                  </div>
                  <div className="option-label-othertext">
                    <input
                      // this element's `value` will be set by the text input below
                      required
                      type="radio"
                      name="LGA"
                      id="otherLGA"
                      onClick={() =>
                        setRequired("inputOtherLGA", "Please specify")
                      }
                    />
                    <label htmlFor="otherLGA">Other area</label>
                    <input
                      // this text input sets the `value` of the "Other" radio button
                      id="inputOtherLGA"
                      className="inactive"
                      type="text"
                      title="Please enter the Local Government Area of your business"
                      name="LGA"
                      onChange={(e) =>
                        setValueOf(e, "otherLGA", "Please specify")
                      }
                    />
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="form-section submit-form m-3 mb-5">
            <div className="section-header">
              <h3 className="section-title">
                Participating in Go Full Circle 2023
              </h3>
            </div>
            <div className="questions-container">
              <div className="question multi-choice-with-other mb-3">
                <fieldset>
                  <legend className="prompt multi-choice-prompt">
                    What I hope to get out of the Go Full Circle course:
                  </legend>
                  {goalsList.map((goal, idx) => (
                    <div className="option-label-pair" key={`goalOption${idx}`}>
                      <input
                        type="checkbox"
                        name="Aims"
                        id={`goalOption${idx}`}
                        value={goal}
                      />
                      <label htmlFor={`goalOption${idx}`}>{goal}</label>
                    </div>
                  ))}
                  <div className="option-label-othertext">
                    <input type="checkbox" name="Aims" id="goalOptionOther" />
                    <label htmlFor="goalOptionOther" key={`goalLabelOther`}>
                      Other goal
                    </label>
                    <input
                      type="text"
                      id="inputOtherGoal"
                      onChange={(e) => setValueOf(e, "goalOptionOther")}
                    />
                  </div>
                </fieldset>
              </div>

              <div className="question one-choice-with-other mb-3">
                <fieldset>
                  <legend className="prompt multi-choice-prompt">
                    How did you hear about Go Full Circle?
                  </legend>

                  <div className="option-label-pair">
                    <input
                      required
                      type="radio"
                      name="HowDidYouHear"
                      id="BoroondaraWebsite"
                      value="City of Boroondara website"
                      onClick={() => removeRequired("inputOtherHowDidYouHear")}
                    />
                    <label htmlFor="BoroondaraWebsite">
                      City of Boroondara website
                    </label>
                  </div>
                  <div className="option-label-pair">
                    <input
                      required
                      type="radio"
                      name="HowDidYouHear"
                      id="MelbourneWebsite"
                      value="City of Melbourne website"
                      onClick={() => removeRequired("inputOtherHowDidYouHear")}
                    />
                    <label htmlFor="MelbourneWebsite">
                      City of Melbourne website
                    </label>
                  </div>
                  <div className="option-label-pair">
                    <input
                      required
                      type="radio"
                      name="HowDidYouHear"
                      id="StonningtonWebsite"
                      value="City of Stonnington website"
                      onClick={() => removeRequired("inputOtherHowDidYouHear")}
                    />
                    <label htmlFor="StonningtonWebsite">
                      City of Stonnington website
                    </label>
                  </div>
                  <div className="option-label-pair">
                    <input
                      required
                      type="radio"
                      name="HowDidYouHear"
                      id="Facebook"
                      value="Facebook"
                      onClick={() => removeRequired("inputOtherHowDidYouHear")}
                    />
                    <label htmlFor="Facebook">Facebook</label>
                  </div>
                  <div className="option-label-pair">
                    <input
                      required
                      type="radio"
                      name="HowDidYouHear"
                      id="Instagram"
                      value="Instagram"
                      onClick={() => removeRequired("inputOtherHowDidYouHear")}
                    />
                    <label htmlFor="Instagram">Instagram</label>
                  </div>
                  <div className="option-label-pair">
                    <input
                      required
                      type="radio"
                      name="HowDidYouHear"
                      id="Newsletter"
                      value="Newsletter"
                      onClick={() => removeRequired("inputOtherHowDidYouHear")}
                    />
                    <label htmlFor="Newsletter">Newsletter</label>
                  </div>
                  <div className="option-label-pair">
                    <input
                      required
                      type="radio"
                      name="HowDidYouHear"
                      id="CirqueDuSoil"
                      value="Cirque du Soil"
                      onClick={() => removeRequired("inputOtherHowDidYouHear")}
                    />
                    <label htmlFor="CirqueDuSoil">Cirque du Soil</label>
                  </div>
                  <div className="option-label-othertext">
                    <input
                      // this element's `value` will be set by the text input below
                      required
                      type="radio"
                      name="HowDidYouHear"
                      id="otherHowDidYouHear"
                      onClick={() =>
                        setRequired("inputOtherHowDidYouHear", "Please specify")
                      }
                    />
                    <label htmlFor="otherHowDidYouHear">Other</label>
                    <input
                      // this text input sets the `value` of the "Other" radio button
                      id="inputOtherHowDidYouHear"
                      className="inactive"
                      type="text"
                      title="How did you hear about Go Full Circle?"
                      name="HowDidYouHear"
                      onChange={(e) =>
                        setValueOf(e, "otherHowDidYouHear", "Please specify")
                      }
                    />
                  </div>
                </fieldset>
              </div>

              <div className="question one-choice mb-3">
                <fieldset>
                  <legend className="prompt multi-choice-prompt">
                    Time commitment
                  </legend>
                  <div className="option-label-pair">
                    <input
                      required
                      type="checkbox"
                      name="Agree"
                      id="Agree"
                      value="Yes"
                    />
                    <label htmlFor="Agree">
                      I am able to commit 5-6 hrs per week (totalling 40-50
                      hours across the entire 8 week course) to participate in
                      Go Full Circle, as detailed in the course description
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="form-section submit-form m-3">
            <div className="section-header">
              <h3 className="section-title">Join the community!</h3>
            </div>
            <div className="questions-container">
              <p>
                Thanks for your interest in Go Full Circle 2023. Click 'register
                me' when you have completed the form.
              </p>
              <button
                className="btn btn-primary mb-3"
                id="submit-button"
                type="submit"
              >
                Register me
              </button>
              <p>Thank you!</p>
            </div>
          </div>
        </form>
        <Link to="/">Back to homepage</Link>
      </div>
    </div>
  )
}
