import mongoose from "mongoose";
import { db } from "../configs/constants";

export const connect = () => {
  mongoose.connect(db.dbUrl, { ignoreUndefined: true }).catch((err: any) => {
    console.error(err);
  });
};
