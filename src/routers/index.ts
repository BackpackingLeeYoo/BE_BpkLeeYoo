import { Router } from "express";
const router = Router();

import authRouter from "./auth-router";
import userRouter from "./user-router";

router.use("/auth", authRouter);
router.use("/user", userRouter);

export default router;
