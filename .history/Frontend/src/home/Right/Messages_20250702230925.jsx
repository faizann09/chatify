import Message from "./Message";
import useGetMessage from "../../context/useGetMessage.js";
import Loading from "../../component/loading.jsx";
import { useRef, useEffect } from "react";

export default function Messages() {
    const { loading, messages } = useGetMessage();

    
    const lastMsgRef = useRef(null);

    
    useEffect(() => {
        if (lastMsgRef.current) {
            lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                messages.length > 0 &&
                messages.map((message, idx) => (
                    <div
                        key={message._id}
                        ref={idx === messages.length - 1 ? lastMsgRef : null}
                    >
                        <Message message={message} className="w-screen" />
                    </div>
                ))
            )}

            <div className="" style={{ minHeight: "calc(92vh - 8vh)" }}>
                {!loading && messages.length === 0 && (
                    <div className="flex items-center justify-center h-full mt-40">
                        <div className="flex flex-col items-center text-center px-4">
                            <div className="text-[5rem] mb-3 animate-bounce">👋</div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Start a Conversation</h2>
                            <p className="text-gray-500 text-base max-w-md">
                                You haven’t sent any messages yet. Type something and say hello!
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
