import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import galleta from '../assets/img/galleta.jpeg'
import logoCocch from '../assets/img/logotipo.jpeg'
import portfolio from '../assets/img/portfolio.webp'
import weather from '../assets/img/weather.webp'

const Proyects = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className='w-full mx-36 md:grid md:grid-cols-3 mt-12 p-5 mb-36'>
        <div 
          className="w-64 h-96 font-mono mb-16 border-2 border-gray-200 text-center shadow-lg hover:border-gray-500 hover:shadow-lg items-center"
        >
          <img
            className='mb-8 h-36 w-64'
            src={galleta} alt="MiloComidas" />
          <Link
            className='text-xl hover:cursor-pointer'
            target="_blank"
            to='https://github.com/TomQuintana/MiloComidas'
          >
            {t('mealProject')}
          </Link>
          <div className='flex justify-around mt-8'>
            <button className='w-24 p-2 bg-indigo-500 text-white uppercase rounded-xl hover:bg-indigo-600'>
              <Link
                target="_blank"
                to='https://github.com/TomQuintana/MiloComidas'
              >code
              </Link>
            </button>
          </div>
        </div>
        <div 
          className="w-64 h-96 font-mono mb-16 border-2 border-gray-200 text-center shadow-lg hover:border-gray-500 hover:shadow-lg items-center"
        >
          <img
            className='mb-6 h-36 w-64'
            src={logoCocch} alt="MiloComidas" />
          <Link
            className='text-xl hover:cursor-pointer'
            target="_blank"
            to='https://github.com/TomQuintana/Project-cocchautos'
          >
            <h1 className='mt-8'>
              Cocchautos Detailing
            </h1>
          </Link>
          <div className='flex justify-around mt-10'>
            <button className='w-24 p-2 bg-indigo-500 text-white uppercase rounded-xl hover:bg-indigo-600 mt-5'>
              <Link
                target="_blank"
                to='https://cocchautos-page.vercel.app/'
              >website
              </Link>
            </button>
            <button className='w-24 p-2 bg-indigo-500 text-white uppercase rounded-xl hover:bg-indigo-600 mt-5'>
              <Link
                target="_blank"
                to='https://github.com/TomQuintana/Project-cocchautos'
              >code
              </Link>
            </button>
          </div>
        </div>
        <div 
          className="w-64 h-96 font-mono mb-16 border-2 border-gray-200 text-center shadow-lg hover:border-gray-500 hover:shadow-lg items-center"
        >
          <img
            className='mb-6 h-36 w-64'
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
          <div className='flex justify-around mt-10'>
            <button className='w-24 p-2 bg-indigo-500 text-white uppercase rounded-xl hover:bg-indigo-600 mt-5'>
              <Link
                target="_blank"
                to='https://github.com/TomQuintana/Portfolio'
              >code
              </Link>
            </button>
          </div>
        </div>
        <div 
          className="w-64 h-96 font-mono mb-16 border-2 border-gray-200 text-center shadow-lg hover:border-gray-500 hover:shadow-lg items-center"
        >
          <img
            className='mb-6 h-36 w-64'
            src={weather} alt="Clima App" />
          <Link
            className='text-xl hover:cursor-pointer'
            target="_blank"
            to='https://github.com/TomQuintana/ClimaApp.git'
          >
            <h1 className='mt-8'>
              Waeather App
            </h1>
          </Link>
          <div className='flex justify-around mt-10'>
            <button className='w-24 p-2 bg-indigo-500 text-white uppercase rounded-xl hover:bg-indigo-600 mt-5'>
              <Link
                target="_blank"
                to='https://github.com/TomQuintana/ClimaApp.git'
              >code
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Proyects
