import { Component } from "react";
import {Link} from "react-scroll"

class SideBar extends Component {
  state = {};
  render() {
    return (
      <aside className=" w-40 absolute top-0" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 rounded-lg">
          <ul className="space-y-2">
          <li>
            <img src={'80x80_black.png'}></img>
          </li>
            <li className="rounded-lg shadow-lg hover:bg-black">
              <Link
                to="home"
                spy={true} smooth={true} duration={500} offset={-100} 
                className="flex items-center p-2 text-base font-normal text-white rounded-lg "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li className="rounded-lg shadow-md hover:bg-black">
              <Link
                to="services"
                spy={true} smooth={true} duration={500} 
                className="flex items-center p-2 text-base font-normal text-white rounded-lg "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-3">Services</span>
              </Link>
            </li>
            <li className="rounded-lg shadow-md hover:bg-black">
              <Link
                to="contact"
                spy={true} smooth={true} duration={500} 
                className="flex items-center p-2 text-base font-normal text-white rounded-lg "
              >
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
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <span className="ml-3">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default SideBar;
