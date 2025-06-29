import React from 'react';
import { Link } from 'react-router';
import ImageCarousel from '../Carousel/Carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faNodeJs,
  faJs,
  faGitAlt,
  faMarkdown,
} from '@fortawesome/free-brands-svg-icons';

import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const getTechIcon = tech => {
  switch (tech.toLowerCase()) {
    case 'react':
      return faReact;
    case 'node.js':
    case 'nodejs':
      return faNodeJs;
    case 'javascript':
    case 'js':
      return faJs;
    case 'git':
      return faGitAlt;
    case 'markdown':
      return faMarkdown;
    case 'mongodb':
      return faDatabase;
    case 'express':
      return faJs;
    case 'tailwindcss':
      return '🌬️';
    case 'daisyui':
      return '🌼';
    case 'firebase':
      return '🔥';
    default:
      return null;
  }
};

const Projects = ({ project }) => {
  return (
    <section className="px-4">
      <div className="space-y-5 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-center rounded-2xl shadow-2xl">
        {/* Project Image Carousel */}
        <div className="w-full md:w-1/2 flex justify-center mt-12">
          <ImageCarousel images={project.images} />
        </div>

        {/* Project Content */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left flex flex-col justify-center">
          <h3 className="text-3xl font-bold">{project.title}</h3>
          <p>{project.shortDescription}</p>

          {/* Technologies List with Icons */}
          <div className="flex flex-wrap gap-3">
            {project.technologies?.map((tech, i) => {
              const icon = getTechIcon(tech);
              return (
                <span
                  key={i}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold"
                >
                  {typeof icon === 'string' ? (
                    icon
                  ) : (
                    <FontAwesomeIcon icon={icon} />
                  )}
                  {tech}
                </span>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-orange-600 "
            >
              Live Site
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn  "
            >
              GitHub
            </a>
            <Link to={project.details} className="btn ">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
