// gif_data.tsx (Manages GIF imports and durations)
export const avatarMap: { [key: string]: string } = {
    laugh: require("./character/laugh.gif"),
    broken: require("./character/broken.gif"),
    fit: require("./character/fit.gif"),
    loop: require("./character/loop.gif"),
    hi: require("./character/hi.gif"),
    think: require("./character/think.gif"),
    error: require("./character/error.gif"),
    love: require("./character/love.gif"),
    horay: require("./character/horay.gif"),
    flirty: require("./character/flirty.gif"),
    shy: require("./character/shy.gif"),
    savage: require("./character/savage.gif"),
  };
  
  export const gifDurations: { [key: string]: number } = {
    laugh: 2000000,
    broken: 2000000,
    fit: 2000000,
    loop: 2000000,
    hi: 2000000,
    think: 2000000,
    error: 2000000,
    love: 2000000,
    horay: 2000000,
    flirty: 2000000,
    shy: 2000000,
    savage: 2000000,
  };
  