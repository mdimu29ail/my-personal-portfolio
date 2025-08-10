import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t-0 shadow-2xl border-amber-700 py-5 w-full">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        {/* Logo and text */}
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-bold italic h-full">
            <span className="text-orange-600">I</span>mu
          </h2>

          {/* <h2 className="text-md mt-3"></h2> */}
        </div>

        {/* Footer Links */}
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contacts">Contacts</a>

          <a href="#testimonials">Testimonials</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
