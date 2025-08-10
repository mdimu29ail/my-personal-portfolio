import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img from '../../assets/IMG_0966.png';

const Banner = () => {
  const fullText = 'a Jr. Web Developer';
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 150;
    const delayAfterFullText = 2000;

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
    <div id="home" className="w-full py-6">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Image - Slide from Bottom */}
        <motion.div
          className="flex flex-1 justify-end"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={img} alt="Profile" className="w-96" />
        </motion.div>

        {/* Text - Slide from Right */}
        <motion.div
          className="flex-1 p-10 space-y-5"
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4 className="text-2xl font-semibold italic">Hello, I am</h4>
          <h1 className="text-6xl font-bold italic">ImAmul Islam</h1>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold italic">
            <span>And I'm </span>
            <span className="typed-text text-orange-600">{displayedText}</span>
            <span className="cursor text-orange-600">|</span>
          </h2>
          <p>
            I’m a MERN Stack Developer, experienced in building full-stack web
            applications using MongoDB, Express.js, React, and Node.js. I create
            scalable, responsive, and user-friendly solutions.
          </p>
          <div className="flex gap-5">
            <a className="inline-block bg-orange-600 hover:bg-orange-700 border border-orange-600 px-4 py-2 text-lg font-semibold text-white rounded-lg transition-transform duration-300 hover:scale-105 shadow-md">
              Hire Me
            </a>
            <a
              href="https://drive.google.com/file/d/1ovkfIjnnr39qiqV6ABBjHc8Ty0DTQthe/view?usp=sharing"
              download
              className="inline-block bg-orange-600 hover:bg-orange-700 border border-orange-600 px-4 py-2 text-lg font-semibold text-white rounded-lg transition-transform duration-300 hover:scale-105 shadow-md"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
