import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express()
dotenv.config();

const PORT = process.env.PORT || 5001;
const 

try{
    mongoose.connect
}catch(error){

}

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`)
})