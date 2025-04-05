import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProjectHero from "../components/project/ProjectHero";
import ProjectContent from "../components/project/ProjectContent";
import ProjectMedia from "../components/project/ProjectMedia";
import NotFound from "./NotFound";
import { useScrollToTop } from "../hooks/useScrollToTop";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
import { getSingleProject } from "../apiCalls/ApiCalls";
import Loading from "./Loading";

interface projectData {
  project_title: string;
  project_sub_title: string;
  project_cover_img_link: string;
  project_category_main: string;
  project_category_sub: string[];
  project_links: { platform: string; url: string }[];
  project_desc: string;
  project_keyfeatures: string[];
  project_showcase: { video_link: string[], image_links: string[], web_links: string[] };
}

export default function ProjectPage() {
  const [project, setProject] = useState<projectData>();
  const [loading, setLoading] = useState(true);



  const { id } = useParams();

  const getProjectData = async (id: string | undefined) => {
    try {
      const res = await getSingleProject(id);
      setProject(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjectData(id);
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
      project.project_showcase.web_links.length > 0);


  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <ProjectHero
        title={project.project_title}
        category={project.project_category_main}
        description={project.project_sub_title}
        image={project.project_cover_img_link}
      />
      <ProjectContent
        content={project.project_desc}
        features={project.project_keyfeatures}
        projectLinks={project.project_links}
      />
      {hasShowcaseItems && (
        <ProjectMedia

          
          videos={project.project_showcase.video_link}
          gallery={project.project_showcase.image_links}
          webLinks={project.project_showcase.web_links}
        />
      )}
      <Footer />
    </div>
  );
}
