import { Project } from "../../types/services";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="cursor-pointer">
      <div className="w-[300px] h-[250px] bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1 ">
        <img
          src={project.image}
          alt="project-img"
          className=" w-full h-[150px] object-cover rounded-md"
        />
        <div className="mt-4 flex items-center text-center justify-center text-white">
          {project.title}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
