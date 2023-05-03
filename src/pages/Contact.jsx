import { Link } from "react-router-dom"
import GitHubIcon from "../assets/img/GitHubIcon.png"
import telefonoVintage from "../assets/img/telefonoVintage.webp"
import Gmail from "../assets/img/Gmail.jpeg"
import Linkedin from "../assets/img/Linkedin.avif"

const Contact = () => {
  return (
    <>
      <div className="w-28 h-24 mb-28">
        <img 
          className="rounded"
          src={ GitHubIcon } 
          alt="Github"/>
        <Link 
          className="text-center font-mono hover:bg-gray-100"
          to="https://github.com/TomQuintana?tab=repositories"> <h1>Github</h1></Link> 
      </div>
      <div className="w-28 h-48">
        <img 
          className="rounded"
          src={ Linkedin } 
          alt="Linkedin"/>
        <Link 
          className="text-center font-mono hover:bg-gray-100"
          to="https://www.linkedin.com/in/tomas-quintana-7391281b5/"> <h1>LinkedIn</h1></Link> 
      </div>
      <div className="w-32 h-44 mb-10">
        <img 
          className="rounded"
          src={ Gmail } 
          alt="Github"/>
        <Link 
          className="text-center font-mono hover:bg-gray-100"
          to="https://github.com/TomQuintana?tab=repositories"> <h1>Gmail</h1></Link> 
        <input 
          type="text" 
          value="tomquintana20@gmail.com"
          className="font-mono text-xs w-44"
        />
        <input 
          type="submit" 
          className="bg-indigo-700 w-full py-3 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 
            md:w-auto px-10"
        />
      </div>
      <div className="w-28 h-44 mb-10">
        <img 
          className="rounded"
          src={ telefonoVintage } 
          alt="Github"/>
        <Link 
          className="text-center font-mono hover:bg-gray-100"
          to="https://github.com/TomQuintana?tab=repositories"> <h1>telefonoVintage</h1></Link> 
      </div>
    </>
  )
}

export default Contact
