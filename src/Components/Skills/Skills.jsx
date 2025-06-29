import React from 'react';
import {
  FaReact,
  FaFire,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaBolt,
  FaJs,
  FaServer,
} from 'react-icons/fa';

const skills = [
  { name: 'React', icon: FaReact, color: 'text-cyan-500' },
  { name: 'Firebase', icon: FaFire, color: 'text-yellow-500' },
  { name: 'Tailwind CSS', icon: FaCss3Alt, color: 'text-sky-400' },
  { name: 'DaisyUI', icon: FaBolt, color: 'text-pink-500' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
  { name: 'MongoDB', icon: FaDatabase, color: 'text-green-700' },
  { name: 'Express.js', icon: FaServer, color: 'text-gray-400' },
  { name: 'Vite', icon: FaJs, color: 'text-purple-500' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 ">
      <h2 className="text-5xl font-bold text-center text-orange-500 mb-14">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map(({ name, icon: Icon, color }, idx) => (
          <div
            key={idx}
            className="card bg-base-200 shadow-xl transform hover:-translate-y-2 hover:shadow-orange-400/50 transition-all duration-300"
          >
            <div className="card-body items-center text-center">
              <Icon className={`text-5xl ${color} drop-shadow-lg`} />
              <h3 className="card-title text-lg mt-2">{name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
