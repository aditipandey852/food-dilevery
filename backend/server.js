import express from "express";
import cors from "cors";
import { connectDB } from "./config/mongo.db.js";


// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB

app.get("/", (req, res) => {
  res.send("API is Working")
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

// mongodb+srv://aditipandey2004ind:aditi@41@cluster0.mie6kp4.mongodb.net/?

// Current IP Address (42.105.155.32/32) added!
// Visit Network Access to modify your settings.
