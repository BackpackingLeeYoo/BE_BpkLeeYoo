import dotenv from "dotenv";
import { Config, Jwtwebtoken } from "./type";
dotenv.config();

const { PORT, JWT_SECRETKEY, JWT_EXPIREIN } = process.env;

const config: Config = {
  port: PORT!,
};

const jwtwebtoken: Jwtwebtoken = {
  secretKey: JWT_SECRETKEY!,
  expiresIn: JWT_EXPIREIN!,
};

export { config, jwtwebtoken };
