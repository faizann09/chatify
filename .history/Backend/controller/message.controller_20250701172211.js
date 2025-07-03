import Conversation from "../models/conversation.model.js";

export const sendMessage = async(req,res)=>{
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
    }

   } catch (error) {
     console.log("Error in sendMessage", error);
    res.status(500).json({ error: "Internal server error" });
   }
}