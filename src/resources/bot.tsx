import hi from "../chatbot/character/hi.gif";
import think from "../chatbot/character/think.gif";
import shy from "../chatbot/character/shy.gif";

const avatarMap: { [key: string]: string } = {
  hi,
  think,
  shy,
};

// Preload images on page startup
const preloadImages = () => {
  Object.values(avatarMap).forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

// Run preload function
preloadImages();

export default avatarMap;
