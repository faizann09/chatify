import jwt from "jsonwebtoken"; 

const createTokenAndSaveCookie =(userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_TOKEN);
}