import { Router } from "express";
const router = Router();

import authMiddleware from "../middlewares/auth-middleware/auth-middleware";
import { getUser } from "../controllers/user-controller";

router.get("/me", authMiddleware, getUser);

export default router;
