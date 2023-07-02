import React from "react"
import { useNavigate } from "react-router-dom"
import "./Logo.css"

export default function Logo({ display, breakpoint = "md" }) {
  const navigate = useNavigate()

  return display === "block" ? (
    <img
      src={process.env.PUBLIC_URL + "/logo.png"}
      alt="Go Full Circle logo"
      className="logo-block p-3"
      onClick={() => navigate("/")}
    />
  ) : display === "inline" ? (
    <img
      src={process.env.PUBLIC_URL + "/logo.png"}
      alt="Go Full Circle logo"
      className={`logo-inline d-inline p-3 d-${breakpoint}-none`}
      onClick={() => navigate("/")}
    />
  ) : (
    <></>
  )
}
