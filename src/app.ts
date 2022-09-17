import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { connect } from "./models/index";
import passportConfig from "./middlewares/passport";
import router from "./routers/index";
import { config } from "./config/constants";
import { Request, Response, NextFunction } from "express";
import { CustomError } from "./common/type";
require("express-async-errors");

const app = express();

connect();
passportConfig(app);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));
app.use(helmet());

app.use(router);

const errorHandling = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.statusCode).json({
    msg: err.message,
    success: false,
  });
};

router.use(errorHandling);

const port = config.port;
app.listen(port, () => {
  console.log(port, "Server is listening...");
});
