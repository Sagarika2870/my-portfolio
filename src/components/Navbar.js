import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-indigo-200 md:sticky top-0 z-10 opacity-90">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Sagarika Rabindranath
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-indigo-900 justify-center">
          <a href="#projects" className="mr-5 text-lg hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 text-lg hover:text-white">
            Skills
          </a>
          <a href="./Sagarika_Resume.pdf"
            className="mr-5 text-lg hover:text-white">
            Resume
          </a>
          {/* <a href="#photos" className="mr-5 text-lg hover:text-white">
            hobbies
          </a> */}

        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-indigo-800 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-white mt-4 md:mt-0">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}