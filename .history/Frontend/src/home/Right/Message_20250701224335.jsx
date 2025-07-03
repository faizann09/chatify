export default function Message({ message }) {
    return (
        <>
            <div className="p-4">
                <div className="chat chat-end">
                    <div className="chat-bubble bg-blue-500 text-white px-4 py-2 rounded-2xl shadow-md max-w-xs md:max-w-md break-words">
                        {message.message}
                    </div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble bg-gray-400 text-black px-4 py-2 rounded-2xl shadow-md max-w-xs md:max-w-md break-words">
                        i am me
                    </div>
                </div>
            </div>
        </>
    );
}
