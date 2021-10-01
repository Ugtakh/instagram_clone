import Router from "express";
import { signup, login } from "../controller/users";

const router = Router();

router.post("signup", signup);

export default router;
