import { Outlet, Link} from "react-router-dom"
import Contact from "./Contact"

const AuthLayout = () => {
  return (
    <>
      <nav className="md:container h-24 mt-2 ml-5 flex justify-between">
        <div className="w-full flex justify-end">
          <Contact />
          <div className="w-full flex justify-end">
            <div >
              <Link 
                className="block text-center my-5 text-gray-500 px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
                to="/">Home Page
              </Link>  
            </div>
            <div >
              <Link 
                className="block text-center my-5 text-gray-500 px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
                to="/proyects">Proyects
              </Link>
            </div>  
          </div>
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
