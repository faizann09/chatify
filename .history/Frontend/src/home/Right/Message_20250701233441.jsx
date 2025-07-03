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
     <div className="p-4">
  <div className={`chat ${chatName} flex justify-end max-w-md ml-auto`}>
    <div
      className={`chat-bubble ${chatColor} text-white px-4 py-3 rounded-2xl shadow-md transition-all duration-300 ease-in-out`}
    >
      {message.message}
    </div>
  </div>
  <div className="flex justify-end max-w-md ml-auto">
    <div className="chat-footer text-xs text-gray-400 mt-1 mr-1">{formattedTime}</div>
  </div>
</div>

    );
}
