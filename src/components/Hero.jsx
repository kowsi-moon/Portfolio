import React from "react";
import { Link } from "react-router-dom";
import profilePhoto from "../assets/profile.jpg"; 

const SocialButton = ({ children, url = "#" }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 text-gray-700 hover:text-blue-600 transition-colors">
    {children}
  </a>
);

export default function Hero() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center font-sans pt-20 md:pt-0">
      <div className="max-w-6xl w-full mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
        
        {/* Left Side: Profile Card */}
        <div className="relative w-full max-w-[320px] md:max-w-none md:w-[450px] h-[500px] md:h-[600px] flex-shrink-0">
          <div className="absolute left-0 top-0 w-3/4 h-full bg-[#e9dfd4]" />
          <div className="absolute left-6 top-6 md:left-20 md:top-14 w-[260px] md:w-[350px] bg-[#f6efe9] shadow-xl overflow-hidden">
            <div className="p-8 pt-12 text-center">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden mx-auto bg-gray-300">
                <img src={profilePhoto} alt="Kowsalya" className="w-full h-200 object-cover" />
              </div>
              <h3 className="mt-6 text-2xl md:text-3xl font-bold text-gray-900">Kowsalya</h3>
              <div className="mt-4 w-12 h-0.5 bg-blue-600 mx-auto" />
              <p className="mt-6 uppercase tracking-widest text-[10px] md:text-xs font-semibold text-gray-600">Frontend Developer</p>
            </div>
            <div className="bg-white py-4 flex justify-center gap-4 border-t border-gray-100">
                {/* Add your SVGs here (GitHub, LinkedIn, etc.) */}
            </div>
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-[60px] md:text-[100px] leading-tight font-bold text-black">Hello</h1>
          <p className="mt-2 text-xl md:text-2xl font-semibold text-gray-800">Here's who I am & what I do</p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <Link to="/resume" className="bg-blue-600 text-white font-bold px-8 py-2 rounded-full text-xs shadow-md">RESUME</Link>
            <Link to="/projects" className="bg-white text-black font-bold px-8 py-2 rounded-full text-xs border-2 border-black">PROJECTS</Link>
          </div>
          <p className="mt-8 max-w-sm text-gray-700 leading-relaxed text-sm mx-auto md:mx-0">
            I'm a Frontend Developer passionate about building clean and functional user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}