import { Outlet, Link} from "react-router-dom"

const AuthLayout = () => {
return (
    <>
      <nav className="container mt-2 flex justify-end ml-10 ">
        <Link 
          className="block text-center my-5 text-gray-500 px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
          to="/">Home Page</Link>
        <Link 
          className="block text-center my-5 text-gray-500 px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
          to="/proyects">Proyects</Link>
        <Link 
          className="block text-center my-5 text-gray-500 px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
          to="/contact">Contact</Link>
        </nav>
      <main className='container mx-auto md:grid md:grid-cols-2 mt-12 p-5 items-center w-8/12'>
        <Outlet />
      </main>
      <footer className=" flex justify-start mt-16">
        <h1
          className="m-2 text-zinc-500 font-mono"
        >@ 2023 Tomas Quintana</h1>
      </footer>
    </>
  )
}

export default AuthLayout
