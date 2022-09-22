import { Router } from "express";
const router = Router();
import authMiddleware from "../middlewares/auth-middleware/auth-middleware";
import { findAllUserStamp, createStamp } from "../controllers/stamp-controller";

router.post("/stamp", createStamp);
router.get("/", authMiddleware, findAllUserStamp);

export default router;
