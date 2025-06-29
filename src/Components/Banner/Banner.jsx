import React, { useState, useEffect } from 'react';
import img from '../../assets/IMG_0966.png';

const Banner = () => {
  const fullText = 'a Jr. Web Developer';
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 150; // speed of typing
    const delayAfterFullText = 2000; // wait time before restarting

    let timeout;

    if (charIndex < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[charIndex]);
        setCharIndex(prev => prev + 1);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
      }, delayAfterFullText);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, fullText]);

  return (
    <div id="home" className=" py-5">
      <div className="">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-end">
            <img src={img} alt="Profile" className="w-96" />
          </div>
          <div className="flex-1 p-10 space-y-5">
            <h4 className="text-2xl font-semibold  italic">Hello, I am</h4>
            <h1 className="text-6xl font-bold italic">ImAmul Islam</h1>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold italic">
              <span>And I'm </span>
              <span className="typed-text text-orange-600">
                {displayedText}
              </span>
              <span className="cursor text-orange-600">|</span>
            </h2>
            <div>
              <p>
                I’m a MERN Stack Developer, experienced in building full-stack
                web applications using MongoDB, Express.js, React, and Node.js.
                I create scalable, responsive, and user-friendly solutions.
              </p>
            </div>
            <button className="bg-orange-600 hover:bg-transparent border border-orange-600 px-6 py-2 text-lg font-semibold text-white rounded-md mt-10 cursor-pointer">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
