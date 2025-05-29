import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

type MediaItem = string;



type GalleryCategory = {
  category: string;
  items: MediaItem[];
};

type MediaGalleryProps = {
  mediaData: GalleryCategory[];
};

const MediaGallery: React.FC<MediaGalleryProps> = ({ mediaData }) => {
  if (!mediaData || mediaData.length === 0) return null;
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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
  const allImages = mediaData.flatMap(category => 
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

  // Function to render YouTube embed
  const renderYouTubeEmbed = (url: string) => {
    // Extract video ID from YouTube URL
    const videoId = url.includes('youtu.be') 
      ? url.split('/').pop() 
      : url.includes('v=') 
        ? new URLSearchParams(url.split('?')[1]).get('v') 
        : '';
    
    if (!videoId) return null;
    
    return (
      <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
        <iframe 
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  };

  // Function to render website embed or preview card
  const renderWebsiteEmbed = (url: string) => {
    return (
      <div className="w-full overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
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
            <span className="font-medium truncate">{url}</span>
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
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            {renderYouTubeEmbed(item)}
          </div>
        );
      case 'website':
        return (
          <div key={index}>
            {renderWebsiteEmbed(item)}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full py-12">
      {mediaData.length > 0 && (
        <div className="space-y-12">
          {mediaData.length > 1 ? (
            // Multiple categories
            mediaData.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => 
                    renderMediaItem(item, itemIndex)
                  )}
                </div>
              </div>
            ))
          ) : (
            // Single category, no title needed
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaData[0].items.map((item, itemIndex) => 
                renderMediaItem(item, itemIndex)
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