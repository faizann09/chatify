import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    name:{ type:St},
    email:String,
    password:String,
    confirmpassword:String,
})