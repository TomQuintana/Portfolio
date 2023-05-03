import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <>
      <nav className="container mt-2 flex justify-end ml-10 ">
        <Link 
          className="block text-center my-5 text-gray-500 px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
          to="/contact">Contact</Link>
        <Link 
          className="block text-center my-5 text-gray-500 px-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
          to="/proyects">Proyects</Link>
      </nav>

      <div>Contact</div>
    </>
  )
}

export default Contact
