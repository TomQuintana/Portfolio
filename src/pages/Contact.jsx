import github from "../assets/img/github96.png"
import linkedin from "../assets/img/linkedin96.png"
import notas from "../assets/img/notas.png"

const Contact = () => {

  return (
    <>
      <div className="w-full flex justify-start gap-3 mt-2 ml-4">
          <div className="w-10 h-20 mb-28 content-center">
            <a href="https://github.com/TomQuintana?tab=repositories">
              <img 
                className="rounded hover:bg-gray-200"
                src={ github } 
                alt="Github"/>
            </a>
          </div>
          <div className="w-10 h-20 mb-28 content-center">
            <a href="https://www.linkedin.com/in/tomas-quintana-7391281b5/">
              <img 
                className="rounded hover:bg-gray-200"
                src={ linkedin } 
                alt="linkedin"/>
            </a>
          </div>
          <div className="w-10 h-20 mb-28 content-center">
            <a href="https://dull-barge-ad0.notion.site/CV-Tomas-Quintana-e7c04d26a4374fdd9b9ff881658a0332">
              <img 
                className="rounded hover:bg-gray-200"
                src={ notas } 
                alt="Github"/>
            </a>
          </div>
        </div>
    </>
  )
}

export default Contact
