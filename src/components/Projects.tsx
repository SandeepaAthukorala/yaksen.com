import { useEffect, useState } from "react";
    import { ArrowRight } from "lucide-react";
    import { Link } from "react-router-dom";
    import projectData from "../data/projects.json"; // Import the local JSON data

    interface ProjectData {
      _id: string;
      project_title: string;
      project_sub_title: string;
      project_cover_img_link: string;
      project_category_main: string;
      project_category_sub: string[];
      project_desc: string;
      project_keyfeatures: string[];
      project_showcase: { video_link: string[]; image_links: string[] };
      order: number;
    }

    export default function Projects() {
      const [projects, setProjects] = useState<ProjectData[]>([]);

      useEffect(() => {
        // Load the project data from the local JSON file and sort by order
        const sortedProjects = (projectData as ProjectData[]).sort((a, b) => a.order - b.order);
        setProjects(sortedProjects);
      }, []);

      return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Our Projects 🎨
              </h2>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {projects.map((project) => (
                <Link
                  key={project._id}
                  to={`/projects/${project._id}`}
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img
                      src={project.project_cover_img_link}
                      alt={project.project_title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-primary/80 rounded-full mb-2">
                      {project.project_category_main}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.project_title}
                    </h3>
                    <p className="text-gray-200 mb-4">
                      {project.project_sub_title}
                    </p>
                    <div className="flex items-center text-white group-hover:text-primary transition-colors">
                      <span>Learn more</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      );
    }
