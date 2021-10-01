import { Request, Response } from "express";
import User from "../models/User";

const signup = async (req: Request, res: Response) => {
  const { usename, email, password } = req.body;
  res.status(200).json({ usename, email, password });
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, message: "Must be Email or password." });
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    res
      .status(401)
      .json({ success: false, message: "Wrong Email or password." });
  }
  const success = await user.checkPassword(password);
  if (!success) {
    res
      .status(401)
      .json({ success: false, message: "Wrong Email or password." });
  }
  const token = user.getJsonWebToken();
  res.status(200).json({ success: true, data: { token, user } });
};

export { signup, login };
