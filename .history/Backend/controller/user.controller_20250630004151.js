import User from "../models/user.model.js";

export const signup = as(req, res) => {
    try{
        const { name, email, password, confirmpassword } = req.body;
    if (password !== confirmpassword) {
        return res.status(400).json({ message: "Password do not match" });
    }
    const user = User.findOne({ email })
    if (user) {
        return res.status(400).json({ message: "Email already exists" });
    }

    const newUser =await new User({
        name,
        email,
        password,
        confirmpassword,
    });
    newUser.save().then(() => res.status(201).json({ message: " User Registered Successfully" }));
    } catch(error){
        console.log(error);
         res.status(500).json({ message: "Server Error" });
    }
}