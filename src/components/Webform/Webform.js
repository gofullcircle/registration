import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "../Logo/Logo"
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
      <div className="header fixed-top d-flex align-items-center mb-5">
        <Logo display="inline" breakpoint="xsm" />
        <h1 className="h1 p-2">Join the Go Full Circle learning community</h1>
      </div>
      <div className="form-content container">
        <form
          className="gfc-form col-lg-10 col-xlg-8 m-auto"
          id="gfc-form"
          method="POST"
          action="https://script.google.com/macros/s/AKfycbyhtjwCStAprSdNmNKrz97ohws3h78qpmXU8kS8JWdqYqKFdBvRW9qAzGESDTNGVjjNgw/exec?authuser=0"
        >
          <div className="my-details form-section m-3 mb-5">
            <h4>My contact details</h4>

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
                type="text"
                placeholder="your@email.address"
                className="input-field text-input-field"
              />
            </div>
          </div>

          <div className="my-business-details form-section m-3 mb-5">
            <h4>My business</h4>

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

                <input
                  required
                  type="radio"
                  name="BusinessType"
                  id="Retail"
                  value="Retail"
                  onClick={() => removeRequired("inputOtherBusinessType")}
                />
                <label htmlFor="Retail">Retail</label>
                <input
                  required
                  type="radio"
                  name="BusinessType"
                  id="Hospitality"
                  value="Hospitality"
                  onClick={() => removeRequired("inputOtherBusinessType")}
                />
                <label htmlFor="Hospitality">Hospitality</label>
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
              </fieldset>
            </div>

            <div className="question one-choice mb-3">
              <fieldset>
                <legend className="prompt multi-choice-prompt">
                  Number of employees
                </legend>

                <input
                  required
                  type="radio"
                  name="BusinessSize"
                  id="1-5"
                  value="1-5"
                />
                <label htmlFor="1-5">1-5</label>
                <input
                  required
                  type="radio"
                  name="BusinessSize"
                  id="6-10"
                  value="6-10"
                />
                <label htmlFor="6-10">6-10</label>
                <input
                  required
                  type="radio"
                  name="BusinessSize"
                  id="11+"
                  value="11+"
                />
                <label htmlFor="11+">11+</label>
              </fieldset>
            </div>

            <div className="question one-choice-with-other mb-3">
              <fieldset>
                <legend className="prompt multi-choice-prompt">
                  Business location (LGA)
                </legend>

                <input
                  required
                  type="radio"
                  name="LGA"
                  id="Boroondara"
                  value="Boroondara"
                  onClick={() => removeRequired("inputOtherLGA")}
                />
                <label htmlFor="Boroondara">City of Boroondara LGA</label>
                <input
                  required
                  type="radio"
                  name="LGA"
                  id="Melbourne"
                  value="Melbourne"
                  onClick={() => removeRequired("inputOtherLGA")}
                />
                <label htmlFor="Melbourne">City of Melbourne LGA</label>
                <input
                  required
                  type="radio"
                  name="LGA"
                  id="Stonnington"
                  value="Stonnington"
                  onClick={() => removeRequired("inputOtherLGA")}
                />
                <label htmlFor="Stonnington">City of Stonnington LGA</label>
                <input
                  // this element's `value` will be set by the text input below
                  required
                  type="radio"
                  name="LGA"
                  id="otherLGA"
                  onClick={() => setRequired("inputOtherLGA", "Please specify")}
                />
                <label htmlFor="otherLGA">Other area</label>
                <input
                  // this text input sets the `value` of the "Other" radio button
                  id="inputOtherLGA"
                  className="inactive"
                  type="text"
                  title="Please enter the Local Government Area of your business"
                  name="LGA"
                  onChange={(e) => setValueOf(e, "otherLGA", "Please specify")}
                />
              </fieldset>
            </div>
          </div>

          <div className="form-section submit-form m-3 mb-5">
            <h4>My goals</h4>
            <div className="question multi-choice-with-other mb-3">
              <fieldset>
                <legend className="prompt multi-choice-prompt">
                  What I hope to get out of the Go Full Circle course:
                </legend>
                {goalsList.map((goal, idx) => (
                  <label key={`goalLabel${idx}`}>
                    <input
                      type="checkbox"
                      name="Aims"
                      id={`goalOption${idx}`}
                      key={`goalOption${idx}`}
                      value={goal}
                    />
                    {goal}
                  </label>
                ))}
                <label key={`goalLabelOther`}>
                  <input type="checkbox" name="Aims" id="goalOptionOther" />
                  Other goal
                </label>
                <input
                  type="text"
                  onChange={(e) => setValueOf(e, "goalOptionOther")}
                />
              </fieldset>
            </div>

          </div>

          <div className="form-section submit-form m-3">
            <h4>Join the community!</h4>
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
        </form>
      </div>
    </div>
  )
}
