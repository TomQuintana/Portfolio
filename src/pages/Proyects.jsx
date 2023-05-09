import { Link } from 'react-router-dom'
import galleta from '../assets/img/galleta.jpeg'
import Criptomonedas from '../assets/img/criptomonedas.jpeg'
import portfolio from '../assets/img/portfolio.webp'

const Proyects = () => {
  return (
    <>
      <div className='w-full mx-36 md:grid md:grid-cols-3 mt-12 p-5 mb-36'>
        <div 
          className="w-56 h-80 font-mono mb-16 border-2 border-gray-200 text-center shadow-lg hover:border-gray-500 hover:shadow-lg items-center"
        >
          <img
            className='mb-8'
            src={galleta} alt="MiloComidas" />
          <Link
            className='text-xl hover:cursor-pointer'
            target="_blank"
            to='https://github.com/TomQuintana/MiloComidas'
          >
            Meal Management Server
          </Link>
        </div>
        <div 
          className="w-56 h-80 font-mono mb-16 border-2 border-gray-200 text-center shadow-lg hover:border-gray-500 hover:shadow-lg items-center"
        >
          <img
            className='mb-8 h-36'
            src={Criptomonedas} alt="MiloComidas" />
          <Link
            className='text-xl hover:cursor-pointer'
            target="_blank"
            to='https://github.com/TomQuintana/Criptomoneda'
          >
            Cryptocurrency Quote        
          </Link>
        </div>   
        <div 
          className="w-56 h-80 font-mono mb-4 border-2 border-gray-200 text-center shadow-lg hover:border-gray-500 hover:shadow-lg items-center"
        >
          <img
            className='mb-6 h-36 w-60'
            src={portfolio} alt="MiloComidas" />
          <Link
            className='text-xl hover:cursor-pointer'
            target="_blank"
            to='https://github.com/TomQuintana/Portfolio'
          >
            <h1 className='mt-8'>
              Portfolio 
            </h1>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Proyects
