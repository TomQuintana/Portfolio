import { Link } from "react-router-dom"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useState } from "react"
import GitHubIcon from "../assets/img/GitHubIcon.png"
import telefonoVintage from "../assets/img/telefonoVintage.webp"
import Gmail from "../assets/img/Gmail.jpeg"
import Linkedin from "../assets/img/Linkedin.avif"

const Contact = () => {

  const [copiedMail, setcopiedMail] = useState(false)
  const [copiedPhone, setcopiedPhone] = useState(false)

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
          className="rounded h-28"
          src={ Gmail } 
          alt="Github"/>
        <p 
          className="font-mono text-xs"
          onClick={() => setcopiedMail(true)} >
          Mail - tomquintana20@gmail.com 
        </p>
        <CopyToClipboard text='tomquintana20@gmail.com'>
          <p 
            className="bg-indigo-700 w-full py-3 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 
            md:w-auto px-10"
            onClick={() => setcopiedMail(true)} >
            Copy
          </p>
        </CopyToClipboard>
        <p className="">
          {copiedMail && 
            <span
              className="bg-indigo-700 w-3/4 rounded-xl text-white text-center uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 
            md:w-auto px-10 mb-10"
          >Copied</span>}
        </p>
      </div>
      <div className="w-28 h-44 mb-10">
        <img 
          className="rounded h-15"
          src={ telefonoVintage } 
          alt="Telefono"/>
        <p 
          className="font-mono text-xs"
          onClick={() => setcopiedMail(true)} >
          Phone - 1168386465
        </p>
        <CopyToClipboard text='1168386465'>
          <p 
            className="bg-indigo-700 w-full py-3 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 
            md:w-auto px-10"
            onClick={() => setcopiedPhone(true)} >
            Copy
          </p>
        </CopyToClipboard>
        <p className="">
          {copiedPhone && 
            <span
              className="bg-indigo-700 w-3/4 rounded-xl text-white text-center uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 
            md:w-auto px-10 mb-10"
          >Copied</span>}
        </p>
      </div>
    </>
  )
}

export default Contact
