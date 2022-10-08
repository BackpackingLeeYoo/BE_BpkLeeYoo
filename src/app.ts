import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import multer from "multer";
import { connect } from "./models/index";
import passportConfig from "./middlewares/passport";
import router from "./routers/index";
import { config } from "./config/constants";
import { Request, Response, NextFunction } from "express";
import { StatusCodeEnum, ErrorMessageEnum } from "./common/type";

const app = express();

connect();
passportConfig(app);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));
app.use(helmet());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res
    .sendStatus(StatusCodeEnum.INTERNAL_SERVER_ERROR)
    .json({ ErrorMessageEnum: ErrorMessageEnum.INTERNAL_SERVER_ERROR });
});

const port = config.port;
app.listen(port, () => {
  console.log(port, "Server is listening...");
});
