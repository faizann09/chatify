export default function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("messenger"));
  const itsMe = message.senderId === authUser.user._id;

  const chatAlign = itsMe ? "chat-end justify-end ml-auto" : "chat-start justify-start mr-auto";
  const chatColor = itsMe ? "bg-blue-500 text-white" : "bg-gray-200 text-black";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="p-4">
      <div className={`chat flex ${chatAlign} max-w-md`}>
        <div
          className={`chat-bubble ${chatColor} px-4 py-3 rounded-2xl shadow-md transition-all duration-300 ease-in-out`}
        >
          {message.message}
        </div>
      </div>
      <div className={`flex ${itsMe ? "justify-end" : "justify-start"} max-w-md`}>
        <div className="chat-footer text-xs text-gray-400 mt-1 mx-2">{formattedTime}</div>
      </div>
    </div>
  );
}

