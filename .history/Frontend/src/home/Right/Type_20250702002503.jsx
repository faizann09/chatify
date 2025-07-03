import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";
import { useState } from "react";

export default function Type() {
  const { loading, sendMessages } = useSendMessage(); // ✅ called the hook
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return; // avoid sending empty messages
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-3 h-[10vh] items-center bg-gray-900 px-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)} // ✅ handle input
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
