import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import connectDb from "./db/db";
import User from "./models/User";
import userRoute from "./route/users";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const dbURi = process.env.DATABASE_URI || "";

app.use(express.json());
app.use(cors());

connectDb(dbURi);

app.use("/", userRoute);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello TS" });
});

app.listen(PORT, () => console.log(`Server is running at ${PORT} port`));
