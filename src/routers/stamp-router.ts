import { Router } from "express";
const router = Router();
import authMiddleware from "../middlewares/auth-middleware/auth-middleware";
import { findAllStamps, certifyStamp } from "../controllers/stamp-controller";
// import { imageUploader } from "../middlewares/s3/upload";

router.get("/", authMiddleware, findAllStamps);
router.post("/:stampId", authMiddleware, certifyStamp);

export default router;

// imageUploader.single("stampImage"),
