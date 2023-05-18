import { useTranslation } from 'react-i18next';
import i18n from '../translations/i18';

const TranslateSelect = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng.target.value);
  };
  return (
    <>
      <div className="w-full flex justify-start gap-3  md:mt-1">
        <select 
          className='ml-5 shadow rounded-lg md:w-14 p-1 bg-sky-200'
          name="language" onChange={changeLanguage}>
          <option 
            className='border-red-50'
            value="en"
          >EN</option>
          <option value="es">ES</option>
        </select>
      </div>
    </>
     
  )
}

export default TranslateSelect


