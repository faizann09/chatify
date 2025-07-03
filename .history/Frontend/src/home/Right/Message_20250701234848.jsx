export default function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("messenger"));
  const itsMe = message.senderId === authUser.user._id;

  const chatAlign = itsMe ? "items-end justify-end ml-auto" : "items-start justify-start mr-auto";
  const chatColor = itsMe ? "bg-blue-500 text-white" : "bg-gray-200 text-black";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="p-2">
      <div className={`flex flex-col ${chatAlign} max-w-md`}>
        <div
          className={`chat-bubble ${chatColor} px-4 py-3 rounded-2xl shadow-md transition-all duration-300 ease-in-out`}
        >
          {message.message}
        </div>
        <div className="text-xs text-gray-400 mt-1">{formattedTime}</div>
      </div>
    </div>
  );
}

