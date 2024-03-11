import React from 'react'

function Navbar() {
  return (
    <nav className="shadow-lg shadow-cyan-500/50 flex flex-col h-full w-6 bg-gradient-to-b from-blue-500 text-3xl font-bold p-2">
      <p className="text-sky-500 hover:text-sky-700 mt-5 mb-5 ml-10"><a href="#home">Home</a></p>
      <p className="text-sky-500 hover:text-sky-700 mt-5 mb-5 ml-10"><a href="#calendar">Calendar</a></p>
      <p className="text-sky-500 hover:text-sky-700 mt-5 mb-5 ml-10"><a href="#ministries">Ministries</a></p>
      <p className="text-sky-500 hover:text-sky-700 mt-5 mb-5 ml-10"><a href="#infomation">Infomation</a></p>
      <p className="text-sky-500 hover:text-sky-700 mt-5 mb-5 ml-10"><a href="#contacts">Contacts</a></p>
      <p className="text-sky-500 hover:text-sky-700 mt-5 mb-5 ml-10"><a href="#giving">Giving</a></p>
      <p className="text-sky-500 hover:text-sky-700 mt-5 mb-5 ml-10"><a href="#media">Media</a></p>
    </nav>
  )
}

export default Navbar;
