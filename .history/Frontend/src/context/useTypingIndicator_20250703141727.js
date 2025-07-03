import { useEffect, useState } from "react";
import { useSocketContext } from "./SocketContext.";
import useConversation from "../stateManage/useConversation";

const useTypingIndicator = () => {
  const { socket } = useSocketContext();
  const { selectedConversation } = useConversation();
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!socket) return;

    const handleTyping = ({ senderId }) => {
      if (selectedConversation?._id === senderId) {
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 2000);
      }
    };

    socket.on("typing", handleTyping);
    return () => socket.off("typing", handleTyping);
  }, [socket, selectedConversation]);

  return isTyping;
};

export default useTypingIndicator;
