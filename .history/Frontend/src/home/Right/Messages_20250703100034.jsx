import Message from "./Message";
import Loading from "../../component/loading.jsx";
import { useRef, useEffect, useState } from "react";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../stateManage/useConversation";
import useGetMessage from "../../context/useGetMessage.js";

export default function Messages() {
  const { loading, messages: initialMessages } = useGetMessage();
  const [messages, setMessages] = useState([]);
  const { socket } = useSocketContext();
  const { selectedConversation } = useConversation();
  const lastMsgRef = useRef(null);

  useEffect(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = ({ senderId, message }) => {
      if (senderId === selectedConversation._id) {
        setMessages((prev) => [
          ...prev,
          {
            message,
            senderId,
            createdAt: new Date().toISOString(),
            _id: Date.now(), // temporary unique ID
          },
        ]);
      }
    };

    socket.on("receive-message", handleNewMessage);

    return () => socket.off("receive-message", handleNewMessage);
  }, [socket, selectedConversation]);

  useEffect(() => {
    if (lastMsgRef.current) {
      lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message) => {
          
})
      )}

      <div style={{ minHeight: "calc(92vh - 8vh)" }}>
        {!loading && messages.length === 0 && (
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
        )}
      </div>
    </>
  );
}
