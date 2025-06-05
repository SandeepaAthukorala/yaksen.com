import React from "react";
import { motion } from "framer-motion";
import {
  FaSquareFacebook,
  FaGithub,
  FaX,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

import {
  TbBrandFiverr,
  TbBrandUpwork
} from "react-icons/tb";

import { SiFreelancer } from "react-icons/si";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Brain, Mail, Download, Star, Award, Code, Briefcase } from "lucide-react";
import Navbar from "../../components/Navbar";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import NotFound from "../NotFound";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { getFeaturedProjects } from "../../apiCalls/ApiCalls"; // Keep if needed, but local fetch is implemented
import Loading from "../Loading";
import teamData from "../../data/team.json";
import projectsData from "../../data/projects.json"; // Import projects data

interface SocialMedia {
  platform: string;
  link: string;
}
interface FreeLance {
  platform: string;
  link: string;
}

interface MemberData {
  _id: string;
  member_image_link: string;
  member_name: string;
  member_position: string;
  member_mail?: string;
  member_socialmedia: SocialMedia[];
  member_freelance_sites: FreeLance[];
  member_about: string;
  member_experties: string[];
  member_featured_projects: string[];
  member_resume_link: string;
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
  project_showcase: { video_link: string[]; image_links: string[]; web_links?: string[] }; // Added web_links optional
}

