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
      <div className="flex flex-col gap-1 max-w-full">
        <div
          className={`chat-bubble ${chatColor} px-4 py-2 rounded-2xl shadow-md inline-block max-w-[70%] whitespace-pre-line`}
        >
          {message.message}
        </div>
        <div
          className={`text-xs text-gray-400 ${
            itsMe ? "text-right" : "text-left"
          } w-full px-1`}
        >
          {formattedTime}
        </div>
      </div>
    </div>
  );
}



