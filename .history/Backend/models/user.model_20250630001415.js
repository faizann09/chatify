import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    name:{ type:String, require:true},
    email:{ type:String, require:true ,uniqu},
    password:{ type:String, require:true},
    confirmpassword:{ type:String, require:true},
})