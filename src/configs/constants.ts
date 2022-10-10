import dotenv from "dotenv";
dotenv.config();

const {
  DB_URL,
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

const db = {
  dbUrl: DB_URL!,
};

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

export { db, config, jwtwebtoken, kakao, s3Bucket };
