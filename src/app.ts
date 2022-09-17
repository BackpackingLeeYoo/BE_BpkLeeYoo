import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { connect } from "./models/index";
import passport from "passport";
import session from "express-session";
import passportConfig from "./middlewares/passport";
import router from "./routers/index";
import { config } from "./config/constants";

const app = express();

connect();
passportConfig(app);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));
app.use(helmet());

app.use(router);

app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false,
    // cookie: {
    //   httpOnly: true,
    //   secure: false,
    // },
  })
);

app.use(passport.initialize());
app.use(passport.session());

const port = config.port;
app.listen(port, () => {
  console.log(port, "Server is listening...");
});
