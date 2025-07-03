import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/user.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import messageRoute from "./route/message.route.js";
import { app, server } from "./SocketIO/server.js";


dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 5001;
const URI=process.env.MONGODB_URI;

try{
    mongoose.connect(URI);
    console.log("MongoDB Connected");
}catch(error){
    console.log(error);
}

app.use("/api/user",userRoute);
app.use("/api/message",messageRoute);


// code for deployment
if(process.e)


server.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`)
})