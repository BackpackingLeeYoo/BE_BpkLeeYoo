import express from "express";
const router = express.Router();

import AuthRouter from "./auth";

import { ROUTE } from "../config/constants";

router.use(ROUTE.INDEX.AUTH, AuthRouter);
