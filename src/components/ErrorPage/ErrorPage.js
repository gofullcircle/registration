// import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ErrorPage.css'

export default function ErrorPage() {
  return (
    <div className="ErrorPage">
      <header></header>
      <div className="container">
        <div className="success-message mt-5">
          <h1>Error</h1>
          <p>
            There was an error submitting the form. We apologise for any inconvenience.<br/><br/>
            Please check that your device has a stable internet connection.<br/><br/>
            If this problem persists, please email gofullcircletraining [at] gmail.com
          </p>
          <Link className="btn btn-outline-primary" to="/">
            Home
          </Link>
          <div className="spacer"></div>
        </div>
      </div>
    </div>
  )
}