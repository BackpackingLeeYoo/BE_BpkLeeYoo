import { Router } from "express";
const router = Router();

import passport from "passport";
import authMiddleware from "../middlewares/auth-middleware/auth-middleware";
import { kakaoCallback, findUser } from "../controllers/auth-controller";

router.get("/kakao", kakaoCallback);
router.get("/kakao/callback", passport.authenticate("kakao"));

router.get("/me", authMiddleware, findUser);

export default router;
