import { Router } from "express";
const router = Router();

import {
  findCard,
  createCard,
} from "../controllers/card-controller";


router.get("/:cardId", findCard);
router.post("/", createCard);

export default router;
