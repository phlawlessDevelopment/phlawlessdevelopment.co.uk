import React, { Component } from 'react'
import { Link } from "react-scroll";


export default class Footer extends Component {
  render() {
    return (
        <div className='w-full flex flex-row items-center justify-center'>

      <footer class="bg-white fixed bottom-0 mx-auto rounded-lg shadow flex items-center justify-between px-6 py-2 ">
          <span  class="handwritten text-4xl text-black mr-4">phlawlessDevelopment</span>
          <ul class="flex flex-wrap gap-6 items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <Link to="home" spy={true} smooth={true} duration={500} offset={-100} class=" hover:underline  ">Home</Link>
              </li>
              <li>
                  <Link to="services"  spy={true} smooth={true} duration={500}  class=" hover:underline ">Services</Link>
              </li>
              <li>
                  <Link to="contact"  spy={true} smooth={true} duration={500}  class=" hover:underline ">Contact</Link>
              </li>
          </ul>
      </footer>
        </div>
    )
  }
}
