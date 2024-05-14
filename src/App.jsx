import { Route, Routes } from "react-router-dom"

import Path from "./paths"

import NavBar from "./components/Main/Navbar"
import Home from "./components/Main/Home"
import Footer from "./components/Main/Footer"
import Merch from "./components/Merch/Merch"
import Services from "./components/Services/Services"
import OurTeam from "./components/OurTeam"
import Clothes from "./components/Merch/More/Clothes"
import Stickers from "./components/Merch/More/Sticker"
import Painting from "./components/Services/More/Painting"
import Polishing from "./components/Services/More/Polishing"
import PolishingHeadlights from "./components/Services/More/PolishingHeadlights"
import Engraving from "./components/Services/More/Engraving"
import Reupholstery from "./components/Services/More/Reupholstery"
import NotFound from "./components/Main/NotFound"

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path={Path.Home} element={<Home />} />

        <Route path={Path.Clothes} element={<Clothes />} />
        <Route path={Path.Stickers} element={<Stickers />} />

        <Route path={Path.Services} element={<Services />} />
        <Route path={Path.Painting} element={<Painting />} />
        <Route path={Path.Polishing} element={<Polishing />} />
        <Route path={Path.PolishingHeadlights} element={<PolishingHeadlights />} />
        <Route path={Path.Engraving} element={<Engraving />} />
        <Route path={Path.Reupholstery} element={<Reupholstery />} />

        <Route path={Path.Merch} element={<Merch />} />
        <Route path={Path.OurTeam} element={<OurTeam />} />

        <Route path="*" element={<NotFound />} />

      </Routes >

      <Footer />

    </>
  )
}

export default App
