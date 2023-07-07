import React from "react"
import "./Footer.css"
import CoMlogo from "../../CoMlogo.jpg"
import CoSlogo from "../../CoSlogo.jpg"
import CoBlogo from "../../CoBlogo.jpeg"
import CdSlogo from "../../CdSlogo.png"

export default function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 logos mt-5 h-100 d-flex justify-content-around">
            <a
              href="https://www.melbourne.vic.gov.au/Pages/home.aspx"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="City of Melbourne logo" src={CoMlogo}></img>
            </a>{" "}
            <a
              href="https://www.stonnington.vic.gov.au/Home"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="City of Stonnington logo" src={CoSlogo}></img>
            </a>
            <a
              href="https://www.boroondara.vic.gov.au/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="City of Boroondara logo" src={CoBlogo}></img>
            </a>
            <a
              href="https://cirquedusoil.com.au/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Cirque du Soil logo" src={CdSlogo}></img>
            </a>
          </div>
          <div className="col-lg-6 acknowledgement mt-5 h-100">
            <i>
              We acknowledge the Traditional Owners and their Elders past and
              present as the original custodians of Victoria’s land and waters
              and recognise their enduring connection to the people, soil,
              water, air and everything in between. We pay our deep respects to
              the Wurundjeri Woi-wurrung people and Bunurong people of the Kulin
              Nation and extend that respect to all Aboriginal and Torres Strait
              Islander peoples. We acknowledge their living connection to the
              Country, their relationship with the land and all living things
              extending back over sixty millennia. Circular Economies, to us,
              embody healthy country and healthy people. Through this knowledge
              sharing program we aim to improve the balance and respect for
              nature.
            </i>
          </div>
        </div>
      </div>
    </div>
  )
}
