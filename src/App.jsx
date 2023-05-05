import { BrowserRouter, Route, Routes } from "react-router-dom"
import FrontPage from "./pages/FrontPage"
import Contact from "./pages/Contact"
import Proyects from "./pages/Proyects"
import MainPage from "./pages/MainPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}>
            <Route index element={<FrontPage/>}/>
            <Route path='proyects' element={<Proyects/>} />
            <Route path='contact' element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
