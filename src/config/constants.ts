import dotenv from "dotenv";
dotenv.config();

const {
  PORT,
  SESSION_SECRET,
  JWT_SECRETKEY,
  JWT_EXPIREIN,
  KAKAO_ID,
  KAKAO_CALLBACK,
} = process.env;

const config = {
  port: PORT,
  sessionSecret: SESSION_SECRET,
};

const jwtwebtoken = {
  secretKey: JWT_SECRETKEY,
  expiresIn: JWT_EXPIREIN,
};

const kakao = {
  kakaoId: KAKAO_ID,
  kakaoUrl: KAKAO_CALLBACK,
};

export { config, jwtwebtoken, kakao };
