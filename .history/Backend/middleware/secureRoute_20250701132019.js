import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const secureRoute = async (req,res,next)=>{
    try {
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({ message : " Not Authorized "});
        }
        const verified= jwt.verify(token , process.env.S)

    } catch (error) {
        console.log(error);
        res.status(501).json({ message :"Internal Server Error"});
    }
}