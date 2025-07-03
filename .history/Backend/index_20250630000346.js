import express from "express";
import dotenv from "dotenv";
import mongoose from "mo"

const app = express()
dotenv.config();

const PORT = process.env.PORT || 5001;



app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`)
})