import github from "../assets/img/github96.png"
import linkedin from "../assets/img/linkedin96.png"
import cv from '../assets/img/cv.png'

const Contact = () => {

  return (
    <>
      <div className="w-full flex justify-start gap-3 ml-4 mt-3">
          <div className="w-8 h-16 xl:mb-28 content-center xl:w-10 xl:h-20">
            <a href="https://github.com/TomQuintana?tab=repositories">
              <img 
                className="rounded hover:bg-gray-200"
                src={ github } 
                alt="Github"/>
            </a>
          </div>
          <div className="w-8 h-16 xl:mb-28 content-center xl:w-10 xl:h-20">
            <a href="https://www.linkedin.com/in/tomas-quintana-7391281b5/">
              <img 
                className="rounded hover:bg-gray-200"
                src={ linkedin } 
                alt="linkedin"/>
            </a>
          </div>
          <div className="w-8 h-16 xl:mb-28 content-center xl:w-10 xl:h-20">
            <a href="http://localhost:5173/cv">
              <img 
                className="rounded hover:bg-gray-200"
                src={ cv } 
                alt="Github"/>
            </a>
          </div>
        </div>
    </>
  )
}

export default Contact
