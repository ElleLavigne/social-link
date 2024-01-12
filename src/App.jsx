import { useState } from 'react'
import './App.css'

import { links } from "./links.js"

function App() {
  return (
    <>
      <div className="container">
        <div className="profile">
          <img src="Logo.png" alt="" />
          <span>@gabii_dedign019</span>
        </div>
        <div className="button">
          <a href="https://www.instagram.com/gabii_design019?igsh=MWszdTFvOHpmYm9sMw==">
            Instagram
          </a>
          <a href="https://www.google.com/maps/place/5%C2%B005'17.0%22S+42%C2%B050'47.4%22W/@-5.0880409,-42.8490727,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-5.0880409!4d-42.8464978?hl=pt-BR&entry=ttu">
            Localização
          </a>
          <a href="https://wa.me/5599981599130?text=Ol%C3%A1">Whatsapp</a>
        </div>
        <div className="icon">
          <a href="https://wa.me/5599981599130?text=Ol%C3%A1">
            <img src="whatsapp.svg" alt="" />
          </a>
          <a href="https://www.instagram.com/gabii_design019?igsh=MWszdTFvOHpmYm9sMw==">
            <img src="instagram.svg" alt="" />
          </a>
          <a href="https://www.google.com/maps?q=-5.0880409,-42.8464978&z=17&hl=pt-BR">
            <img src="localização.svg" alt="" />
          </a>
        </div>
      </div>
    </>
  )
}

export default App
