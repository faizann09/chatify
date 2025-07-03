import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

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
    await newUser
    if(newUser){
        res.status(201).json({ message: " User Registered Successfully" });
    }
    .save()() => 
    } catch(error){
        console.log(error);
         res.status(500).json({ message: "Server Error" });
    }
}