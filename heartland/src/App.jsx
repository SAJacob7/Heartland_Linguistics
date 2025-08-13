import './App.css'
import logo from './assets/logo.png'
import color_logo from './assets/color_logo.png'
import lingTree from './assets/ling_tree.JPG';
import { ReactTyped } from "react-typed";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -250px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries) => {
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
      {/* Navbar */}
      <nav className="navbar flex flex-wrap justify-between items-center p-4 md:px-16 bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          <a href="#">
            <img src={color_logo} alt="Logo" className="h-18 w-auto" />
          </a>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="nav-tab">Heartland Linguistics</a>
            <a href="#services" className="nav-tab">Services</a>
            <a href="#bio" className="nav-tab">About Us</a>
          </div>
        </div>
        <a href="#contact" className="booking-link hidden md:block">Contact</a>
        {/* Mobile menu button (optional) */}
        <button className="md:hidden text-2xl">☰</button>
      </nav>

      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center min-h-[100vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {["English", "lang1", "lang2", "lang3", "lang4", "lang5", "lang6", "lang7", "lang8"].map((lang, index) => (
            <span key={index} className={`floating-text lang-${index}`}>{lang}</span>
          ))}
        </div>
        <div className="absolute z-10">
          <img
            src={logo}
            alt="Logo"
            className="w-[200px] sm:w-[300px] md:w-[400px] opacity-30"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl custom-playfair z-10 text-white text-center">
          Heartland Linguistics
        </h1>
      </header>

      {/* About Section */}
      <section id="about" className="w-full py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-8 fade-in">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 custom-playfair">
              Heartland <ReactTyped
                strings={["Linguistics"]}
                typeSpeed={100}
                loop={false}
                showCursor={true}
                onComplete={() => {
                  const cursor = document.querySelector(".typed-cursor");
                  if (cursor) cursor.style.display = "none";
                }}
              />
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              Heartland Linguistics is a family-owned language service provider specializing in
              <strong className="important-words-color"> Kurdish, Arabic, and English. </strong>
              Founded and operated by a mother-daughter team, we deliver
              <strong className="important-words-color"> ATA-certified translation</strong> and professional interpretation for on-site, remote (Zoom), and recorded formats.
              Our services include document, video, and audio translation, as well as real-time interpretation for legal, medical, business, and community settings. We are committed to providing accurate, culturally informed communication solutions.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center from-right">
            <img
              src={lingTree}
              alt="Linguistics Tree"
              className="max-w-full md:max-w-3/4 h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-16 md:py-24 bg-gradient-to-b fade-in">
        <div className="text-center mb-12 px-6">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold custom-playfair text-[#862F3D] tracking-wide animate-fade-in">
            Our Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl mx-auto">
            We offer professional language solutions tailored to your needs.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          <div className="bg-[#862F3D] rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">On-Site Interpretation</h3>
            <p className="text-white text-sm">
              Real-time oral interpretation services at your designated location.
            </p>
          </div>
          <div className="bg-[#862F3D] rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">Remote Interpretation</h3>
            <p className="text-white text-sm">
              Seamless interpretation via phone or video conferencing platforms.
            </p>
          </div>
          <div className="bg-[#862F3D] rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-white mb-2">Document Translation</h3>
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
      </section>

      {/* Bio Section */}
      <section id="bio" className="w-full py-16 md:py-24 fade-in px-6 md:px-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl custom-playfair mb-6">About Us</h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Dr. Hiba E. Gharib
          Ph.D. in Language and Linguistics, University of Kansas
          Dr. Hiba E. Gharib is an accomplished linguist, educator, and translator with over two decades of experience in higher education and cross-cultural communication. She earned her Ph.D. in Language and Linguistics from the University of Kansas, specializing in the semantics  in a comparison study between English, Kurdish and Arabic. Her research spans syntax, semantics, pragmatics, discourse analysis, and cross-linguistic studies, with numerous publications in peer-reviewed journals and academic books.
          Dr. Gharib has taught at the University of Sulaimani for more than 16 years and currently serves as an adjunct instructor at Kansas City Kansas Community College. She has designed and delivered courses in linguistics, translation, advanced syntax, academic writing, and TESOL, working with diverse student populations and fostering critical thinking and civic engagement. Her teaching philosophy centers on inspiring curiosity, promoting analytical skills, and creating inclusive learning environments.
          In addition to her academic career, Dr. Gharib is an experienced translator and interpreter, fluent in Kurdish, Arabic, and English, and certified in TESOL. She has collaborated with international organizations, NGOs, and government agencies, providing linguistic expertise in academic, medical, legal, and technical contexts. She is an active member of professional associations, including MICATA, ATA, and the Arab Translators Association, and has presented at numerous international conferences.
          Dr. Gharib's unique blend of scholarly expertise, intercultural competence, and dedication to student success makes her a valuable contributor to any academic community.
        </p>
      </section>

      {/* Footer */}
      <footer id="contact" className="text-white pt-16 pb-8 px-6 md:px-20 lg:px-32 fade-in">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-700 pb-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="mr-3 text-white">Phone No.: </span>
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-white">Email: </span>
                <span>blah.email.com</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-white">Location: </span>
                <span>OP, KS</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Connect</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#862F3D] transition">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
