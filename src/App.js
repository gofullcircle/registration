import { Routes, Route } from "react-router-dom"
import Webform from "./components/Webform/Webform"
import Homepage from "./components/Homepage/Homepage"
import MoreInfo from "./components/MoreInfo/MoreInfo"
import Footer from "./components/Footer/Footer"

import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/info" element={<MoreInfo />} />
        <Route path="/signup" element={<Webform />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
