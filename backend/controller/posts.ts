import { Request, Response } from "express";
import Post from "../models/Post";

export const getPost = async (req: Request, res: Response) => {
  const posts = Post.find();

  //   res.status(200).json({ posts });
  res.status(200).json({
    posts: [
      {
        name: "User-1",
      },
    ],
  });
};
