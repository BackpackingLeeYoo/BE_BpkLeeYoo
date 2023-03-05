import mongoose from "mongoose";
import { db } from "../common/constants";

export const connect = () => {
  mongoose.connect(db.dbUrl, { ignoreUndefined: true }).catch((err: any) => {
    console.error(err);
  });
};
