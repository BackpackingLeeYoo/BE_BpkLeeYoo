import { Router } from "express";
const router = Router();

import passport from "passport";
import { kakaoCallback } from "../controllers/auth-controller";

// 카카오 로그인
router.get("/kakao", kakaoCallback);
router.get("/kakao/callback", passport.authenticate("kakao"));

export default router;
