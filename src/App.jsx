import { BrowserRouter, Route, Routes } from "react-router-dom"
import FrontPage from "./pages/FrontPage"
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
