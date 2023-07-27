import { Link } from 'react-router-dom'
import i18n from 'i18next';
import github from "../assets/img/github96.png"
import linkedin from "../assets/img/linkedin96.png"
import cv from '../assets/img/cv.png'

const Contact = () => {
  const language = 'es'

  return (
    <>
      <div className="w-full flex justify-start gap-3 ml-4 mt-3">
        <div className="w-8 h-16 xl:mb-28 content-center xl:w-10 xl:h-20">
          <Link
            target="_blank"
            to="https://github.com/TomQuintana">
            <img 
              className="rounded hover:bg-gray-200"
              src={ github } 
              alt="Github"/>
          </Link>
        </div>
        <div className="w-8 h-16 xl:mb-28 content-center xl:w-10 xl:h-20">
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/tomas-quintana-7391281b5/">
            <img 
              className="rounded hover:bg-gray-200"
              src={ linkedin } 
              alt="linkedin"/>
          </Link>
        </div>
          <div className="w-8 h-16 xl:mb-28 content-center xl:w-10 xl:h-20">
          {i18n.language == language ? <Link
            target="_blank"
            to='https://drive.google.com/file/d/1mnyEk4dlkoG3y9wKQHqi1a6qWupj2dw1/view?usp=sharing'
          ><img 
              className="rounded hover:bg-gray-200"
              src={ cv } 
              alt="Github"/>
          </Link> 
            : <Link
            target="_blank"
            to='https://drive.google.com/file/d/1cH9WbbxGvjPN7QRPf13j7SgeI2Hi-xSJ/view?usp=sharing'
          ><img 
              className="rounded hover:bg-gray-200"
              src={ cv } 
              alt="Github"/>
            </Link> 
          }
        </div>
      </div>
    </>
  )
}

export default Contact
