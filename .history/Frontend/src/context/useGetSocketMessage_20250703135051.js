import { useEffect } from "react";
import { useSocketContext } from "./SocketContext";
import useConversation from "../stateManage/useConversation";

const useGetSocketMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    if (!socket) return;

    const handleReceiveMessage = (newMessage) => {
      if (selectedConversation?._id === newMessage.senderId || selectedConversation?._id === newMessage.receiverId) {
        setMessages([...messages, newMessage]);
      }
    };

    socket.on("receive-message", handleReceiveMessage);
    return () => socket.off("receive-message", handleReceiveMessage);
  }, [socket, messages, selectedConversation, setMessages]);
};

export default useGetSocketMessage;
