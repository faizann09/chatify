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
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      console.log("New socket message received:", newMessage);
    };

    socket.on("receive-message", handleNewMessage);

    return () => socket.off("receive-message", handleNewMessage);
  }, [socket, setMessages]);
};

export default useGetSocketMessage;
xx