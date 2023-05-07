import tom from '../assets/img/tom.jpeg'
import tom2 from '../assets/img/tom2.jpg'

const FrontPage = () => {

  return (
    <>
      <div>
        <h1 className='font-mono text-5xl w-72'>
          Hi there - my name is Tom. 
          I'm a <p className='text-sky-400'>Software Developer
          </p>         
        </h1>
      </div>
      <div>
        <img 
          src={tom2} 
          alt="" 
          className='w-3/4'
        />
      </div>
    </>
  )
}

export default FrontPage
