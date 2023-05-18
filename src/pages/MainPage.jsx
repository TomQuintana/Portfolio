import { Outlet} from "react-router-dom"
import Contact from "./Contact"
import Pages from "./Pages"
import TranslateSelect from "../Component/Translate"

const AuthLayout = () => {
  return (
    <>
      <nav className="md:h-16 flex justify-between">
        <div className="w-full flex justify-end">
          <Contact />
          <Pages />
        </div>
      </nav>
      <div className="">
        <TranslateSelect />
      </div>
      <main>
        <Outlet />
      </main>
      <footer className="md:flex justify-start">
        <h1
          className="m-2 text-zinc-500 font-mono"
        >© 2023 Tomas Quintana</h1>
      </footer>
    </>
  )
}

export default AuthLayout
