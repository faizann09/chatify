import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express()
dotenv.config();

const PORT = process.env.PORT || 5001;

try{

}cat

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`)
})