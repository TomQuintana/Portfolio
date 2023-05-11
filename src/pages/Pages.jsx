import { Link } from "react-router-dom"

const Pages = () => {
  return (
    <>
      <div className="w-full flex justify-end xl:mx-4 mx-0 text-sm md:text-lg">
        <div >
          <Link 
            className="block text-center my-5 ml-2 text-gray-500 px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
            to="/">Home Page
          </Link>  
        </div>
        <div >
          <Link 
            className="block text-center my-5 text-gray-500 px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
            to="/proyects">Proyects
          </Link>
        </div>  
        <div >
          <Link 
            className="block text-center my-5 text-gray-500 px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
            to="/about-me">About Me
          </Link>
        </div>
      </div>
    </>
  )
}

export default Pages