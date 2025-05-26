import type { ServiceTool } from '../../types/services';

interface ServiceToolsProps {
  tools: ServiceTool[];
}

export default function ServiceTools({ tools }: ServiceToolsProps) {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Tools & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => window.open(tool.techStack?.[0] ? `https://www.google.com/search?q=${tool.name}+${tool.techStack[0]}` : `https://www.google.com/search?q=${tool.name}+technology`, '_blank')}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <tool.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {tool.name}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {tool.description}
              </p>
              {tool.techStack && (
                <div className="flex flex-wrap gap-2">
                  {tool.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
