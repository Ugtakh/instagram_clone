import Router from "express";
import { getPost } from "../controller/posts";

const router = Router();

router.post("/post", authenticate, getPost);
export default router;
