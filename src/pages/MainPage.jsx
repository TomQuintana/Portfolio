import { Outlet} from "react-router-dom"
import Contact from "./Contact"
import Pages from "./Pages"

const AuthLayout = () => {
  return (
    <>
      <nav className="h-24 mt-2 flex justify-between">
        <div className="w-full flex justify-end">
          <Contact />
          <Pages />
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="md:flex justify-start md:mt-16">
        <h1
          className="m-2 text-zinc-500 font-mono"
        >© 2023 Tomas Quintana</h1>
      </footer>
    </>
  )
}

export default AuthLayout
