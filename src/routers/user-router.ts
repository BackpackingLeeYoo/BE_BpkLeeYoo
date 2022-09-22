import { Router } from "express";
const router = Router();

import authMiddleware from "../middlewares/auth-middleware/auth-middleware";
import { findUser } from "../controllers/user-controller";

router.get("/me", authMiddleware, findUser);

export default router;
