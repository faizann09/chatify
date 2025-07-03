import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";
import { useState } from "react";
import { useSocketContext } from "../../context/SocketContext.jsx";
import useConversation from "../../stateManage/useConversation.js";

export default function Type() {
  const { loading, sendMessages } = useSendMessage();
  const [message, setMessage] = useState("");
  const { socket } = useSocketContext();
  const { selectedConversation } = useConversation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessages(message);
    setMessage("");
  };

  const handleTyping = (e) => {
    setMessage(e.target.value);

    // ✅ Emit typing event to the receiver
    if (socket && selectedConversation?._id) {
      socket.emit("typing", {
        receiverId: selectedConversation._id,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-3 h-[10vh] items-center bg-gray-900 px-4">
        <input
          type="text"
          value={message}
          onChange={handleTyping} // ✅ typing event here
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
