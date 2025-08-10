import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Ahmed',
    role: 'CEO, CreativeTech',
    feedback:
      'Working with you was an absolute pleasure! You delivered everything on time and with great quality.',
    image: 'https://i.ibb.co/kqLHg6r/person1.jpg',
  },
  {
    name: 'Tanvir Hossain',
    role: 'Full Stack Developer',
    feedback:
      'Imamul is extremely dedicated and always willing to go the extra mile. His skills in MERN are top-notch.',
    image: 'https://i.ibb.co/dPDh8B1/person2.jpg',
  },
  {
    name: 'Lamia Noor',
    role: 'Project Manager, SoftLab',
    feedback:
      'Professional, responsive, and very talented. Definitely recommend for any web development project!',
    image: 'https://i.ibb.co/7VF0hkP/person3.jpg',
  },
  {
    name: 'Rafiul Islam',
    role: 'Designer, PixelCo',
    feedback:
      'Absolutely loved the communication and design quality. Looking forward to our next collaboration!',
    image: 'https://i.ibb.co/8KfH8P0/person4.jpg',
  },
  {
    name: 'Nusrat Tania',
    role: 'QA Engineer',
    feedback:
      'Very efficient and delivers quality results even under tight deadlines. Highly recommended!',
    image: 'https://i.ibb.co/FKRWmMp/person5.jpg',
  },
];

const cardWidth = 320; // px (width + margin approx)

const Testimonial = () => {
  const [position, setPosition] = useState(0);
  const containerRef = useRef(null);

  // Move position to left continuously
  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setPosition(prev => {
        // Reset position to 0 after full cycle
        const maxScroll = testimonials.length * cardWidth;
        const newPos = prev - 1; // speed: 1px per frame, adjust if needed
        return newPos <= -maxScroll ? 0 : newPos;
      });
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Compute opacity & scale based on card center relative to viewport center
  const getOpacityScale = (cardCenterX, containerWidth) => {
    const centerX = containerWidth / 2;
    const distance = Math.abs(cardCenterX - centerX);
    // distance 0 means center card (max opacity)
    // opacity fades linearly (max 1, min 0.3)
    const maxDistance = containerWidth / 2;
    let opacity = 1 - distance / maxDistance;
    if (opacity < 0.3) opacity = 0.3;
    const scale = 0.8 + 0.2 * opacity; // scale varies between 0.8 to 1

    return { opacity, scale };
  };

  return (
    <div className="py-6 w-full ">
      <h2 className="text-4xl font-bold text-center text-orange-600 ">
        Client Testimonials
      </h2>

      <section
        id="testimonials"
        className=" flex justify-center overflow-hidden"
        style={{ height: 400 }}
      >
        <div
          ref={containerRef}
          className="relative flex items-center"
          style={{
            width: '100%',
            maxWidth: 960,
            overflow: 'hidden',
            position: 'relative',
            userSelect: 'none',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 24,
              position: 'absolute',
              left: position,
            }}
          >
            {/* Duplicate testimonials twice for infinite seamless scroll */}
            {[...testimonials, ...testimonials].map((t, i) => {
              // Calculate card center X
              const cardLeft = position + i * (cardWidth + 24) + cardWidth / 2;
              const containerWidth = containerRef.current
                ? containerRef.current.offsetWidth
                : 960;

              const { opacity, scale } = getOpacityScale(
                cardLeft,
                containerWidth
              );

              return (
                <motion.div
                  key={i}
                  className="rounded-3xl p-6 shadow-lg flex-shrink-0"
                  style={{
                    width: cardWidth,
                    opacity,
                    scale,
                    transformOrigin: 'center',
                  }}
                  layout
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <CardContent data={t} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

const CardContent = ({ data }) => (
  <>
    <div className="flex items-center gap-4 mb-5">
      <img
        src={data.image}
        alt={data.name}
        className="w-16 h-16 rounded-full border-4 border-orange-400"
      />
      <div>
        <h4 className="font-semibold text-xl text-orange-600">{data.name}</h4>
        <p className="text-sm ">{data.role}</p>
      </div>
    </div>
    <p className=" italic">"{data.feedback}"</p>
  </>
);

export default Testimonial;
