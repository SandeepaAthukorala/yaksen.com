import React from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

interface TeamMemberProps {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  url_head:string;
}

export default function TeamMember({
  id,
  name,
  role,
  image,
  bio,
  email,
  url_head,
}: TeamMemberProps) {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${url_head}`;
  };

  // Determine the base URL dynamically
  const isLocalhost = window.location.hostname === "localhost";
  const linkPath = isLocalhost ? `/team/${id}` : `/team/${url_head}`;

  return (
    <Link to={linkPath} className="block text-center group">
      <div className="relative group">
        <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary">
          {name}
        </h4>
        <p className="text-primary font-medium">{role}</p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">{bio}</p>
        <button
          onClick={handleEmailClick}
          className="mt-3 inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
        >
          <Mail className="h-4 w-4 mr-1" />
          {email}
        </button>
      </div>
    </Link>
  );
}
