import i18n from 'i18next';
import tom from '../assets/img/tom.jpeg'
import { useTranslation } from 'react-i18next';

const Cv = () => {

  console.log(i18n.language)
  const { t } = useTranslation();
  return (
    <>
      <div className='container mx-auto bg-indigo-500 text-white mt-5 text-center font-mono text-3xl w-2/4 rounded-xl shadow p-2'>
        <h1>CV | Tomas Quintana</h1>
      </div>
      <div className='container mx-auto w-60 mt-5 items-center'>
        <img 
          src={tom} 
          alt="" 
          className='w-44 md:w-3/4 rounded-2xl'
        />
      </div>
      <div className='flex justify-around gap-36 mt-5'>
        <div className='font-mono text-2xl'>
          <h1
            className='bg-sky-200 p-1 rounded-xl pl-2'
          >Posicion Actual</h1>
          <p 
            className='text-xl pl-3'
          >Full Stack developer Junior</p>
        </div>
        <div
          className='font-mono text-2xl'
        >
          <h1
            className='bg-sky-200 p-1 rounded-xl pl-2'
          >Info de Contacto</h1>
        </div>
      </div>
    </>
  )
}

export default Cv
