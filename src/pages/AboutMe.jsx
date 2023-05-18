import { useTranslation } from 'react-i18next';

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
              <br/>
            </p>
            <br/>
            <p>{t('cv')} {''}
              <a 
                className="font-bold text-indigo-600 hover:bg-gray-200 hover: cursor-pointer"
                href="https://dull-barge-ad0.notion.site/CV-Tomas-Quintana-e7c04d26a4374fdd9b9ff881658a0332">{t('cvLink')}</a>
            </p>
            <br/>
            <br/>
            <p>{t('thanks')}</p>
          </div>
      </form>
      </div>
    </>
  )
}
