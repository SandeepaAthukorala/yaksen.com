interface ProjectMediaProps {
  videos: string[];
  gallery: string[];
}

export default function ProjectMedia({ videos, gallery }: ProjectMediaProps) {
  console.log(videos);

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Project Showcase
        </h2>

        {videos &&
          videos.map((item, index) => (
            <div className="mb-12" key={index}>
              <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                  src={`${item}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          ))}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery?.map((item, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item}
                  alt={`projectimg${index}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
