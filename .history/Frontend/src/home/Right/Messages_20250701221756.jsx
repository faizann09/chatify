import Message from "./Message"
import useGetMessage from "../../context/useGetMessage.js"

export default function Messages() {
    const { loading, messages } = useGetMessage();
    console.log(messages);

    return (
        <>
            <div className="" style={{ minHeight: "calc(92vh - 8vh)" }}>
               {!loading && messages.length === 0 && (
  <div className="flex flex-col items-center justify-center h-full text-gray-600">
    <div className="text-6xl mb-4 animate-bounce">👋</div>
    <p className="text-2xl font-semibold text-center">
      Say Hi to start the conversation
    </p>
    <p className="text-sm mt-2 text-center text-gray-400">
      No messages yet. Your message will appear here.
    </p>
  </div>
)}

            </div>
        </>
    )
}