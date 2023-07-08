import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Homepage from "./components/Homepage/Homepage"
import Webform from "./components/Webform/Webform"
import Success from "./components/Success/Success"
import ErrorPage from "./components/ErrorPage/ErrorPage"

import "./App.css"

function App() {

  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Webform />} />
        <Route path="/success" element={<Success />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
