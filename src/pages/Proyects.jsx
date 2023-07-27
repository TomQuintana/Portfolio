import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import galleta from '../assets/img/galleta.jpeg'
import weather from '../assets/img/weather.webp'
import blockchainLogo from '../assets/img/blockchain.png'

const Proyects = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className='w-full mx-28 md:grid md:grid-cols-3 mt-12 p-5 mb-36 '>
        <div className='w-80 h-96 grid grid-cols-1 bg-gray-50 shadow-2xl rounded-2xl hover:cursor-pointer hover:scale-110 transform transition-transform'>
          <div className='flex justify-center items-center'>
            <img
            className='mb-8 h-36 w-52 mt-3 rounded-sm shadow-sm'
            src={galleta} alt="MiloComidas"/>
          </div>
          <div className='text-center font-mono'>
            <h1 className='font-mono text-xl text-blue-400'>
              {t('mealProject')}  
            </h1>
            <p>{t('mealProjectText1')}</p>
            <p>{t('mealProjectText2')}</p>
          </div>
          <div className='flex justify-around mt-8'>
            <button className='w-24 p-1 bg-indigo-500 text-white uppercase rounded-xl hover:bg-indigo-600 mb-5'>
              <Link
                target="_blank"
                to='https://github.com/TomQuintana/Meal-Management'
              >code
              </Link>
            </button>
          </div>        
        </div>
        <div className='w-72 h-96 grid grid-cols-1 bg-gray-50 shadow-2xl rounded-2xl hover:cursor-pointer hover:scale-110 transform transition-transform'>
<div className='flex justify-center items-center'>
            <img
            className='mb-8 h-36 w-52 mt-3 rounded-sm shadow-sm'
            src={weather} alt="MiloComidas"/>
          </div>
          <div className='text-center font-mono'>
            <h1 className='font-mono text-2xl text-blue-400'>
              {t('weatherProject')}
            </h1>
            <h2>Terminal App for check Weather</h2>
          </div>
          <div className='flex justify-around mt-8'>
            <button className='w-24 p-1 bg-indigo-500 text-white uppercase rounded-xl hover:bg-indigo-600 mb-5'>
              <Link
                target="_blank"
                to='https://github.com/TomQuintana/Weather-App'
              >code
              </Link>
            </button>
          </div>        
        </div>
         <div className='w-72 h-96 grid grid-cols-1 bg-gray-50 shadow-2xl rounded-2xl hover:cursor-pointer hover:scale-110 transform transition-transform'>          
          <div className='flex justify-center items-center'>
            <img
            className='mb-8 h-36 w-52 mt-3 rounded-sm shadow-sm'
            src={blockchainLogo} alt="MiloComidas"/>
          </div>
          <div className='text-center font-mono'>
            <h1 className='font-mono text-2xl text-blue-400'>Crypto Currency</h1>
            <h2>Project to consult the exchange of cryptocurrencies</h2>
          </div>
          <div className='flex justify-around mt-8'>
            <button className='w-24 p-1 bg-indigo-500 text-white uppercase rounded-xl hover:bg-indigo-600 mb-5'>
              <Link
                target="_blank"
                to='https://github.com/TomQuintana/Cryptocurrency-Quote'
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
