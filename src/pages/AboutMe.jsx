import { useTranslation } from 'react-i18next';
import logoJS from '../img/icons8-js-96.png'
import logoTS from '../img/icons8-typescript-96.png'
import logoPostgres from '../img/icons8-postgre-sql-a-free-and-open-source-relational-database-management-system-96.png'
import logoNode from '../img/icons8-nodejs-96 (1).png'
import logoMongo from '../img/icons8-mongodb-96.png'
import logoReact from '../img/icons8-reaccionar-80.png'

export const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-center mb-5 md:mb-10 font-mono text-4xl w-full">
        {t('aLittle')} {''}
        <span className="text-sky-400 font-bold">{t('me')}</span>
      </p>
      <div className="flex justify-center">
      <form
        className="bg-white  mb-10 lg:mb-0 shadow-md rounded-md w-4/5 md:w-3/6 items-center flex justify-center"
      >
        <div className="mb-5 font-mono text-xl text-center">
            <h1 className="text-center font-mono text-xl">
              {t('hello')}
            </h1>
            <br/>
            <p className="font-mono text-xl">
              {t('ImYoung')}
              </p>
            <br/>
            <p>
            {t('worked')}
              </p>
            <br/>
            <p>{t('like')}</p>
            <br/>
            <p>
              {t('stack')}  
              <div className='grid grid-cols-2 items-baseline md:flex justify-center md:gap-8 mt-5 ml-20 md:ml-0'>
                <img 
                  className="rounded hover:bg-gray-200"
                  src={ logoJS} 
                  alt="Github"/>
                <img 
                  className="rounded hover:bg-gray-200"
                  src={ logoTS} 
                  alt="Github"/>
                <img 
                  className="rounded hover:bg-gray-200"
                  src={ logoReact} 
                  alt="Github"/>
                <img 
                  className="rounded hover:bg-gray-200"
                  src={ logoNode} 
                  alt="Github"/>
                <img 
                  className="rounded hover:bg-gray-200"
                  src={ logoMongo} 
                  alt="Github"/>
                <img 
                  className="rounded hover:bg-gray-200"
                  src={ logoPostgres} 
                  alt="Github"/>
              </div>
            </p>
            <br/>
            <p>{t('thanks')}</p>
          </div>
      </form>
      </div>
    </>
  )
}
