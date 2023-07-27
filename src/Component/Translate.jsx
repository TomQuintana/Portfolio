import i18n from '../translations/i18';
import { useState } from 'react';
import iconEn from '../assets/img/iconsUsa.png'
import iconEs from '../assets/img/iconSpain.png'

const TranslateSelect = () => {

  const [language, setLanguage] = useState('es')

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng.target.value);
    setLanguage(lng.target.value)
  };
  return (
    <>
      <div className="w-full flex justify-start gap-3 md:mt-1">
        <select 
          className='ml-5 shadow rounded-lg h-8 md:h-10 md:w-14 p-1 bg-sky-200'
          name="language" onChange={changeLanguage}>
          <option 
            className='border-red-50'
            value="es"
          >ES</option>
          <option 
            value="en">EN</option>
        </select>
        <div>
          {language == 'es'? 
            <img 
              src={iconEs} 
              alt="" 
              className='w-8 md:w-3/4 rounded-2xl'
            /> :  
            <img 
              src={iconEn} 
              alt="" 
              className='w-8 md:w-3/4 rounded-2xl'
            />}
        </div>
      </div>
    </>
  )
}

export default TranslateSelect


