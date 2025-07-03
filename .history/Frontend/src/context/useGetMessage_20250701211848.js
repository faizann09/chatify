import React, { useEffect, useState } from "react";
import useConversation from "../stateManage/useConversation.jsx";
import axios from "axios";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();

}