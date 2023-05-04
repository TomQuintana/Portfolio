import { Link } from 'react-router-dom'
import galleta from '../assets/img/galleta.jpeg'
import Criptomonedas from '../assets/img/criptomonedas.jpeg'
import portfolio from '../assets/img/portfolio.webp'

const Proyects = () => {
  return (
    <>
      <div 
        className="w-56 h-80 font-mono mb-16 border-2 border-gray-200 text-center shadow-lg hover:cursor-pointer hover:border-gray-500 hover:shadow-lg"
      >
        <img
          className='mb-8'
          src={galleta} alt="MiloComidas" />
        <Link
          className='text-xl'
          to='https://github.com/TomQuintana/MiloComidas'
        >
          Servidor para Administrar Comidas
        </Link>
      </div>
      <div 
        className="w-56 h-80 font-mono mb-16 border-2 border-gray-200 text-center shadow-lg hover:cursor-pointer hover:border-gray-500 hover:shadow-lg"
      >
        <img
          className='mb-8 h-36'
          src={Criptomonedas} alt="MiloComidas" />
        <Link
          className='text-xl'
          to='https://github.com/TomQuintana/Criptomoneda'
        >
          Cotizador de Diferentes Criptomonedas
        </Link>
      </div>   
      <div 
        className="w-56 h-80 font-mono mb-16 border-2 border-gray-200 text-center shadow-lg hover:cursor-pointer hover:border-gray-500 hover:shadow-lg"
      >
        <img
          className='mb-8 h-36 w-60'
          src={portfolio} alt="MiloComidas" />
        <Link
          className='text-xl'
          to='https://github.com/TomQuintana/Portfolio'
        >
         Portfolio 
        </Link>
      </div>
    </>
  )
}

export default Proyects
