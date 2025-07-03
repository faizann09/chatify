import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    name:{},
    email:String,
    password:String,
    confirmpassword:String,
})