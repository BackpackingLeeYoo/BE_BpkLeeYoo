import { Router } from "express";
const router = Router();
import authMiddleware from "../middlewares/auth-middleware/auth-middleware";
import { findAllUserStamp } from "../controllers/stamp-controller";

router.get("/", authMiddleware, findAllUserStamp);

export default router;
