// Projects.jsx

import Projects from '../Projects/Projects';
import projects from '../ProjectDatabase/projectData.js';
const ProjectData = () => {
  return (
    <section id="projects" className="py-6 w-full  mx-auto ">
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
