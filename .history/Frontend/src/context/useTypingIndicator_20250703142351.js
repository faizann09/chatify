import { useEffect, useState } from "react";
import { useSocketContext } from "./SocketContext.jsx";
import useConversation from "../stateManage/useConversation.js";

const useTypingIndicator = () => {
  const { socket } = useSocketContext();
  const { selectedConversation } = useConversation();
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!socket || !selectedConversation?._id) return;

    const handleTyping = ({ senderId }) => {
      if (senderId === selectedConversation._id) {
        console.log("✅ Typing event received from:", senderId);
        setIsTyping(true);

        // Reset typing indicator after 2 seconds of no update
        clearTimeout(window.typingTimeout);
        window.typingTimeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    };

    socket.on("typing", handleTyping);

    return () => {
      socket.off("typing", handleTyping);
      clearTimeout(window.typingTimeout);
    };
  }, [socket, selectedConversation]);

  return isTyping;
};

export default useTypingIndicator;
