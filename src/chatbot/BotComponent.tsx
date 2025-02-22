import React, { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { sendMessage } from "../apiCalls/ChatbotCalls";
import Lottie from "react-lottie";

const BotComponent = () => {
  const [messages, setMessages] = useState<any>([]);
  const [userInput, setUserInput] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [thinking, setThinking] = useState(false);

  const handleSendMessage = async (e: any) => {
    e.preventDefault();

    if (userInput.trim() === "") return;

    const userMessage = { text: userInput, sender: "user" };
    setMessages((prev: any) => [...prev, userMessage]);

    try {
      setThinking(true);
      setUserInput("");
      const res = await sendMessage({
        session_id: sessionId,
        question: userInput,
      });

      setThinking(false);

      const botMessage = { text: res.data.answer, sender: "bot" };
      setMessages((prev: any) => [...prev, botMessage]);

      console.log("ses", res.data.session_id);
      if (res.data.session_id) {
        setSessionId(res.data.session_id);
        localStorage.setItem("session_id", res.data.session_id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const storedSessionId = localStorage.getItem("session_id");

    if (storedSessionId) {
      setSessionId(storedSessionId);
    }
  }, []);

  const scrollEndRef = useRef<any>(null);

  useEffect(() => {
    scrollEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  //   const defaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: botAnimation,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   };

  return (
    <div className="w-[350px] h-[500px] bg-white  overflow-hidden rounded-lg  dark:bg-gray-800 dark:border-gray-700 border border-solid shadow-xl relative">
      {/* title bar */}
      <div className="bg-primary text-white flex items-center gap-2 p-2">
        <div className="rounded-full " style={{ pointerEvents: "none" }}></div>
        <div className="text-[18px] font-semibold uppercase">yakira</div>
      </div>

      {/* messages */}
      <div className="p-4">
        <div className=" flex flex-col gap-4 h-[400px] overflow-y-auto hide-scrollbar pb-8">
          {messages.length === 0 && (
            <div className="flex items-center justify-center w-full h-full text-white text-[13px] text-center">
              <div>
                Chat with Yakira Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Non possimus illum quibusdam ipsam fugiat modi
                in culpa alias repellendus consectetur!
              </div>
            </div>
          )}

          {messages.map((message: any, index: any) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`${
                  message.sender === "user"
                    ? "bg-primary text-white"
                    : "bg-gray-300 text-black"
                } p-2 px-4  max-w-[70%] text-[14px] ${
                  message.sender === "user"
                    ? "rounded-xl rounded-br-none"
                    : "rounded-xl rounded-bl-none"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {thinking && (
            <div className="flex justify-start">
              <div className="bg-gray-300 text-black p-2 px-4 max-w-[70%] text-[14px] rounded-xl rounded-bl-none">
                Thinking...
              </div>
            </div>
          )}

          <div ref={scrollEndRef} />
        </div>
      </div>

      {/* message input */}
      <div className="flex w-full absolute bottom-0 p-6">
        <form
          action=""
          className="flex items-center gap-2 w-full"
          onSubmit={handleSendMessage}
        >
          <input
            type="text"
            placeholder="Enter your message"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full dark:bg-gray-500 outline-none p-2 text-[13px] rounded-full px-4 text-white"
          />
          <button
            className="outline-none bg-primary hover:bg-primary/80 transition-colors duration-150 text-white p-2 rounded-full"
            type="submit"
          >
            <IoSend className="text-[18px]" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default BotComponent;
