import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Homepage from "./components/Homepage/Homepage"
import MoreInfo from "./components/MoreInfo/MoreInfo"
import Webform from "./components/Webform/Webform"
import Success from "./components/Success/Success"
import ErrorPage from "./components/ErrorPage/ErrorPage"
// import MultiPageForm from "./components/MultiPageForm/MultiPageForm"

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
        <Route path="/info" element={<MoreInfo />} />
        <Route path="/signup" element={<Webform />} />
        <Route path="/success" element={<Success />} />
        <Route path="/error" element={<ErrorPage />} />
        {/* <Route
          path="/register"
          element={<MultiPageForm setResponses={setResponses} />}
        /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
