import { Link } from "react-router-dom"

import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const Pages = () => {
  
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      <div className="w-full flex justify-end text-sm md:text-lg font-mono ">
        <div className={`${location.pathname == '/' ? ' block text-center my-5 rounded-2xl px-2 mr-1 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl bg-sky-200' : 'block text-center my-5 text-gray-500 px-2 mr-1 hover:cursor-pointer hover:bg-sky-100 hover:rounded-3xl '}`}>
          <Link 
            className=""
            to="/">{t('homePage')}
          </Link>  
        </div>
        <div className= {`${location.pathname == '/proyects' ? ' block text-center my-5 rounded-2xl px-2 mr-1 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl bg-sky-200' : 'block text-center my-5 text-gray-500 px-2 mr-1 hover:cursor-pointer hover:bg-sky-100 hover:rounded-3xl '}`}>
          <Link 
            to="/proyects">{t('project')}
          </Link>
        </div>  
        <div className={`${location.pathname == '/about-me' ? ' block text-center my-5 rounded-2xl px-2 mr-1 hover:cursor-pointer hover:bg-gray-100 hover:rounded-3xl bg-sky-200' : 'block text-center my-5 text-gray-500 px-2 mr-1 hover:cursor-pointer hover:bg-sky-100 hover:rounded-3xl '}`}>
          <Link 
            className=" "
            to="/about-me">{t('aboutMe')}
          </Link>
        </div>
      </div>
    </>
  )
}

export default Pages
