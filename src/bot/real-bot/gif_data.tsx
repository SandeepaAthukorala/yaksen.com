// gif_data.tsx (Manages GIF imports and durations)
export const avatarMap: { [key: string]: string } = {
    laugh: "https://res.cloudinary.com/das8wrfd1/image/upload/v1743822852/laugh_rcgbbn.gif",
    broken: "https://res.cloudinary.com/das8wrfd1/image/upload/v1743822857/broken_psnird.gif",
    fit: "https://res.cloudinary.com/das8wrfd1/image/upload/v1743823112/fit_gqyic0.gif",
    loop: require("./character/loop.gif"), // URL not provided
    hi: "https://res.cloudinary.com/das8wrfd1/image/upload/v1743822916/hi_j74hqj.gif",
    think: "https://res.cloudinary.com/das8wrfd1/image/upload/v1743822991/think_kex60v.gif",
    error: require("./character/error.gif"), // URL not provided
    love: "https://res.cloudinary.com/das8wrfd1/image/upload/v1743822847/love_zagmld.gif",
    horay: require("./character/horay.gif"), // URL not provided
    flirty: require("./character/flirty.gif"), // URL not provided
    shy: "https://res.cloudinary.com/das8wrfd1/image/upload/v1743823102/shy_aphbmz.gif",
    savage: "https://res.cloudinary.com/das8wrfd1/image/upload/v1743823121/savage_dnlj4j.gif",
  };

  export const gifDurations: { [key: string]: number } = {
    laugh: 2000, // Adjusted duration for Cloudinary URLs if needed
    broken: 2000,
    fit: 2000,
    loop: 2000,
    hi: 2000,
    think: 2000,
    error: 2000,
    love: 2000,
    horay: 2000,
    flirty: 2000,
    shy: 2000,
    savage: 2000,
  };
