import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/logo.png'
import { ReactTyped } from "react-typed";

function App() {
  return (
    <div id="">
      <nav className="fixed top-0 left-0 right-0 bg-white-600 text-gray-800 p-4 pl-8 flex items-center gap-6 justify-start z-50">
        <a href="">
        <img
          src ={logo}
          alt ="Logo"
          className = "h-12 w-auto"
        />
        </a>
        <a href="#about" className="hover:text-pink-600 transition-all duration-200 ease-in-out">Heartland Linguistics</a>
        <a href="#services" className="hover:text-pink-600 transition-all duration-200 ease-in-out">Services</a>
        <a href="#contact" className="hover:text-pink-600 transition-all duration-200 ease-in-out">Contact</a>
      </nav>

      <header className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
        <h1 className="text-5xl font-bold custom-qumpell" style={{ fontFamily: 'Qumpellkano' }}>
          Heartland <ReactTyped strings={["Linguistics"]} typeSpeed={100} loop />
        </h1>
        <p className="mt-4 text-lg text-gray-700 px-8 max-w-xl text-center">
          Words maybe motto here.
        </p>
      </header>
      <section id="about" className="pt-24 h-screen bg-gray-100 w-screen">
        <h2 className="text-2xl font-bold">Heartland Linguistics</h2>
        <p>Info blah blah.</p>
      </section>
      <section id="services" className="pt-24 h-screen bg-white-100 w-screen">
        <h2 className="text-2xl font-bold">Services</h2>
        <p>Information and Words</p>
      </section>
      <section id="contact" className="pt-24 h-screen bg-gray-100 w-screen">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p>More words</p>
      </section>
    </div>
  );
}


export default App
