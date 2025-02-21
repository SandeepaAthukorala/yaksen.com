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
      <div className="aspect-w-16 md:h-[500px] h-[200px] rounded-xl overflow-hidden">
        {/* Check if the item is a Facebook Reel URL */}
        {item.includes('facebook.com') ? (
          <iframe
            src={`https://www.facebook.com/plugins/video.php?height=476&href=${encodeURIComponent(item)}&show_text=false&width=476&t=0`}
            width="476"
            height="476"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        ) : (
          <iframe
            src={`${item}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </div>
    </div>
  ))}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery?.map((item, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden">
              {/* Wrap the image in a div that maintains the aspect ratio */}
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
