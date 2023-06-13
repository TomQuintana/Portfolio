import { BrowserRouter, Route, Routes } from "react-router-dom"
import FrontPage from "./pages/FrontPage"
import Proyects from "./pages/Proyects"
import MainPage from "./pages/MainPage"
import { AboutMe } from "./pages/AboutMe"
import CV from "./pages/cv"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}>
            <Route index element={<FrontPage/>}/>
            <Route path='proyects' element={<Proyects/>} />
            <Route path='about-me' element={<AboutMe/>} />
            <Route path='cv' element={<CV/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
