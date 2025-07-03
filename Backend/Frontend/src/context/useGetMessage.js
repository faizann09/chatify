import { useEffect, useState } from "react";
import useConversation from "../stateManage/useConversation.js";
import axios from "axios";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) {
        setMessages([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const res = await axios.get(
          `/api/message/get/${selectedConversation._id}`
        );
        const data = Array.isArray(res.data) ? res.data : [];
        setMessages(data);
      } catch (error) {
        console.log("❌ Error in getting messages", error);
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation, setMessages]);

  return { loading };
};

export default useGetMessage;
