import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const secureRoute = async (req,res,next)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(501).json({ message :"Internal Server Error"});
    }
}