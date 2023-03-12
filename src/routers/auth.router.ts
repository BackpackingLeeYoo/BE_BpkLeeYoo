import { Router } from "express";
import passport from "passport";
import * as authController from "../controllers/auth-controller";

const router = Router();

router.get("/kakao", authController.kakaoCallback);
router.get("/kakao/callback", passport.authenticate("kakao"));

export default router;
