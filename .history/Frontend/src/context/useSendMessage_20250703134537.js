import { useState } from "react";
import useConversation from "../stateManage/useConversation.js";
import { useSocketContext } from "./SocketContext";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const { socket } = useSocketContext();

  const sendMessages = async (message) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { message }
      );

      const newMessage = res.data.newMessage; // Access newMessage from response
      setMessages([...messages, newMessage]);

      socket.emit("send-message", {
        receiverId: selectedConversation._id,
        message: newMessage.message,
      });

    } catch (error) {
      console.log("Error in send messages", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessages };
};

export default useSendMessage;

