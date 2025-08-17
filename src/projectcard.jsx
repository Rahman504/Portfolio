import React from "react";

const ProjectCard = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return <p>No projects available</p>;
  }

  return (
    <section id="projects">
      <div className="projects-scroll">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.imagename} />
            <article>
              {project.languages?.map((lang, i) => (
                <span key={i}>{lang}</span>
              ))}
            </article>
            <h2>{project.projectname}</h2>
            <p>{project.description}</p>
            <article>
              <a
                href={project.githubdirectory}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
              <a
                href={project.projectdirectory}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
