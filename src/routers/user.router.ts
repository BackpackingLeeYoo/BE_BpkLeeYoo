import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth-middleware/auth-middleware";
import { UserController } from "../controllers/user-controller";

const router = Router();
const userController = new UserController();

router.get("/me", AuthMiddleware, userController.getUser);

export default router;
