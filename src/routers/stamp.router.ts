import { Router } from "express";
import { StampController } from "../controllers/stamp-controller";
import { imageUploader } from "../middlewares/s3/upload";
import { AuthMiddleware } from "../middlewares/auth-middleware/auth-middleware";

const router = Router();
const stampController = new StampController();

router.get("/", AuthMiddleware, stampController.getAllStamps);
router.get("/:stampId", AuthMiddleware, stampController.getStamp);
router.put(
  "/:stampId",
  AuthMiddleware,
  imageUploader.single("stampImage"),
  stampController.certifyStamp
);

export default router;
