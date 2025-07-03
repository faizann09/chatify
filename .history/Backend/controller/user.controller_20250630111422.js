import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../JWT/generateToken.js"

export const signup = async (req, res) => {
    try{
        const { name, email, password, confirmpassword } = req.body;
    if (password !== confirmpassword) {
        return res.status(400).json({ message: "Password do not match" });
    }
    const user =await User.findOne({ email })
    if (user) {
        return res.status(400).json({ message: "Email already exists" });
    }

    //Hashing the password
    const hashedPassword=await bcrypt.hash(password,10);

    const newUser =await new User({
        name,
        email,
        password:hashedPassword,
    });
    await newUser.save();
    if(newUser){
        createTokenAndSaveCookie(newUser._id,res);
        res.status(201).json({ message: " User Registered Successfully" , newUser});
    }
    } catch(error){
        console.log(error);
         res.status(500).json({ message: "Server Error" });
    }
}

export const login= async(req,res)=>{
    try{
        const {email,password}=
    } catch(error){
         console.log(error);
         res.status(500).json({ message: "Server Error" });
    }
}