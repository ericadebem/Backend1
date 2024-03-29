import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose, { Mongoose } from "mongoose";
import { userRouter } from "./router.js";

dotenv.config();
const app = express();
const DB_KEY = process.env.DB_KEY;
const PORT = 5000;
const mongooseOptions = {
  userNewUrlParser: true,
  unifiedTopology: true,
};
app.use(cors());
app.use(express.json());
app.use("/api/v1/users", userRouter);

const startServer = async () => {
mongoose.connect(DB_KEY);
  app.listen(PORT, () => {
    console.log("server is listening on port ", PORT);
  });
};

startServer()