export default function Message({ message }) {
    const authUser = JSON.parse(localStorage.getItem("messenger"));
    const itsMe = message.senderId === authUser.user._id;

    const chatName = itsMe ? " chat-end" : "chat-start";
    const chatColor = itsMe ? "bg-blue-500" : "";

    const createdAt = new Date(message.createdAt);
    const formattedTime = createdAt.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });


    return (
        <>
            <div className="p-4">
                <div className="chat chat-end">
                    <div className="chat-bubble bg-blue-500 text-black px-4 py-2 rounded-2xl shadow-md max-w-xs md:max-w-md break-words">
                        {message.message}
                    </div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble bg-gray-600 text-white px-4 py-2 rounded-2xl shadow-md max-w-xs md:max-w-md break-words">
                        i am me
                    </div>
                </div>
            </div>
        </>
    );
}
