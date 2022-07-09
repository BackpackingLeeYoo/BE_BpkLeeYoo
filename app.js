import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { connect } from "./models/index.js";
import { config } from "./config/config.js";
// import { passportConfig } from "./passport";
// import { router } from "./routers/index.js";

const app = express();
const port = config.PORT;
connect();
// passportConfig(app);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));
app.use(helmet());

// app.use(router);

app.listen(port, () => {
  console.log(port, "Server is listening...");
});
