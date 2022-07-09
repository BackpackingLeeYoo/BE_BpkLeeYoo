import Mongoose from "mongoose";
import { config } from "../config/config.js";

export const connect = () => {
  Mongoose.connect(config.DB, { ignoreUndefined: true }).catch((err) => {
    console.error(err);
  });
};
