import Message from "./Message.jsx";
import Loading from "../../component/loading.jsx";
import { useRef, useEffect, useState } from "react";
import { useSocketContext } from "../../context/SocketContext.jsx";
import useConversation from "../../stateManage/useConversation.js";
import useGetMessage from "../../context/useGetMessage.js";
import useGetSocketMessage from "../../context/useGetSocketMessage.js";
import useTypingIndicator from "../../context/"; // ✅ new import

export default function Messages() {
  const { loading } = useGetMessage();
  const { messages, selectedConversation } = useConversation();
  const [localMessages, setLocalMessages] = useState([]);
  const { socket } = useSocketContext();
  const lastMsgRef = useRef(null);
  const isTyping = useTypingIndicator(); // ✅ new hook

  useGetSocketMessage();

  useEffect(() => {
    if (Array.isArray(messages)) {
      setLocalMessages(messages);
    } else {
      setLocalMessages([]);
    }
  }, [messages]);

  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [localMessages]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : Array.isArray(localMessages) && localMessages.length > 0 ? (
        localMessages.map((message, index) => (
          <div
            key={message._id}
            ref={index === localMessages.length - 1 ? lastMsgRef : null}
          >
            <Message message={message} />
          </div>
        ))
      ) : (
        <div style={{ minHeight: "calc(92vh - 8vh)" }}>
          <div className="flex items-center justify-center h-full mt-40">
            <div className="flex flex-col items-center text-center px-4">
              <div className="text-[5rem] mb-3 animate-bounce">👋</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Start a Conversation
              </h2>
              <p className="text-gray-500 text-base max-w-md">
                You haven’t sent any messages yet. Type something and say hello!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Typing indicator shown after all messages */}
      {isTyping && (
        <div className="ml-4 text-sm text-gray-500 italic mt-2">
          Typing...
        </div>
      )}
    </>
  );
}
