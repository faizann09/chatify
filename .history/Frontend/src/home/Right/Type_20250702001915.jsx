import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";


export default function Type() {
    const{ loading, sendMessages}=useSendMessage;
    const [message, setMessage] = useState("");

     const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };
    return (
        <>
            <form onClick={handleSubmit}>
                <div className='flex space-x-3 h-[10vh] text-center bg-gray-900'>
                <div className='w-[70%] mx-4 '>
                    <input type="text" value={message} placeholder="Type here" className=" py-3 px-3 input input-bordered w-full text-black w-[80%] pr-10 pl-4 py-2 border border-gray-100 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 bg-slate-700 text-black shadow" />

                </div>

                <button className="mb-4 text-3xl flex items-center justify-center rounded-full ">
                    <IoSend  />
                </button>



            </div>
            </form>
        </>
    )

}