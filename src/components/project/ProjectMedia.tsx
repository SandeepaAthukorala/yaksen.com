interface ProjectMediaProps {
  videos: string[];
  gallery: string[];
  webLinks: string[]; // Add webLinks to the props
}

export default function ProjectMedia({ videos, gallery, webLinks }: ProjectMediaProps) {
  console.log(videos);

  const handleLinkClick = (link: string) => {
    // Opens the link in a new tab when clicked
    window.open(link, '_blank');
  };

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Project Showcase
        </h2>

        {/* Display Videos */}
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

        {/* Display Gallery */}
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

        {/* Display Web Links - One per row */}
        {webLinks && webLinks.length > 0 && (
          <div className="mt-12">
            <div className="flex flex-col space-y-6">
              {webLinks.map((link, index) => (
                <div
                  key={index}
                  className="relative w-full cursor-pointer transform transition-all duration-300 hover:scale-105"
                  onClick={() => handleLinkClick(link)}
                >
                  <div className="relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                    <iframe
                      src={link}
                      className="absolute inset-0 w-full h-full border-none"
                      title={`embed-web-link-${index}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
