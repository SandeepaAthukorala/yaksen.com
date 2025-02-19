import { LucideIcon } from 'lucide-react';

interface TechnologyCardProps {
  technology: {
    icon: LucideIcon;
    name: string;
    description: string;
    tags: string[];
  };
}

export default function TechnologyCard({ technology }: TechnologyCardProps) {
  const { icon: Icon, name, description, tags } = technology;

  return (
    <div className="relative group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center space-x-4 mb-4">
        <Icon className="h-8 w-8 text-primary" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
      </div>
      <p className="text-gray-500 dark:text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
