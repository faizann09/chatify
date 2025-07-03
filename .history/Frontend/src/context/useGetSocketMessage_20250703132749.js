import { useEffect } from "react";
import { useSocketContext } from "./SocketContext.jsx";
import useConversation from "../stateManage/useConversation.js";
import sound from "../assets/noti.mp3.wav";

const useGetSocketMessage = () => {
  const { socket } = useSocketContext();
  const { setMessages } = useConversation();

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      const notification = new Audio(sound);
      notification.play();

      // ✅ Append new message safely
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // Debug log
      console.log("New message received via socket:", newMessage);
    };

    // ✅ Listen to correct event
    socket.on("receive-message", handleNewMessage);

    // Cleanup on unmount
    return () => {
      socket.off("receive-message", handleNewMessage);
    };
  }, [socket, setMessages]);
};

export default useGetSocketMessage;

