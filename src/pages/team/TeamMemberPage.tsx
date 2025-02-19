import {
  FaSquareFacebook,
  FaGithub,
  FaX,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6"; // Add this import

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Brain, Mail } from "lucide-react"; // No need to import Facebook from lucide-react anymore
import Navbar from "../../components/Navbar";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import NotFound from "../NotFound";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { getFeaturedProjects, getSingleMember } from "../../apiCalls/ApiCalls";
import Loading from "../Loading";

interface SocialMedia {
  platform: string;
  link: string;
}

interface MemberData {
  member_image_link: string;
  member_name: string;
  member_position: string;
  member_mail: string;
  member_socialmedia: SocialMedia[];
  member_about: string;
  member_experties: string[];
  member_featured_projects: string[];
  member_resume_link: string;  // Add this field for the resume link
}

interface projectData {
  _id: string;
  project_title: string;
  project_sub_title: string;
  project_cover_img_link: string;
  project_category_main: string;
  project_category_sub: string[];
  project_desc: string;
  project_keyfeatures: string[];
  project_showcase: { video_link: string[]; image_links: string[] };
}

export default function TeamMemberPage() {
  const [member, setMember] = useState<MemberData>();
  const [featuredProjects, setFeaturedProjects] = useState<projectData[]>([]);
  const [loading, setLoading] = useState(true);

  const getMember = async (id: string | undefined) => {
    try {
      const res = await getSingleMember(id);
      setMember(res.data);
    } catch (error) {}
  };

  const getFeaturedProjectData = async (id: string | undefined) => {
    try {
      const res = await getFeaturedProjects(id);
      setFeaturedProjects(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMember(id);
    getFeaturedProjectData(id);
  }, []);

  useScrollToTop();
  const { id } = useParams();
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  if (!member) {
    return <NotFound />;
  }

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Profile Section */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center">
              <div className="sticky top-24">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                  <div className="aspect-square rounded-xl overflow-hidden mb-6">
                    <img
                      src={member.member_image_link}
                      alt={member.member_name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {member.member_name}
                  </h1>
                  <p className="text-primary font-medium mb-4 text-center">
                    {member.member_position}
                  </p>

                  <div className="space-y-4 text-center">
                    <a
                      href={`mailto:${member.member_mail}`}
                      className="flex justify-center items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      {member.member_mail}
                    </a>

                    <div className="flex space-x-4 justify-center">
                      {member.member_socialmedia.map((item, index) => (
                        <a
                          key={index}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 bg-gray-100 dark:bg-gray-700 rounded-lg hover:text-primary"
                        >
                          {item.platform &&
                            item.platform.toLowerCase() === "github" && (
                              <FaGithub className="h-6 w-6 text-black dark:text-white" />
                            )}
                          {item.platform &&
                            item.platform.toLowerCase() === "linkedin" && (
                              <FaLinkedin className="h-6 w-6 text-black dark:text-white" />
                            )}
                          {item.platform &&
                            item.platform.toLowerCase() === "facebook" && (
                              <FaSquareFacebook className="h-6 w-6 text-black dark:text-white" />
                            )}
                          {item.platform &&
                            item.platform.toLowerCase() === "x" && (
                              <FaX className="h-6 w-6 text-black dark:text-white" />
                            )}
                          {item.platform &&
                            item.platform.toLowerCase() === "youtube" && (
                              <FaYoutube className="h-6 w-6 text-black dark:text-white" />
                            )}
                          {item.platform &&
                            item.platform.toLowerCase() === "instagram" && (
                              <FaInstagram className="h-6 w-6 text-black dark:text-white" />
                            )}
                        </a>
                      ))}
                    </div>
                    {/* Download Resume Button */}
                    {member.member_resume_link && (
                      <div className="mt-6">
                        <a
                          href={member.member_resume_link}
                          download
                          className="inline-block bg-primary text-white py-2 px-6 rounded-lg text-lg hover:bg-primary-dark"
                        >
                          Download Resume
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-2 mt-12 lg:mt-0">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    About
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {member.member_about}
                  </p>
                </div>

                {member.member_experties && (
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Expertise
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      {member.member_experties.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                        >
                          <Brain className="h-5 w-5 text-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {featuredProjects && (
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {featuredProjects.map((project, index) => (
                        <div
                          key={index}
                          onClick={() => handleProjectClick(project._id)}
                          style={{
                            backgroundImage: `url(${project.project_cover_img_link})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                          className="relative bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
                        >
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>

                          {/* Content */}
                          <div className="relative z-10">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                              {project.project_title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                              {project.project_sub_title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
