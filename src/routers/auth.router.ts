import { Router } from "express";
import passport from "passport";
import { AuthController } from "../controllers/auth-controller";

const router = Router();
const authController = new AuthController();

router.get("/kakao", authController.kakaoCallback);
router.get("/kakao/callback", passport.authenticate("kakao"));

export default router;
