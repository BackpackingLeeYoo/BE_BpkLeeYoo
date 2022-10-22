import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { connect } from "./schemas/index";
import passportConfig from "./middlewares/passport";
import router from "./routers/index";
import { config } from "./configs/constants";

const app = express();

connect();
passportConfig(app);

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());

app.use(router);

const port = config.port;
app.listen(port, () => {
  console.log(port, "Server is listening...");
});
