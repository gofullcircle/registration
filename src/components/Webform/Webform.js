import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader"

import goalsList from "./goalsList"
import howDidYouHearList from "./howDidYouHearList"

import { ACCEPTING_ENROLMENTS, SHOW_WAITLIST } from "../Homepage/Homepage"

import "./Webform.css"

export default function Webform() {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)

  function setValueOf(sourceEvent, targetElement) {
    /* Sets the value of an 'other' checkbox/radio input element in response 
       to user input into a separate text input field. Use for making a 
       "A,B,C or Other" style set of user options.
       `sourceEvent` is the onChange() event from the text input field.
       `targetElement` is the "Other" radio/checkbox input button.
    */
    var otherButton = document.getElementById(targetElement)
    otherButton.checked = true
    sourceEvent.target.classList.remove("inactive")
    sourceEvent.target.required = true
    otherButton.value = sourceEvent.target.value
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

  function otherSelectOption(e, textFieldId) {
    var otherTextInput = document.getElementById(textFieldId)
    if (e.target.value === "Other") {
      otherTextInput.required = true
      otherTextInput.classList.remove("hidden")
    } else {
      otherTextInput.required = false
      otherTextInput.classList.add("hidden")
      otherTextInput.value = ""
    }
  }

  /**
   * Posts form data then navigates to a success or failure page,
   * depending on the server response.
   * @param {SubmitEvent} e Form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    e.submitter.disabled = true // disable the submit button
    setSubmitted(true)
    const data = new FormData(e.target)
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
  }

  useEffect(() => {
    const form = document.getElementById("gfc-form")
    if (form) {
      form.addEventListener("submit", handleSubmit)
    }

    return () => {
      if (form) {
        form.removeEventListener("submit", handleSubmit)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ACCEPTING_ENROLMENTS ? (
    <div className="Webform">
      <header></header>

      <div className="form-content m-0 p-0">
        <div className="h1-container">
          <h1 className="h1 m-3 mb-5">
            Apply to join the Go Full Circle 2023 program
          </h1>
        </div>

        <form
          className="gfc-form col-12 col-md-10 col-lg-8 col-xlg-6 m-auto"
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

              <div className="question one-choice mb-3">
                <fieldset>
                  <legend className="prompt multi-choice-prompt">
                    Business location
                  </legend>

                  <div className="option-label-pair">
                    <input
                      required
                      type="radio"
                      name="LGA"
                      id="Boroondara"
                      value="Boroondara"
                      // onClick={() => removeRequired("inputOtherLGA")}
                    />
                    <label htmlFor="Boroondara">City of Boroondara</label>
                  </div>
                  <div className="option-label-pair">
                    <input
                      required
                      type="radio"
                      name="LGA"
                      id="Melbourne"
                      value="Melbourne"
                      // onClick={() => removeRequired("inputOtherLGA")}
                    />
                    <label htmlFor="Melbourne">City of Melbourne</label>
                  </div>
                  <div className="option-label-pair">
                    <input
                      required
                      type="radio"
                      name="LGA"
                      id="Stonnington"
                      value="Stonnington"
                      // onClick={() => removeRequired("inputOtherLGA")}
                    />
                    <label htmlFor="Stonnington">City of Stonnington</label>
                  </div>
                  {/* <div className="option-label-othertext">
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
                  </div> */}
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
                  {/* TODO: add validation - check if one option is selected */}
                  {/* Eg: https://vyspiansky.github.io/2019/07/13/javascript-at-least-one-checkbox-must-be-selected/ */}
                  <legend className="prompt multi-choice-prompt">
                    What I hope to get out of the Go Full Circle program:
                  </legend>
                  <p className="explanatory-note">(Select all that apply)</p>
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

              {/* <div className="question multi-choice-with-other mb-3">
                <fieldset>
                  <legend className="prompt multi-choice-prompt">
                    How did you hear about Go Full Circle?
                  </legend>
                  <p className="explanatory-note">(Select all that apply)</p>
                  {howDidYouHearList.map((medium, idx) => (
                    <div
                      className="option-label-pair"
                      key={`mediumOption${idx}`}
                    >
                      <input
                        type="checkbox"
                        name="HowDidYouHear"
                        id={`mediumOption${idx}`}
                        value={medium}
                      />
                      <label htmlFor={`mediumOption${idx}`}>{medium}</label>
                    </div>
                  ))}
                  <div className="option-label-othertext">
                    <input
                      type="checkbox"
                      name="HowDidYouHear"
                      id="mediumOptionOther"
                    />
                    <label htmlFor="mediumOptionOther" key={`mediumLabelOther`}>
                      Other
                    </label>
                    <input
                      type="text"
                      id="inputOtherMedium"
                      onChange={(e) => setValueOf(e, "mediumOptionOther")}
                    />
                  </div>
                </fieldset>
              </div> */}

              <div className="question dropdown-with-other mb-3">
                <fieldset>
                  <label
                    htmlFor="HowDidYouHear"
                    className="prompt multi-choice-prompt"
                  >
                    How did you hear about Go Full Circle?
                  </label>
                  <select
                    required
                    defaultValue={"DEFAULT"}
                    name="HowDidYouHear"
                    onChange={(e) => otherSelectOption(e, "otherHowDidYouHear")}
                  >
                    <option disabled value="DEFAULT" className="select-option">
                      Please select
                    </option>
                    {howDidYouHearList.map((medium, idx) => (
                      <option
                        value={medium}
                        className="select-option"
                        key={`mediumOption${idx}`}
                      >
                        {medium}
                      </option>
                    ))}
                  </select>
                  <input
                    name="HowDidYouHear"
                    className="select-other-option-text hidden"
                    type="text"
                    id="otherHowDidYouHear"
                    placeholder="Please specify"
                  ></input>
                </fieldset>
              </div>

              {/* <div className="question one-choice mb-3">
                <fieldset>
                  <legend className="prompt multi-choice-prompt">
                    Attend the information session
                  </legend>
                  <div className="option-label-pair">
                    <input
                      type="checkbox"
                      name="SignUpForInfoSession"
                      id="SignUpForInfoSession"
                      value="Yes"
                    />
                    <label htmlFor="SignUpForInfoSession">
                      Register me for a free 75min virtual information session.
                      This session will take place via Zoom on Wed 2nd Aug 2023
                      at 3:00 pm AEST.
                    </label>
                  </div>
                </fieldset>
              </div> */}
            </div>
          </div>

          <div className="form-section submit-form m-3">
            <div className="section-header">
              <h3 className="section-title">Join the community!</h3>
            </div>
            <div className="questions-container question">
              <p>
                Thanks for your interest in applying for the Go Full Circle 2023
                program. Click 'apply now' when you have completed the form.
              </p>
              <button
                className="btn btn-primary mb-3"
                id="submit-button"
                type="submit"
              >
                {submitted ? (
                  <ClipLoader size={"1em"} color={"white"} />
                ) : (
                  <b>Apply now</b>
                )}
              </button>
              <p>
                <b>Please note</b>: Places are limited. The Go Full Circle team
                will notify you of the outcome of your application.
              </p>
              <p>
                <b>Privacy Policy Statement</b>
                <br />
                Your information will not be made available to any third-party
                organisations or websites except where required under applicable
                law or for the purposes of maintaining communication with and
                delivering program content to you in relation to the Go Full
                Circle program.
              </p>
            </div>
          </div>
        </form>
        <div className="homepage-link">
          <Link to="/">Back to Homepage</Link>
        </div>
      </div>
    </div>
  ) : /*
        ------------------------------------------------------------------------
        NOT ACCEPTING ENROLMENTS 
        ------------------------------------------------------------------------
      */
  SHOW_WAITLIST ? (
    /* 
      ------------- WAITLIST OPEN ------------------
    */
    <div className="Webform">
      <header></header>

      <div className="form-content m-0 p-0">
        <div className="h1-container">
          <h1 className="h1 m-3 mb-5">
            Register your interest in future Go Full Circle programs
          </h1>
        </div>

        <form
          className="gfc-form col-12 col-md-10 col-lg-8 col-xlg-6 m-auto"
          id="gfc-form"
          method="POST"
          // This is the WAITLIST form action:
          action="https://script.google.com/macros/s/AKfycbziVpp_u-R6oB-bT9B_dh0re0SKf0U2_i95Ee501s4OpEYZYckBDk6XsEumlJEiIqIY0w/exec"
        >
          <div className="my-details form-section m-3 mb-5">
            <div className="section-header">
              <h3 className="section-title">Your details</h3>
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

          <div className="form-section submit-form m-3">
            <div className="section-header">
              <h3 className="section-title">Register your interest</h3>
            </div>
            <div className="questions-container question">
              <p>
                Thanks for your interest in the Go Full Circle program. We are
                not currently accepting enrolments. Please press the button
                below to register your interest, and we will notify you when
                future program details are available.
              </p>
              <button
                className="btn btn-primary mb-3"
                id="submit-button"
                type="submit"
              >
                {submitted ? (
                  <ClipLoader size={"1em"} color={"white"} />
                ) : (
                  <b>Register interest</b>
                )}
              </button>
              <br />
              <br />
              <p>
                <b>Privacy Policy Statement</b>
                <br />
                Your information will not be made available to any third-party
                organisations or websites except where required under applicable
                law or for the purposes of maintaining communication with and
                delivering program content to you in relation to the Go Full
                Circle program.
              </p>
            </div>
          </div>
        </form>
        <div className="homepage-link">
          <Link to="/">Back to Homepage</Link>
        </div>
      </div>
    </div>
  ) : (
    /* 
      ------------- WAITLIST CLOSED ---------------
    */
    <div className="Webform">
      <header></header>

      <div className="form-content m-0 p-0">
        <div className="h1-container">
          <h1 className="h1 m-3 mb-5">
            The Go Full Circle program is currently closed
          </h1>
        </div>

        <div className="gfc-form col-12 col-md-10 col-lg-8 col-xlg-6 m-auto">
          <div className="my-details form-section m-3 mb-5">
            <div className="questions-container">
              <b>Thanks for your interest!</b>
              <p>
                We are not currently accepting enrolments for Go Full Circle.
              </p>
              <p>
                Please check back again in future for details of upcoming
                programs.
              </p>
              <div className="homepage-link">
                <Link to="/">Back to Homepage</Link>
              </div>
            </div>
          </div>
          <div className="spacer"></div>
        </div>
      </div>
    </div>
  )
}
