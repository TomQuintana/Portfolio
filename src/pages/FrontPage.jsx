import tom from '../assets/img/tom.jpeg'

const FrontPage = () => {

  return (
    <>
      <div className='container mx-auto mb-36 md:grid md:grid-cols-2 p-5 items-center w-8/12'>
        <div className='flex justify-center'>
          <h1 className='font-mono text-4xl md:text-5xl w-72'>
            Hi there - my name is Tom. 
            I'm a <p className='text-sky-400'>Software Developer
            </p>         
          </h1>
        </div>
        <div className='flex justify-center mt-10 mr-5'>
          <img 
            src={tom} 
            alt="" 
            className='w-44 md:w-3/4 rounded-2xl'
          />
        </div>  
      </div>
    </>
  )
}

export default FrontPage
