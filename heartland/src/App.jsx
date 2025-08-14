import './App.css'
import logo from './assets/logo.png'
import kurdish_contract from './assets/HL_Kurdish_Contract_25-2.pdf'
import english_contract from './assets/HL_English_Contract_25-2.pdf'
import arabic_contract from './assets/HL_Arabic_Contract_25-2.pdf'
import color_logo from './assets/color_logo.png'
import lingTree from './assets/ling_tree.JPG';
import { ReactTyped } from "react-typed";
import { useEffect, useState } from 'react';

function TypingHeader({ text, className, id }) {
  const [triggerTyping, setTriggerTyping] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTriggerTyping(true);   // Start typing when visible
        } else {
          setTriggerTyping(false);  // Reset typing when out of view
        }
      });
    }, observerOptions);

    const el = document.getElementById(id);
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [id]);

  return (
    <h2 id={id} className={className}>
      HEARTLAND{" "}
      {triggerTyping && (
        <ReactTyped
          strings={[text]}
          typeSpeed={100}
          loop={false}
          showCursor={true}
          onComplete={() => {
            const cursor = document.querySelector(".typed-cursor");
            if (cursor) cursor.style.display = "none";
          }}
        />
      )}
    </h2>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
  const observerOptions = {
    threshold: [0, 0.1, 0.9, 1], // Multiple trigger points
    rootMargin: "-20% 0px -20% 0px" // 20% offset from top and bottom
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const target = entry.target;
      if (entry.isIntersecting) {
        if (target.classList.contains("image")) {
          target.classList.add("appear-from-left");
          target.classList.remove("disappear-to-right");
        } else {
          target.classList.add("appear");
          target.classList.remove("disappear");
        }
      } else {
        if (target.classList.contains("image")) {
          target.classList.add("disappear-to-right");
          target.classList.remove("appear-from-left");
        } else {
          target.classList.add("disappear");
          target.classList.remove("appear");
        }
      }
    });
  }, observerOptions);

  const elements = document.querySelectorAll("h2, p, .box, .image");
  elements.forEach(el => scrollObserver.observe(el));

  return () => elements.forEach(el => scrollObserver.unobserve(el));
}, []);

  return (
    <div className="background">
<nav className="navbar flex flex-wrap justify-between items-center p-4 md:px-16 bg-white shadow-md sticky top-0 z-50">
      <div className="hidden md:flex items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <a href="#">
            <img src={color_logo} alt="Logo" className="h-10 w-auto" />
          </a>
          <div className="flex space-x-4">
            <div className="vertical-divider"></div>
            <a href="#about" className="nav-tab">Heartland Linguistics</a>
            <a href="#services" className="nav-tab">Services</a>
            <a href="#bio" className="nav-tab">About Us</a>
          </div>
        </div>
        <a href="#contact" className="booking-link">Contact</a>
      </div>

      <div className="md:hidden w-full flex justify-end relative">
        <button
          className="text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {menuOpen && (
          <div className="absolute right-0 top-full mt-2 w-40 bg-white bg-opacity-95 shadow-lg rounded-md py-2 z-50">
            <a
              href="#about"
              className="block px-4 py-2 text-gray-800 hover:text-[#334d5f]"
              onClick={() => setMenuOpen(false)}
            >
              Heartland Linguistics
            </a>
            <a
              href="#services"
              className="block px-4 py-2 text-gray-800 hover:text-[#334d5f]"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#bio"
              className="block px-4 py-2 text-gray-800 hover:text-[#334d5f]"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-gray-800 hover:text-[#334d5f]"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
      </nav>

      {/* Home Section */}
      <header className="relative flex flex-col items-center justify-center min-h-[100vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {["English", "Arabic", "کوردی", "English", "عربي", "Kurdish", "English", "عربي", "کوردی"].map((lang, index) => (
            <span key={index} className={`floating-text lang-${index}`}>{lang}</span>
          ))}
        </div>
        <div className="absolute">
          <img
            src={logo}
            alt="Logo"
            className="w-[200px] sm:w-[300px] md:w-[400px] opacity-30"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl custom-playfair-italics text-[#4d91b3] text-center">
          HEARTLAND LINGUISTICS
        </h1>
      </header>
      
      <div>
        {/* About Section */}
        <section id="about" className="scroll-mt-24 w-full py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-8">
            <div className="w-full md:w-1/2">
              <TypingHeader 
                text="LINGUISTICS" 
                className="text-2xl sm:text-3xl md:text-4xl mb-4 custom-playfair-italics" 
                id="about-typing-header"
              />
              <p className="text-gray-700 text-base sm:text-lg">
                Heartland Linguistics is a family-owned language service provider specializing in
                <strong className="important-words-color"> Kurdish, Arabic, and English. </strong>
                Founded and operated by a mother-daughter team, we deliver
                <strong className="important-words-color"> ATA-certified translation</strong> and professional interpretation for on-site, remote (Zoom), and recorded formats.
                Our services include document, video, and audio translation, as well as real-time interpretation for legal, medical, business, and community settings. We are committed to providing accurate, culturally informed communication solutions.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img
                src={lingTree}
                alt="Linguistics Tree"
                className="image max-w-full md:max-w-3/4 h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="scroll-mt-24 w-full py-16 md:py-24 bg-gradient-to-b">
          <div className="text-center mb-12 px-6">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold custom-playfair-italics text-[#7aabcc] tracking-wide animate-fade-in">
              OUR SERVICES
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl mx-auto">
              We offer professional language solutions tailored to your needs.
            </p>
          </div>
          <div className="box max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
            <div className="bg-[#7aabcc] rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <h3 className="custom-playfair-italics text-xl font-semibold text-white mb-2">ON-SITE INTERPRETATION</h3>
              <p className="text-white text-sm">
                Real-time oral interpretation services at your designated location.
              </p>
            </div>
            <div className="bg-[#7aabcc] rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <h3 className="custom-playfair text-xl font-semibold text-white mb-2">REMOTE INTERPRETATION</h3>
              <p className="text-white text-sm">
                Seamless interpretation via phone or video conferencing platforms.
              </p>
            </div>
            <div className="bg-[#7aabcc] rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <h3 className="custom-playfair text-xl font-semibold text-white mb-2">DOCUMENT TRANSLATION</h3>
              <p className="text-white text-sm">
                Accurate translation of legal, medical, academic, and personal documents.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center px-6">
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              Specific service requests—including scope, deadlines, format, and location—will be detailed in individual service orders agreed upon by both parties.
            </p>
          </div>
          <div className="mt-12 text-center px-6">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href={english_contract}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#334d5f] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#7aabcc] transition cursor-pointer"
              >
                Download Contract - English
              </a>

              <a
                href={kurdish_contract}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#334d5f] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#7aabcc] transition cursor-pointer"
              >
                Download Contract - Kurdish
              </a>

              <a
                href={arabic_contract}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#334d5f] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#7aabcc] transition cursor-pointer"
              >
                Download Contract - Arabic
              </a>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section id="bio" className="scroll-mt-24 w-full py-16 md:py-24 px-6 md:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl custom-playfair-italics mb-6">ABOUT US</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-3xl shadow-lg p-8 md:p-12 image-border">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Saya Ahmed - Owner & CEO
              </h3>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                Saya A. founded Heartland Linguistics with a clear mission: to serve communities both locally and abroad by providing outstanding,
                trustworthy language services delivered by reliable professionals. Fluent in Kurdish and recognized with a Gold Seal of Biliteracy,
                Saya combines linguistic skill with a deep passion for bridging communication gaps and breaking down barriers.
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Currently pursuing her Doctor of Pharmacy degree and consistently earning Dean's Honor Roll status,
              Saya brings exceptional attention to detail—sharpened through her experience as a pharmacy intern—to every client interaction.
              As President of the International Pharmacy Student Club at her university, she revitalized the organization in a single summer, demonstrating her vision, leadership, and ability to transform ideas into results.
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              What sets Heartland Linguistics apart is its foundation as a
              family-run business with first-hand experience in the challenges of cross-language communication.
              Saya's global upbringing and extensive travel have shaped her into a true global citizen, dedicated to building long-term relationships with clients and delivering solutions that are accurate, culturally informed, and deeply personal.
              </p>
            </div>
          </div>
          <div className="max-w-5xl mx-auto pt-15">
            <div className="bg-gray-50 rounded-3xl shadow-lg p-8 md:p-12 image-border">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Dr. Hiba E. Gharib - Lead Translator & Interpreter
              </h3>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                Dr. Hiba E. Gharib brings over 20 years of expertise in translation, interpretation, and cross-cultural communication. Fluent in Kurdish, Arabic, and English, she holds a Ph.D. in Language and Linguistics from the University of Kansas, specializing in the comparative study of semantics across these three languages.
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                Her professional experience spans academic, medical, legal, and technical fields, where she has worked with international organizations, NGOs, and government agencies to deliver precise, culturally informed language solutions.
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                In addition to her translation and interpretation work, Dr. Gharib has an extensive background in higher education, having taught linguistics, translation, and TESOL courses to diverse audiences both in the U.S. and abroad.
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                A certified TESOL instructor and active member of MICATA, ATA, and the Arab Translators Association, Dr. Gharib is committed to accuracy, confidentiality, and bridging communication gaps for every client she serves.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer id="contact" className="text-white pt-16 pb-8 px-6 md:px-20 lg:px-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-700 pb-10">
          <div>
            <h3 className="custom-playfair-italics text-2xl font-semibold mb-4 text-white">CONTACT</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="mr-3 text-white">Phone No.: </span>
                <span>(816) 255-4787</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-white">Text: </span>
                <span>(816) 715-3550</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-white">Email: </span>
                <span>heartlandlinguistics@gmail.com</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-white">Mailing Addr.: </span>
                <span>15439 Glenwood Ave, Overland Park, KS 66223</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="custom-playfair-italics text-2xl font-semibold mb-4 text-white">CONNECT</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="https://www.linkedin.com/in/hiba-gharib-446512131/" target="_blank"
                rel="noopener noreferrer" className="hover:text-[#334d5f] transition">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
