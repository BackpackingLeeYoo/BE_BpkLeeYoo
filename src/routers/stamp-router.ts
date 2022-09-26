import { Router } from "express";
const router = Router();
import authMiddleware from "../middlewares/auth-middleware/auth-middleware";
import {
  findAllUserStamp,
  createStamp,
  createUserStamp,
} from "../controllers/stamp-controller";

router.post("/stamp", createStamp);
router.get("/", authMiddleware, findAllUserStamp);
router.post("/", createUserStamp);

export default router;
