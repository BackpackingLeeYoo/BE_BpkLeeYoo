import mongoose from "mongoose";

import { development } from "../config/config";

export const connect = () => {
  mongoose.connect(development.db, { ignoreUndefined: true }).catch((err) => {
    console.error(err);
  });
};
