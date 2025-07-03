import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    // Find existing conversation
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    // If conversation doesn't exist, create it
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        messages: [newMessage._id], // ✅ add first message directly
      });
    } else {
      conversation.messages.push(newMessage._id); // ✅ push into existing
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json({
      message: "Message sent successfully",
      newMessage,
    });
  } catch (error) {
    console.log("Error in sendMessage:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
    try {
        const { id: chatUser } = req.params;
        const senderId = req.user._id; // current logged in user
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, chatUser] },
        }).populate("messages");

        if (!conversation) {
            return res.status(201).json({message:"No Conversation Found"});
        }
        const messages = conversation.messages;
        res.status(201).json(messages);

    } catch (error) {
        console.log("Error in getMessage", error);
        res.status(500).json({ error: "Internal server error" });

    }
}