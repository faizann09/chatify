import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    name:{ type:String, require},
    email:String,
    password:String,
    confirmpassword:String,
})