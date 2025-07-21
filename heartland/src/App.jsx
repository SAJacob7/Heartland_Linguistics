import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-blue-600 text-white p-4 flex gap-6 justify-center z-50">
        <a href="#about" className="hover:underline">Heartland Linguistics</a>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <section id="about" className="pt-24 h-screen bg-gray-100 p-8">
        <h2 className="text-2xl font-bold">Heartland Linguistics</h2>
        <p>Info blah blah.</p>
      </section>
      <section id="services" className="pt-24 h-screen bg-gray-100 p-8">
        <h2 className="text-2xl font-bold">Services</h2>
        <p>Information and Words</p>
      </section>
      <section id="contact" className="pt-24 h-screen bg-gray-100 p-8">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p>More words</p>
      </section>
    </div>
  );
}


export default App
