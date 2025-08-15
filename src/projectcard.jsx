//image, imagename, projectname, languages, description, githubdirectory, projectdirectory
import ScrollStack, { ScrollStackItem } from "./scrollstack";
const ProjectCard = ({ projects }) => {
    return(
            // <div className="project-card">
            //     <img src={image} alt={imagename} />
            //     <article>
            //         {languages.map((lang, index) => (
            //             <span key={index}>{lang}</span>
            //         ))}
            //     </article>
            //     <h2>{projectname}</h2>
            //     <p>{description}</p>
            //     <article>
            //         <a href={githubdirectory} 
            //         target="_blank"
            //         rel="noopener noreferrer"
            //         >View Code</a>
            //         <a href={projectdirectory}
            //         target="_blank"
            //         rel="noopener noreferrer"
            //         >View Project</a>
            //     </article>
            // </div>
   <ScrollStack threshold={window.innerWidth < 768 ? 0.3 : 0.5}>
      {projects?.map((project, index) => (
        <ScrollStackItem key={index}>
          <div className="project-card">
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
        </ScrollStackItem>
      ))}
    </ScrollStack>
    )
}

export default ProjectCard;