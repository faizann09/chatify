import express from "express";
import dotenv from "dotenv";

const app = express()
dotenv.config();

const PORT = process.env.PORT || 5002;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is Running on port ${port}`)
})