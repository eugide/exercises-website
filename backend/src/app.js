import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.listen(port, async () => {
    await connectDB();
  console.log(`Server started at http://localhost:${port}`);
});
