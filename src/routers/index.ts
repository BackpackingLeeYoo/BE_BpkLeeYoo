import { Router } from "express";
const router = Router();

import authRouter from "./auth-router";
import userRouter from "./stamp-router";

router.use("/auth", authRouter);
router.use("/mypage", userRouter);

export default router;
