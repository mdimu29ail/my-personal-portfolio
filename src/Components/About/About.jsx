import React, { useState, useEffect } from 'react';
import img from '../../assets/IMG_0966.png';
// Custom CSS for blinking cursor (you can add this in your global CSS or Tailwind config)
const cursorStyle = `
  @keyframes blink {
    0%, 50%, 100% { opacity: 1; }
    25%, 75% { opacity: 0; }
  }
  .blinking-cursor {
    animation: blink 1.2s step-end infinite;
  }
`;

const About = () => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const rolesToAnimate = ['a Web Developer.'];
  const typingPeriod = 2000; // pause after full text typed

  useEffect(() => {
    // Inject blinking cursor styles into the document head
    const styleTag = document.createElement('style');
    styleTag.textContent = cursorStyle;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      tick();
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, typingSpeed]);

  const tick = () => {
    const i = loopNum % rolesToAnimate.length;
    const fullText = rolesToAnimate[i];

    const updatedText = isDeleting
      ? fullText.substring(0, typedText.length - 1)
      : fullText.substring(0, typedText.length + 1);

    setTypedText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(typingPeriod); // pause before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
      setTypingSpeed(500); // pause before typing next word
    } else {
      setTypingSpeed(isDeleting ? 75 : 150);
    }
  };

  return (
    <section id="about" className=" p-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-orange-500">About Me</h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
        {/* Profile Image Container */}
        <div className="flex-shrink-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full border-8 border-orange-500 shadow-lg overflow-hidden">
          <img
            src={img}
            alt="A portrait of MD"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Me Text Content */}
        <div className="space-y-6 flex-1 max-w-2xl text-center lg:text-left px-4">
          <h3 className="text-3xl lg:text-4xl font-bold">
            <span>I am Imamul, I am </span>
            <span className="text-orange-500">{typedText}</span>
            <span className="blinking-cursor">|</span>
          </h3>
          <p className=" text-lg lg:text-xl leading-relaxed w-full">
            "I am a passionate full-stack web developer with hands-on experience
            in building dynamic and responsive web applications. My expertise
            includes working with modern technologies like React for building
            user interfaces, Tailwind CSS for sleek and efficient styling, and
            Firebase for authentication and real-time databases. On the backend,
            I use Node.js and Express.js to develop scalable APIs, and MongoDB
            as my primary database for managing application data. I love turning
            ideas into reality through clean, efficient code and intuitive user
            experiences. I'm always eager to learn, solve problems, and
            collaborate on exciting projects."
          </p>
          <a
            href="/My-CV.pdf"
            download
            className="inline-block bg-orange-600 hover:bg-orange-700 border border-orange-600 px-8 py-3 text-lg font-semibold text-white rounded-lg transition-transform duration-300 hover:scale-105 shadow-md"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
