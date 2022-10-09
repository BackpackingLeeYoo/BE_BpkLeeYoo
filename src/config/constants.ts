import dotenv from "dotenv";
dotenv.config();

const {
  PORT,
  SESSION_SECRET,
  JWT_SECRETKEY,
  JWT_EXPIREIN,
  KAKAO_ID,
  KAKAO_CALLBACK,
  ACCESS_KEY,
  SECRET_ACCESS_KEY,
  REGION,
  BUCKET,
} = process.env;

const config = {
  port: PORT!,
  sessionSecret: SESSION_SECRET!,
};

const jwtwebtoken = {
  secretKey: JWT_SECRETKEY!,
  expiresIn: JWT_EXPIREIN!,
};

const kakao = {
  kakaoId: KAKAO_ID!,
  kakaoUrl: KAKAO_CALLBACK!,
};

const s3Bucket = {
  bucket: BUCKET!,
  accesskey: ACCESS_KEY!,
  secretAcesskey: SECRET_ACCESS_KEY!,
  region: REGION!,
};

export { config, jwtwebtoken, kakao, s3Bucket };
