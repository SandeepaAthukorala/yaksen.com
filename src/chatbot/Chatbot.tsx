import React, { useState } from "react";
import emote_hi from "./character/hi.gif";
import ComingSoon from "./comingsoon";
import BotComponent from "./BotComponent";

const ChatBot: React.FC = () => {
  const [botShow, setBotShow] = useState(false);

  const handleChatButton = () => {
    setBotShow(!botShow);
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 md:bottom-6 md:right-6">
      {botShow ? (
        <div className="md:absolute md:bottom-0 md:right-0">
          <BotComponent handleChatButton={handleChatButton} />
        </div>
      ) : (
        <button onClick={handleChatButton}>
          <img
            src={emote_hi}
            alt="Chat"
            className="w-40 h-40 md:w-50 md:h-50"
          />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
