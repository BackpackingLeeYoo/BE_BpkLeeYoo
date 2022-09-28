import { Router } from "express";
const router = Router();
import authMiddleware from "../middlewares/auth-middleware/auth-middleware";
import { findAllStamps, certifyStamp } from "../controllers/stamp-controller";

router.get("/", authMiddleware, findAllStamps);
router.post("/:stampId", certifyStamp);

export default router;
