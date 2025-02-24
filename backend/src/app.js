import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import  userRouter  from "./routes/user.rourte.js";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use("/user", userRouter);

app.listen(port, async () => {
  await connectDB();
  console.log(`Server started at http://localhost:${port}`);
});
