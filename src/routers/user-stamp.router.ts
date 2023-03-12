import { Router } from "express";
import * as stampController from "../controllers/user-stamp-controller";
import { imageUploader } from "../middlewares/s3/upload";
import { AuthMiddleware } from "../middlewares/auth-middleware/auth-middleware";

const router = Router();

router.get("/", AuthMiddleware, stampController.getAllUserStamps);
//파라미터명 변경 (stampId -> userStampId)
router.get("/:userStampId", AuthMiddleware, stampController.getUserStamp);
router.put(
  "/:userStampId",
  AuthMiddleware,
  imageUploader.single("stampImage"),
  stampController.certifyStamp
);

export default router;
