import { Router } from "express";
const router = Router();
import authMiddleware from "../middlewares/auth-middleware/auth-middleware";
import {
  findAllStamps,
  certifyStamp,
  uploadImage,
} from "../controllers/stamp-controller";
import { imageUploader } from "../middlewares/s3/upload";

router.get("/", authMiddleware, findAllStamps);
router.put("/stamp/:stampId", imageUploader.single("stampImage"), uploadImage);
router.put("/:stampId", certifyStamp);

export default router;
