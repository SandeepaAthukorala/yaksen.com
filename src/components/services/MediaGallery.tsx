import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

type MediaItem = string;

type GalleryCategory = {
  category: string;
  items: MediaItem[];
  show_limit?: number;
};

type MediaGalleryProps = {
  mediaData: GalleryCategory[];
};

const MediaGallery: React.FC<MediaGalleryProps> = ({ mediaData }) => {
  // Filter out categories with no items
  const filteredMediaData = React.useMemo(() => {
    // First filter out empty categories
    const filtered = mediaData.filter(category => category.items && category.items.length > 0);
    
    // Then randomize the order of categories
    return [...filtered].sort(() => Math.random() - 0.5);
  }, [mediaData]);
  
  if (!filteredMediaData || filteredMediaData.length === 0) return null;
  
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedCategories, setExpandedCategories] = useState<{[key: string]: boolean}>({});
  
  // Initialize all categories as expanded by default
  React.useEffect(() => {
    const initialExpandedState = {};
    filteredMediaData.forEach(category => {
      initialExpandedState[category.category] = true;
    });
    setExpandedCategories(initialExpandedState);
  }, []);
  
  // Toggle category expansion
  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };
  
  // Function to determine media type based on URL
  const getMediaType = (url: string): 'image' | 'youtube' | 'website' => {
    if (url.match(/\.(jpeg|jpg|gif|png|webp)$/i)) {
      return 'image';
    } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return 'youtube';
    } else {
      return 'website';
    }
  };

  // Extract all images for the lightbox
  const allImages = filteredMediaData.flatMap(category => 
    category.items.filter(item => getMediaType(item) === 'image')
  );

  // Function to open lightbox with specific image
  const openLightbox = (imageUrl: string) => {
    const imageIndex = allImages.findIndex(img => img === imageUrl);
    if (imageIndex !== -1) {
      setCurrentImageIndex(imageIndex);
      setIsOpen(true);
    }
  };

  // Function to render YouTube embed with preview thumbnail
  const renderYouTubeEmbed = (url: string) => {
    // Extract video ID from YouTube URL
    const videoId = url.includes('youtu.be') 
      ? url.split('/').pop() 
      : url.includes('v=') 
        ? new URLSearchParams(url.split('?')[1]).get('v') 
        : '';
    
    if (!videoId) return null;
    
    // State to track if video is playing
    const [isPlaying, setIsPlaying] = useState(false);
    
    // If not playing, show thumbnail with play button
    if (!isPlaying) {
      return (
        <div 
          className="aspect-video w-full overflow-hidden rounded-lg shadow-lg relative cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          {/* High quality thumbnail */}
          <img 
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="YouTube video thumbnail"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to medium quality if maxres is not available
              e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
            }}
          />
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-600 rounded-full p-4 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          
          {/* Video title overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3 text-sm">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              <span>Click to play YouTube video</span>
            </div>
          </div>
        </div>
      );
    }
    
    // If playing, show the actual embed
    return (
      <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
        <iframe 
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  };

  // Function to render website embed or preview card
  const renderWebsiteEmbed = (url: string) => {
    // Extract domain for display
    const domain = url.replace(/^https?:\/\//i, '').split('/')[0];
    
    return (
      <div className="w-full overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-video w-full overflow-hidden">
          <iframe 
            src={url}
            title={`Website preview: ${domain}`}
            className="w-full h-full border-none"
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
          />
        </div>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block p-4"
        >
          <div className="flex items-center space-x-2 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
            <span className="font-medium truncate">{domain}</span>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Click to visit website</p>
        </a>
      </div>
    );
  };

  // Function to render media item based on type
  const renderMediaItem = (item: MediaItem, index: number) => {
    const mediaType = getMediaType(item);
    
    switch (mediaType) {
      case 'image':
        return (
          <div 
            key={index} 
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => openLightbox(item)}
          >
            <img 
              src={item} 
              alt={`Gallery item ${index + 1}`} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        );
      case 'youtube':
        return (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg col-span-1 sm:col-span-2 lg:col-span-3">
            {renderYouTubeEmbed(item)}
          </div>
        );
      case 'website':
        return (
          <div key={index} className="col-span-1 sm:col-span-2 lg:col-span-3">
            {renderWebsiteEmbed(item)}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full py-12">
      {filteredMediaData.length > 0 && (
        <div className="space-y-12">
          {filteredMediaData.length > 1 ? (
            // Multiple categories
            filteredMediaData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div 
                  className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 cursor-pointer"
                  onClick={() => toggleCategory(category.category)}
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                  <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    {expandedCategories[category.category] ? (
                      <ChevronUp className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    )}
                  </button>
                </div>
                {expandedCategories[category.category] && (
                  <div className="p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Randomize items order within the category and limit to show_limit */}
                      {[...new Set(category.items)]
                        .sort(() => Math.random() - 0.5)
                        .slice(0, category.show_limit || 6)
                        .map((item, itemIndex) => 
                          <React.Fragment key={`${category.category}-${itemIndex}-${item.substring(0, 20)}`}>
                            {renderMediaItem(item, itemIndex)}
                          </React.Fragment>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            // Single category, no title needed
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Randomize items order and limit to show_limit */}
              {[...new Set(filteredMediaData[0].items)]
                .sort(() => Math.random() - 0.5)
                .slice(0, filteredMediaData[0].show_limit || 6)
                .map((item, itemIndex) => 
                  <React.Fragment key={`single-${itemIndex}-${item.substring(0, 20)}`}>
                    {renderMediaItem(item, itemIndex)}
                  </React.Fragment>
              )}
            </div>
          )}
        </div>
      )}

      {/* Lightbox for images */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={allImages.map(src => ({ src }))}
        index={currentImageIndex}
        plugins={[Zoom]}
      />
    </div>
  );
};

export default MediaGallery;