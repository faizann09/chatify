import { useEffect, useState } from "react";
import useConversation from "../stateManage/useConversation.js";
import axios from "axios";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) {
        setMessages([]); // clear old messages when switching
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const res = await axios.get(
          `/api/message/get/${selectedConversation._id}`
        );
        setMessages(res.data);
      } catch (error) {
        console.log("Error in getting messages", error);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation, setMessages]);

  return { loading };
};

export default useGetMessage;
