import './App.css'
import logo from './assets/logo.png'
import lingTree from './assets/ling_tree.JPG';
import { ReactTyped } from "react-typed";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -250px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (
      entries
    ) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        } else {
          entry.target.classList.remove("appear");
        }
      });
    }, appearOptions);

    const faders = document.querySelectorAll(".fade-in, .from-right");
    faders.forEach((fader) => appearOnScroll.observe(fader));
  }, []);

  return (
    <div className="background">
      <nav className="fixed top-0 left-0 right-0 bg-white-600 p-4 pl-8 flex items-center gap-6 justify-start z-50 ">
        <a href="">
        <img
          src ={logo}
          alt ="Logo"
          className = "h-12 w-auto"
        />
        </a>
        <a href="#about" className="font-black hover:text-[#593B02] transition-all duration-200 ease-in-out">Heartland Linguistics</a>
        <a href="#services" className="font-black hover:text-[#593B02] transition-all duration-200 ease-in-out">Services</a>
        <a href="#contact" className="font-black hover:text-[#593B02] transition-all duration-200 ease-in-out">Contact</a>
      </nav>
      <div className="fixed top-0 left-0 right-0 h-20 background z-40" />
      

      <header className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl custom-playfair">
          Heartland Linguistics
        </h1>
      </header>

      <section id="about" className="h-screen w-screen">
      <div className="flex items-center justify-between px-16 h-full fade-in">
        <div className="w-1/2 pr-8">
          <h2 className="text-4xl mb-4 custom-playfair">
            Heartland <ReactTyped strings={["Linguistics"]} typeSpeed={100} loop />
          </h2>
          <p className="text-gray-700 text-lg">
            Information and Words about what Heartland Linguistics offers. We specialize in blah blah and provide expert help in stuff.
          </p>
        </div>
        <div className="w-1/2 pl-8 flex justify-center items-center from-right">
          <img
            src={lingTree}
            alt="Linguistics Tree"
            className="w-3/4 h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>


      <section id="services" className="pt-24 h-screen w-screen fade-in">
        <h2 className="text-4xl custom-playfair">Services</h2>
        <p>More words</p>
      </section>

      <section id="contact" className="pt-24 h-screen w-screen fade-in">
        <h2 className="text-4xl custom-playfair">About Me</h2>
        <p>More words</p>
      </section>
    </div>
  );
}


export default App
