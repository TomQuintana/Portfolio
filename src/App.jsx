import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthLayout from "./pages/AuthLayout"
import FrontPage from "./pages/FrontPage"
import Info from "./pages/Info"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout/>}>
            <Route index element={<FrontPage/>}/>
            <Route path='info' element={<Info/>} />
            <Route path='contact' element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
