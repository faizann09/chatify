import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";


export default function Type() {
    const{ loading, sendMessages}=useSendMessage;

     const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };
    return (
        <>
            
        </>
    )

}