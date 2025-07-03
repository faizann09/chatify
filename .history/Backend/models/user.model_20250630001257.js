import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    name:{ type:String, },
    email:String,
    password:String,
    confirmpassword:String,
})