export default function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("messenger"));
  const itsMe = message.senderId === authUser.user._id;

  const chatAlign = itsMe ? "chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-blue-500 text-white" : "bg-gray-200 text-black";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`chat ${chatAlign} px-4`}>
      <div className="flex flex-col gap-1">
        <div
          className={`chat-bubble ${chatColor} rounded-2xl shadow-md px-4 py-2 max-w-fit whitespace-nowrap`}
        >
          {message.message}
        </div>
        <div
          className={`text-xs text-gray-400 ${
            itsMe ? "text-right" : "text-left"
          } px-1`}
        >
          {formattedTime}
        </div>
      </div>
    </div>
  );
}




