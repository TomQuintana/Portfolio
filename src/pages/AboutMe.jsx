
export const AboutMe = () => {
  return (
    <>
      <p className="text-center mb-10 font-mono text-4xl md:w-2/6">
        A little of {''}
        <span className="text-sky-400 font-bold">Me</span>
      </p>
      <div className="flex justify-center">
      <form
        className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md w-3/6 items-center flex justify-center"
      >
        <div className="mb-5 font-mono text-xl text-center">
            <h1 className="text-center font-mono text-xl">
              Hello! My name is Tomas Quintana
            </h1>
            <br/>
            <p className="font-mono text-xl">I am a young man of 24 years living in Buenos Aires📍</p>
            <br/>
            <p>Worked as a freelance and in a company called Gojiraf</p>
            <br/>
            <p>Like working in a team, having new challenges and being able to implement what I learn</p>
            <br/>
            <p>
              I have experience in the following technologies - TypeScript, NodeJs, ReactJs, Javascript, Lambdas AWS, SQS, Loopback, Jest, Mocha
              <br/>
            </p>
            <br/>
            <p>For more information you can find my cv in the upper left but anyway I attach it below {''}
              <a 
                className="font-bold text-indigo-600 hover:bg-gray-200 hover: cursor-pointer"
                href="https://dull-barge-ad0.notion.site/CV-Tomas-Quintana-e7c04d26a4374fdd9b9ff881658a0332">CV</a>
            </p>
            <br/>
            <br/>
            <p>Thanks for the time, have a good day!😊</p>
          </div>
      </form>
      </div>
    </>
  )
}
