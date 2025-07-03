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
       
    );
}
