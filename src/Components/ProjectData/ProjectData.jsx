// Projects.jsx

import Projects from '../Projects/Projects';
import projects from '../ProjectDatabase/projectData.js';
const ProjectData = () => {
  return (
    <section
      id="projects"
      className="py-16 px-4 bg-base-100 max-w-6xl mx-auto "
    >
      <h2 className="text-5xl font-bold text-center mb-16 text-orange-500">
        My Projects
      </h2>
      {projects.map((project, idx) => (
        <Projects key={idx} project={project} />
      ))}
    </section>
  );
};

export default ProjectData;
