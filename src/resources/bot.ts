import hi from "../chatbot/character/hi.gif";
import think from "../chatbot/character/think.gif";
import shy from "../chatbot/character/shy.gif";

const avatarMap: { [key: string]: string } = {
  hi,
  think,
  shy,
};

export const preloadGIFs = () => {
  Object.values(avatarMap).forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

export default avatarMap;
