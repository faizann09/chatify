import React, { useEffect, useState } from "react";
import useConversation from "../stateManage/useConversation.jsx";
import axios from "axios";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();
    useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
     
        try {
          const res = await axios.get(
            `/api/message/get/${selectedConversation._id}`
          );
          setMessage(data);
          setLoading(false);
        } catch (error) {
          console.log("Error in getting messages", error);
          
        }
      };
    },[]);
    return <></>;
}