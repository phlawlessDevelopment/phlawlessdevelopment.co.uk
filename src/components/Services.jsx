import { Component } from "react";
import { Link } from "react-scroll";

class Services extends Component {
  state = {};
  render() {
    return (
      <div id="services" className="flex flex-col gap-8 w-full h-full m-0 p-0">
        <h1 className="text-5xl p-8 handwritten mx-auto">
              Python + Nodejs fullstack web developer specializing in
            </h1>
      <div id="services" className="flex flex-row gap-14 w-full h-full m-0 p-0">
        <div className="flex flex-col w-1/2 mt-4">
          <div className="flex flex-row p-8 pb-0">
            <div className="rotate-6 bg-white">
              <img
                className="-rotate-6 object-contain"
                src={"stock/stock_python_1.jpg"}
              ></img>
            </div>
           
          </div>
        
        </div>

        <div className="mt-8 w-full handwritten col-span-2">
          <ul className="text-4xl my-8 list-none">
            <li className="flex gap-8 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
              <div>Small buisiness database solutions</div>
            </li>

            <li className="flex gap-8 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div>Buisiness managment tools</div>
            </li>
            <li className="flex gap-8 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
              <div>Buisiness analytics apps</div>
            </li>
            <li className="flex gap-8 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>Static websites</div>
            </li>
            <li className="flex gap-8 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <div>E-commerce</div>
            </li>
          </ul>
         
            </div>
        </div>
      <div id="services" className="flex flex-row gap-4 items-center w-full h-full m-0 p-0">
          <div className="flex flex-col">

          <h1 className="text-4xl my-8 handwritten mx-auto ml-8">And so much more</h1>
          <Link
            to="contact"
            spy={true} smooth={true} duration={500}
            className="bg-[#8c10ff] text-white hover:bg-[#9130ff] rounded-full text-sm flex justify-center items-center text-center py-2 mx-auto w-32 h-12"
          >
            Get in touch
          </Link>
          </div>
          <div className="rotate-6 w-1/2 h-auto bg-white mt-14 ml-32">
              <img
                className="-rotate-6 object-contain"
                src={"stock/stock_python_2.jpg"}
              ></img>
            </div>
            </div>
       
      </div>
    );
  }
}

export default Services;
