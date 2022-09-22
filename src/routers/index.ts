import { Router } from "express";
const router = Router();

import authRouter from "./auth-router";
import stampRouter from "./stamp-router";

router.use("/auth", authRouter);
router.use("/mypage", stampRouter);

export default router;
