import type { IconType } from 'react-icons'; // Import the correct type for react-icons

interface SocialLinkProps {
  href: string;
  label: string;
  icon: IconType; // Use IconType for react-icons
}

export default function SocialLink({ href, label, icon: Icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-3 bg-gray-100 dark:bg-gray-800 rounded-full transition-transform hover:-translate-y-1"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity" />
      <Icon className="relative h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors" />
    </a>
  );
}
