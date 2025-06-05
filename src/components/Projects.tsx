import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Web Development': 'from-blue-500 to-cyan-500',
      'Mobile App': 'from-purple-500 to-pink-500',
      'AI/ML': 'from-green-500 to-emerald-500',
      'E-commerce': 'from-yellow-500 to-orange-500',
      'SaaS': 'from-indigo-500 to-blue-500',
      'Design': 'from-pink-500 to-rose-500',
      'default': 'from-primary-500 to-secondary-500'
    };
    return colors[category as keyof typeof colors] || colors.default;
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-white via-neutral-50 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 dark:text-white mb-6">
            Our <span className="gradient-text">Projects</span> 🎨
          </h2>
          <p className="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
            Discover our portfolio of innovative solutions that have transformed businesses across industries
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={`/projects/${project._id}`}
                className="group block h-full"
              >
                <div className="card card-hover h-full overflow-hidden">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.project_cover_img_link}
                      alt={project.project_title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r ${getCategoryColor(project.project_category_main)} rounded-full shadow-lg`}>
                        {project.project_category_main}
                      </span>
                    </div>
                    
                    {/* View Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    {/* Bottom Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl lg:text-2xl font-display font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                        {project.project_title}
                      </h3>
                      <p className="text-neutral-200 mb-4 line-clamp-2">
                        {project.project_sub_title}
                      </p>
                      <div className="flex items-center text-white group-hover:text-primary-300 transition-colors">
                        <span className="font-medium">View Project</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.project_category_sub.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.project_category_sub.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium text-neutral-500 dark:text-neutral-500">
                          +{project.project_category_sub.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed line-clamp-3">
                      {project.project_desc}
                    </p>
                    
                    {/* Key Features Preview */}
                    {project.project_keyfeatures.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                        <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2">Key Features:</p>
                        <div className="flex flex-wrap gap-1">
                          {project.project_keyfeatures.slice(0, 2).map((feature, featureIndex) => (
                            <span 
                              key={featureIndex}
                              className="text-xs text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded"
                            >
                              {feature}
                            </span>
                          ))}
                          {project.project_keyfeatures.length > 2 && (
                            <span className="text-xs text-neutral-500 dark:text-neutral-500">
                              +{project.project_keyfeatures.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
            Have a project in mind? Let's bring your vision to life!
          </p>
          <motion.a
            href="#contact"
            className="btn-primary inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <ExternalLink className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
