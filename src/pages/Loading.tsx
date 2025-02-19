import React, { useState, useEffect } from "react";
import { loading } from "../resources/data";

interface ImageData {
  url: string;
}

const Loading: React.FC = () => {
  const [randomImage, setRandomImage] = useState<ImageData | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * loading.length);
    setRandomImage(loading[randomIndex]);
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#212121] relative">
      {randomImage && (
        <>
          <img
            src={randomImage.url}
            alt="Random"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-black bg-opacity-25 backdrop-blur-lg border border-white/10 text-white px-6 py-2 text-xl rounded-lg shadow-md shadow-black/30">
            {"Crafted by YAKSEN 🤍"}
          </div>
        </>
      )}
    </div>
  );
};

export default Loading;
