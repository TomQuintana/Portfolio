import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthLayout from "./pages/AuthLayout"
import FrontPage from "./pages/FrontPage"
import Contact from "./pages/Contact"
import Proyects from "./pages/Proyects"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout/>}>
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
