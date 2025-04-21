const hi = "https://res.cloudinary.com/das8wrfd1/image/upload/v1743822916/hi_j74hqj.gif";
const think = "https://res.cloudinary.com/das8wrfd1/image/upload/v1743822991/think_kex60v.gif";
const shy = "https://res.cloudinary.com/das8wrfd1/image/upload/v1743823102/shy_aphbmz.gif";

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
