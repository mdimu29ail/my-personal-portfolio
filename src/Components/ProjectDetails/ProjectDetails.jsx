import React from 'react';
import { useParams, Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faNodeJs,
  faJs,
  faGitAlt,
  faMarkdown,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import ImageCarousel from '../Carousel/Carousel';
import projects from '../ProjectDatabase/projectData.js';

// Icon mapping
const getTechIcon = tech => {
  switch (tech.toLowerCase()) {
    case 'react':
      return faReact;
    case 'node.js':
    case 'nodejs':
      return faNodeJs;
    case 'express':
      return faJs;
    case 'mongodb':
      return faDatabase;
    case 'firebase':
      return '🔥';
    case 'tailwindcss':
      return '🌬️';
    case 'daisyui':
      return '🌼';
    case 'javascript':
    case 'js':
      return faJs;
    case 'git':
      return faGitAlt;
    case 'markdown':
      return faMarkdown;
    default:
      return null;
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-20 text-red-500">
        <h2>❌ Project not found</h2>
        <Link to="/#projects" className="btn mt-4">
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 bg-base-200 min-h-screen text-white">
      <div className="max-w-5xl mx-auto space-y-8 text-center">
        <h2 className="text-4xl font-bold text-orange-500">{project.title}</h2>
        <p className="text-lg text-gray-300">
          {project.longDescription || project.description}
        </p>

        {/* Image Carousel */}
        <ImageCarousel images={project.images} />

        {/* Technologies with Icons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {project.technologies.map((tech, i) => {
            const icon = getTechIcon(tech);
            return (
              <span
                key={i}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 font-medium"
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
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-orange-600 text-white"
          >
            Live Site
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-info"
          >
            GitHub
          </a>
          <Link to="/#projects" className="btn btn-outline btn-success">
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
