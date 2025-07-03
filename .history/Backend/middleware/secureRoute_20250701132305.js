import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const secureRoute = async (req,res,next)=>{
    try {
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({ message : " Not Authorized "});
        }
        const verified= jwt.verify(token , process.env.JWT_TOKEN);
        if(!verified){
            return res.status(403).json({message :"Invalid Token" });
        };
        const user= await User.fi

    } catch (error) {
        console.log(error);
        res.status(501).json({ message :"Internal Server Error"});
    }
}