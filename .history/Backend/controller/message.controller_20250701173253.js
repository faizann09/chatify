import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    // console.log("message send",req.params.id,req.body.message);
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id; // current logged in user
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
            const newMessage = new Message({
                senderId,
                receiverId,
                message,
            });
            if (newMessage) {
                conversation.messages.push(newMessage._id);
            } 
            await Promise.all([conversation.save(), newMessage.save()]);
            res.status(201).json();
        }


    } catch (error) {
        console.log("Error in sendMessage", error);
        res.status(500).json({ error: "Internal server error" });
    }
}