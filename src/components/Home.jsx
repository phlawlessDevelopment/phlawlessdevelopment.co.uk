import { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
        <div id="home" className="flex flex-col justify-center items-center -z-10 top-0 h-full w-full gap-6 pointer-events-none">
            <h1 className="handwritten text-7xl text-center mb-6">phlawless development</h1>
    
    <div className='flex flex-row justify-center items-center gap-6 w-2/3'>
            <h1 className="text-md">
                Edinburgh based freelance web development company, offering  small business website
                creation and fullstack webapps in Python and NodeJS.
                If you’re looking to start your own small business website, you’ve come to the right place. I will create a site that is tailored to your needs and drives your business forward.
                </h1>
    <div className='w-2/3 h-auto rotate-6 bg-white' >
    <img className='-rotate-6 object-contain' src={'stock/stock_6.jpg'} alt="web development stock photo"></img>
    </div>
    </div>
    <div className='flex flex-col gap-6 justify-center items-center'>
        <h1 className='text-3xl handwritten'>
        Every business has a story to tell. 
        </h1>
    <div className='flex flex-row justify-center items-center gap-6 w-2/3'>
    <div className='w-2/3 h-auto rotate-6 bg-white' >
    <img className='-rotate-6 object-contain' src={'stock/stock_1.jpg'} alt="web development stock photo"></img>
    </div>
            <h1 className="text-md">
               
            I design and develop websites that communicate your company’s story and attract customers.
                I love to build and implement complex database backed web applications, but know that some customers may be more comfortable with a simple static website or blogging platform. I build on that knowledge and customise my solutions to suit your needs.
                I've worked with a range of clients in 15 coutries (and counting), from simple automation scripts to large SAAS (Software As A Service) products and everything in between.
                </h1>
    </div>
    </div>
    <div className='flex flex-col gap-6 justify-center items-center'>
        <h1 className='text-3xl handwritten'>
        Perpetual student of computer science 
        </h1>
    <div className='flex flex-row justify-center items-center gap-6 w-2/3'>
            <h1 className="text-md">
               
            Although I mainly build websites in Python using the Django framework, or NodeJS using the MERN or MEVN stacks, I'm proficent in C#, Go(lang), Kotlin, and C++, and constantly learning new languages and frameworks. <span className=' text-2xl handwritten'>I Just really love to code.</span>

    </h1>
    <div className='w-2/3 h-auto rotate-6 bg-white' >
    <img className='-rotate-6 object-contain' src={'stock/stock_5.jpg'} alt="web development stock photo"></img>
    </div>
    </div>
    </div>
    <div className="flex flex-row flex-wrap justify-center mt-8 gap-4 handwritten">
            <div className="border-2 rounded-lg p-2 m-2 flex flex-col text-center">
              Custom functionality
              <span
                className="material-icons "
                
              >
                settings
              </span>
            </div>
            <div className="border-2 rounded-lg p-2 m-2 flex flex-col text-center ">
              Web expert
              <span
                className="material-icons "
                
              >
                http
              </span>
            </div>
            <div className="border-2 rounded-lg p-2 m-2 flex flex-col text-center">
              Professional designs
              <span
                className="material-icons "
                
              >
                view_sidebar
              </span>
            </div>
            <div className="border-2 rounded-lg p-2 m-2 flex flex-col text-center">
              Fast response
              <span
                className="material-icons "
                
              >
                quickreply
              </span>
            </div>

            <div className="border-2 rounded-lg p-2 m-2 flex flex-col text-center">
              World wide
              <span
                className="material-icons "
                
              >
                public
              </span>
            </div>

            <div className="border-2 rounded-lg p-2 m-2 flex flex-col text-center">
              Solo developer
              <span
                className="material-icons "
                
              >
                laptop_windows
              </span>
            </div>

            <div className="border-2 rounded-lg p-2 m-2 flex flex-col text-center">
              Modern tech
              <span
                className="material-icons "
                
              >
                memory
              </span>
            </div>

            <div className="border-2 rounded-lg p-2 m-2 flex flex-col text-center">
              Iterative
              <span
                className="material-icons "
                
              >
                sync
              </span>
            </div>
          </div>
    </div>
    )
}
}

export default Home;