import { Router } from "express";
const router = Router();
import passport from "passport";
import authMiddleware from "../middlewares/auth-middleware/auth-middleware";
import {
  kakaoCallback,
  findUser,
  createUser,
} from "../controllers/auth-controller";

router.get("/kakao", kakaoCallback);
router.get("/kakao/callback", passport.authenticate("kakao"));

router.get("/me", authMiddleware, findUser);

router.post("/user", createUser);

export default router;
