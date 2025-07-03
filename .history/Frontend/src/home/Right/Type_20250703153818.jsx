import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";
import { useState, useRef } from "react";
import { useSocketContext } from "../../context/SocketContext.jsx";
import useConversation from "../../stateManage/useConversation.js";


export default function Type() {
  const { loading, sendMessages } = useSendMessage();
  const [message, setMessage] = useState("");
  const { socket } = useSocketContext();
  const { selectedConversation } = useConversation();

  const lastTypingTimeRef = useRef(0);
  const TYPING_INTERVAL = 1500;

  // ✅ Don't render if no conversation
  if (!selectedConversation) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessages(message);
    setMessage("");
  };

  const handleTyping = (e) => {
    const value = e.target.value;
    setMessage(value);

    const now = Date.now();
    if (
      socket &&
      selectedConversation?._id &&
      now - lastTypingTimeRef.current > TYPING_INTERVAL
    ) {
      socket.emit("typing", {
        receiverId: selectedConversation._id,
      });
      lastTypingTimeRef.current = now;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-3 h-[10vh] items-center bg-gray-900 px-4">
        <input
          type="text"
          value={message}
          onChange={handleTyping}
          placeholder="Type here"
          className="flex-1 py-2 px-4 rounded-xl text-white bg-slate-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow"
        />
        <button
          type="submit"
          className="text-3xl p-2 rounded-full hover:bg-blue-500 transition-all duration-200"
          disabled={loading}
        >
          <IoSend className="text-white" />
        </button>
      </div>
    </form>
  );
}
