import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth-middleware/auth-middleware";
import { UserController } from "../controllers/user-controller";
import { UserService } from "src/services/user-services";
import { UserRepository } from "src/repositories/user.repository";

const router = Router();
const userController = new UserController(
  new UserService(new UserRepository())
);

router.get("/me", AuthMiddleware, userController.getUser);

export default router;
