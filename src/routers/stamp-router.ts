import { Router } from "express";
const router = Router();
import authMiddleware from "../middlewares/auth-middleware/auth-middleware";
import {
  findAllStamps,
  findStamp,
  certifyStamp,
} from "../controllers/stamp-controller";
import { imageUploader } from "../middlewares/s3/upload";

router.get("/", authMiddleware, findAllStamps);
router.get("/:stampId", authMiddleware, findStamp);
router.put(
  "/:stampId",
  authMiddleware,
  imageUploader.single("stampImage"),
  certifyStamp
);

export default router;
