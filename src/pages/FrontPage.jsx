import tom from '../assets/img/tom.jpeg'

const FrontPage = () => {

  return (
    <>
      <div className='container mx-auto mb-36 md:grid md:grid-cols-2 p-5 items-center w-8/12'>
        <div>
          <h1 className='font-mono text-xl md:text-5xl w-72'>
            Hi there - my name is Tom. 
            I'm a <p className='text-sky-400'>Software Developer
            </p>         
          </h1>
        </div>
        <div>
          <img 
            src={tom} 
            alt="" 
            className='w-44 md:w-3/4'
          />
        </div>  
      </div>
    </>
  )
}

export default FrontPage
