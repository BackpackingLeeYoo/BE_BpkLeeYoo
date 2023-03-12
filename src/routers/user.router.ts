import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth-middleware/auth-middleware";
import * as userController from "../controllers/user-controller";

const router = Router();

router.get("/me", AuthMiddleware, userController.getUser);

export default router;
