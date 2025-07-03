import { useEffect } from "react";
import { useSocketContext } from "./SocketContext";
import useConversation from "../stateManage/useConversation.js";
import sound from "../assets/noti.mp3.wav"; // ✅ correct extension

const useGetSocketMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    if (!socket) return;

    const handleReceiveMessage = (newMessage) => {
      // ✅ Play sound if the message is for current open chat
      if (
        selectedConversation?._id === newMessage.senderId ||
        selectedConversation?._id === newMessage.receiverId
      ) {
        const audio = new Audio(sound);
        audio.play().catch((e) => {
          console.warn("🔇 Notification sound blocked by browser");
        });

        setMessages([...messages, newMessage]);
      }
    };

    socket.on("receive-message", handleReceiveMessage);
    return () => socket.off("receive-message", handleReceiveMessage);
  }, [socket, messages, selectedConversation, setMessages]);
};

export default useGetSocketMessage;
