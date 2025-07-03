import Conversation from "../models/conversation.model.js";

export const sendMessage = async(req,res)=>{
   // console.log("message send",req.params.id,req.body.message);
   const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id; // current logged in user
    let conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });
}