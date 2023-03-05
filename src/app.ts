import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import router from "./routers/index";
import { connect } from "./schemas/index";
import { KakaoModule } from "./middlewares/passport";
import { config } from "./common/constants";
import {
  errorHandler,
  errorLogger,
} from "./middlewares/error-handler/error-handler-middleware";

dotenv.config();

const app = express();
const port = config.port;

connect();
KakaoModule(app);

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use(errorLogger);
app.use(errorHandler);

app.use(router);

app.listen(port, () => {
  console.log(port, "Server is listening...");

  await sequelize
    .authenticate()
    .then(async () => {
      console.log("connection success");
    })
    .catch((error) => {
      console.log("error message : ", error);
    });
});
