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
}

export default function TeamMember({
  id,
  name,
  role,
  image,
  email,
}: TeamMemberProps) {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${email}`;
  };

  return (
    <Link to={`/team/${id}`} className="block text-center group">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="w-full aspect-square mb-4 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary">
          {name}
        </h4>
        <p className="text-primary font-medium">{role}</p>
        <button
          onClick={handleEmailClick}
          className="mt-3 inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
        >
          <Mail className="h-4 w-4 mr-1" />
          {email}
        </button>
      </div>
      </div>

    </Link>
  );
}