export default function TeamMemberPage() {
  const [member, setMember] = useState<MemberData | undefined>(undefined); // Initialize as undefined
  const [featuredProjects, setFeaturedProjects] = useState<projectData[]>([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams<{ id: string }>(); // Ensure id type is string
  const navigate = useNavigate();

  // Fetch Member Data Locally
  const getMember = (memberId: string | undefined) => {
    if (!memberId) {
      console.warn("TeamMemberPage: ID is undefined");
      setMember(undefined);
      setLoading(false); // Stop loading if no ID
      return;
    }

    console.log("TeamMemberPage: Attempting to find member with ID:", memberId);
    const foundMember = (teamData as MemberData[]).find((m) => m._id === memberId);
    if (foundMember) {
      console.log("TeamMemberPage: Member found:", foundMember.member_name);
    } else {
      console.warn("TeamMemberPage: Member not found for ID:", memberId);
    }
    setMember(foundMember);
  };

  // Fetch Featured Projects Locally
  const getFeaturedProjectsLocal = (projectIds: string[]) => {
    if (!projectIds || projectIds.length === 0) {
      setFeaturedProjects([]);
      return;
    }

    console.log("TeamMemberPage: Fetching featured projects for IDs:", projectIds);
    const foundProjects = (projectsData as projectData[]).filter((p) =>
      projectIds.includes(p._id)
    );
    console.log("TeamMemberPage: Found featured projects:", foundProjects.length);
    setFeaturedProjects(foundProjects);
  };

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  useEffect(() => {
    getMember(id);
  }, [id]);

  useEffect(() => {
    if (member && member.member_featured_projects) {
      getFeaturedProjectsLocal(member.member_featured_projects);
    } else {
      console.log("TeamMemberPage: No featured projects for member:", member?.member_name);
      setFeaturedProjects([]);
    }
    setLoading(false); // Set loading to false after processing
  }, [member]);

  useScrollToTop();

  if (loading) {
    console.log("TeamMemberPage: Rendering Loading component");
    return <Loading />;
  }

  if (!member) {
    console.log("TeamMemberPage: Rendering NotFound component because member is not found for ID:", id);
    return <NotFound />;
  }

  console.log("TeamMemberPage: Rendering member page for:", member.member_name);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800">
      <Navbar />

      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] [background-size:20px_20px]" />
      </div>

      <div className="relative pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Profile Section */}
            <motion.div 
              className="lg:col-span-1 flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-24">
                <motion.div 
                  className="relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-neutral-200/50 dark:border-neutral-700/50 overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="aspect-square rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={member.member_image_link}
                        alt={member.member_name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    <motion.h1 
                      className="text-3xl font-display font-bold text-neutral-900 dark:text-white mb-2 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {member.member_name}
                    </motion.h1>
                    
                    <div className="inline-block w-full text-center mb-6">
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full">
                        <p className="text-lg font-medium bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                          {member.member_position}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 text-center">
                    {member.member_mail?.trim() !== "" && (
  <motion.a
    href={`mailto:${member.member_mail}`}
    className="flex justify-center items-center gap-3 p-3 bg-primary-500/10 hover:bg-primary-500/20 rounded-xl text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 group"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="p-2 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors">
      <Mail className="h-4 w-4" />
    </div>
    <span className="font-medium">{member.member_mail}</span>
  </motion.a>
)}


                      <div className="flex flex-wrap gap-3 justify-center">
                        {member.member_socialmedia.map((item, index) => (
                          <motion.a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-xl hover:bg-primary-500/20 dark:hover:bg-primary-500/20 transition-all duration-200 group"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {item.platform &&
                              item.platform.toLowerCase() === "github" && (
                                <FaGithub className="h-5 w-5 text-neutral-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                              )}
                            {item.platform &&
                              item.platform.toLowerCase() === "linkedin" && (
                                <FaLinkedin className="h-5 w-5 text-neutral-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                              )}
                            {item.platform &&
                              item.platform.toLowerCase() === "facebook" && (
                                <FaSquareFacebook className="h-5 w-5 text-neutral-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                              )}
                            {item.platform &&
                              item.platform.toLowerCase() === "x" && (
                                <FaX className="h-5 w-5 text-neutral-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                              )}
                            {item.platform &&
                              item.platform.toLowerCase() === "youtube" && (
                                <FaYoutube className="h-5 w-5 text-neutral-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                              )}
                            {item.platform &&
                              item.platform.toLowerCase() === "instagram" && (
                                <FaInstagram className="h-5 w-5 text-neutral-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                              )}
                          </motion.a>
                        ))}
                      </div>

                      {/* Freelance Platforms */}
                      {member.member_freelance_sites &&
                        member.member_freelance_sites.length > 0 && (
                          <motion.div 
                            className="mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <div className="flex items-center justify-center gap-2 mb-4">
                              <Briefcase className="h-4 w-4 text-primary-600" />
                              <h3 className="text-lg font-display font-semibold text-neutral-900 dark:text-white">
                                Freelance Platforms
                              </h3>
                            </div>
                            <div className="flex flex-wrap gap-3 justify-center">
                              {member.member_freelance_sites.map((item, index) => (
                                <motion.a
                                  key={index}
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-3 bg-secondary-500/10 hover:bg-secondary-500/20 rounded-xl transition-all duration-200 group"
                                  whileHover={{ scale: 1.1, y: -2 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  {item.platform &&
                                    item.platform.toLowerCase() === "fiverr" && (
                                      <TbBrandFiverr className="h-5 w-5 text-neutral-700 dark:text-neutral-300 group-hover:text-secondary-600 dark:group-hover:text-secondary-400" />
                                    )}
                                  {item.platform &&
                                    item.platform.toLowerCase() === "upwork" && (
                                      <TbBrandUpwork className="h-5 w-5 text-neutral-700 dark:text-neutral-300 group-hover:text-secondary-600 dark:group-hover:text-secondary-400" />
                                    )}
                                  {item.platform &&
                                    item.platform.toLowerCase() === "freelancer" && (
                                      <SiFreelancer className="h-5 w-5 text-neutral-700 dark:text-neutral-300 group-hover:text-secondary-600 dark:group-hover:text-secondary-400" />
                                    )}
                                </motion.a>
                              ))}
                            </div>
                          </motion.div>
                        )}

                      {/* Resume Download */}
                      {member.member_resume_link && (
                        <motion.div 
                          className="mt-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <motion.a
                            href={member.member_resume_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Download className="h-5 w-5 group-hover:animate-bounce" />
                            <span className="font-medium">Download Resume</span>
                          </motion.a>
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-primary-400 rounded-full opacity-20" />
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary-400 rounded-full opacity-20" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div 
              className="lg:col-span-2 mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-8">
                {/* About Section */}
                <motion.div 
                  className="relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-neutral-200/50 dark:border-neutral-700/50 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary-500/20 rounded-xl">
                        <Star className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white">
                        About
                      </h2>
                    </div>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {member.member_about}
                    </p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-30" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary-400 rounded-full opacity-30" />
                </motion.div>

                {/* Expertise Section */}
                {member.member_experties && member.member_experties.length > 0 && (
                  <motion.div 
                    className="relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-neutral-200/50 dark:border-neutral-700/50 overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/5 via-transparent to-primary-500/5" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-secondary-500/20 rounded-xl">
                          <Code className="h-6 w-6 text-secondary-600 dark:text-secondary-400" />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white">
                          Expertise
                        </h2>
                      </div>
                      <div className="space-y-4">
                        {member.member_experties.map((skill, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center gap-4 p-4 bg-neutral-50/80 dark:bg-neutral-700/80 backdrop-blur-sm rounded-xl border border-neutral-200/50 dark:border-neutral-600/50 hover:bg-neutral-100/80 dark:hover:bg-neutral-600/80 transition-all duration-200 group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <div className="p-2 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors">
                              <Brain className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                            </div>
                            <span className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
                              {skill}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-secondary-400 rounded-full opacity-30" />
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary-400 rounded-full opacity-30" />
                  </motion.div>
                )}

                {/* Featured Projects Section */}
                {featuredProjects && featuredProjects.length > 0 && (
                  <motion.div 
                    className="relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-neutral-200/50 dark:border-neutral-700/50 overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-primary-500/20 rounded-xl">
                          <Award className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white">
                          Featured Projects
                        </h2>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2">
                        {featuredProjects.map((project, index) => (
                          <motion.div
                            key={project._id}
                            className="group relative bg-neutral-50/80 dark:bg-neutral-700/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-neutral-200/50 dark:border-neutral-600/50"
                            onClick={() => handleProjectClick(project._id)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                          >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20">
                              <motion.img
                                src={project.project_cover_img_link}
                                alt={project.project_title}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                              
                              {/* Category Badge */}
                              <div className="absolute top-4 left-4">
                                <div className="px-3 py-1 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-full">
                                  <span className="text-xs font-medium bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    {project.project_category_main}
                                  </span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Project Content */}
                            <div className="p-6">
                              <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                {project.project_title}
                              </h3>
                              <p className="text-neutral-600 dark:text-neutral-300 text-sm line-clamp-2">
                                {project.project_sub_title}
                              </p>
                            </div>
                            
                            {/* Decorative Elements */}
                            <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-20 group-hover:opacity-60 transition-opacity" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-30" />
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary-400 rounded-full opacity-30" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
