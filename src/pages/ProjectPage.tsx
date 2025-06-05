import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProjectHero from "../components/project/ProjectHero";
import ProjectContent from "../components/project/ProjectContent";
import ProjectMedia from "../components/project/ProjectMedia";
import NotFound from "./NotFound";
import { useScrollToTop } from "../hooks/useScrollToTop";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
import projectsData from "../data/projects.json"; // Import the local JSON data
import Loading from "./Loading";

    interface ProjectData {
      _id: string;
      project_title: string;
      project_sub_title: string;
      project_cover_img_link: string;
      project_category_main: string;
      project_category_sub: string[];
      project_links: { platform: string; url: string }[];
      project_desc: string;
      project_keyfeatures: string[];
      project_showcase: { video_link: string[]; image_links: string[]; web_links: string[] };
    }

    export default function ProjectPage() {
      const [project, setProject] = useState<ProjectData>();
      const [loading, setLoading] = useState(true);

      const { id } = useParams();

      useEffect(() => {
        // Load the project data from the local JSON file
        const project = (projectsData as ProjectData[]).find((p) => p._id === id);
        if (project) {
          setProject(project);
        }
        setLoading(false);
      }, [id]);

      useScrollToTop();

      if (loading) {
        return <Loading />;
      }

      if (!project) {
        return <NotFound />;
      }

      const hasShowcaseItems =
        project.project_showcase &&
        (project.project_showcase.video_link.length > 0 ||
          project.project_showcase.image_links.length > 0 ||
          project.project_showcase.web_links?.length > 0);

      return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] [background-size:20px_20px]" />
      </div>
      
      <div className="relative">
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ProjectHero
            title={project.project_title}
            category={project.project_category_main}
            description={project.project_sub_title}
            image={project.project_cover_img_link}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ProjectContent
            content={project.project_desc}
            features={project.project_keyfeatures}
            projectLinks={project.project_links}
          />
        </motion.div>
        {hasShowcaseItems && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ProjectMedia
              videos={project.project_showcase.video_link}
              gallery={project.project_showcase.image_links}
              webLinks={project.project_showcase.web_links || []}
            />
          </motion.div>
        )}
        <Footer />
      </div>
    </div>
  );
    }
