import express from "express";
const router = express.Router();

import authRouter from "./auth-router";
import stampRouter from "./stamp-router";
import cardRouter from "./card-router";

router.use("/auth", authRouter);
router.use("/mypage", stampRouter);
//백호 프로젝트
router.use("/card", cardRouter);

export default router;
