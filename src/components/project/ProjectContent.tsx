import React from "react";
import { FaSpotify, FaYoutube, FaGlobe, FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaTiktok } from "react-icons/fa";


interface ProjectContentProps {
  content: React.ReactNode;
  features: string[];
  projectLinks: { platform: string; url: string }[];
}

export default function ProjectContent({
  content,
  features,
  projectLinks
}: ProjectContentProps) {
  // Define iconMapping inside the component
  const iconMapping: { [key: string]: React.ReactNode } = {
    spotify: <FaSpotify />,
    youtube: <FaYoutube />,
    github: <FaGithub />,
    facebook: <FaFacebook />,
    instagram: <FaInstagram />,
    linkedin: <FaLinkedin />,
    twitter: <FaTwitter />,
    tiktok: <FaTiktok />,
    web: <FaGlobe />,
  };

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 prose prose-lg dark:prose-invert dark:text-white">
            {content}
          </div>

          <div>
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Key Features
              </h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    </span>
                    <span className="ml-3 text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Project Links Section */}
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-6">
                Project Links
              </h2>
              <div className="flex space-x-4">
                {projectLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-2xl hover:text-opacity-80"
                  >
                    {/* Render icon for each platform */}
                    {iconMapping[link.platform.toLowerCase()] || <FaGlobe />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
