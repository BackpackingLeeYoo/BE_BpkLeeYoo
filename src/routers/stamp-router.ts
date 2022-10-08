import { Router } from "express";
const router = Router();
import authMiddleware from "../middlewares/auth-middleware/auth-middleware";
import { findAllStamps, certifyStamp } from "../controllers/stamp-controller";
import imageUploader from "../middlewares/s3/upload";

router.get("/", authMiddleware, findAllStamps);
router.post(
  "/:stampId",
  imageUploader.single("stampImage"),
  authMiddleware,
  certifyStamp
);

export default router;
