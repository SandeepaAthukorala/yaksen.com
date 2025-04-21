import ProjectCard from "./ProjectCard";
import { Project } from "../../types/services";

const ProjectsSection = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
        Projects
      </h2>

      {/* projects */}
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
