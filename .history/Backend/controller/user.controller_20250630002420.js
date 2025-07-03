import User from "../models/user.model.js";

const signup = (req, res) => {
    const { name, email, password, confirmpassword } = req.body;
    if(password !== confirmpassword){
        return res.status(400).json({message: "Password do not match"});
    }
    const user=User.findOne({email})
    if (user){
        
    }
}