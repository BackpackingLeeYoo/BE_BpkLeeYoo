"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3Bucket = exports.kakao = exports.jwtwebtoken = exports.config = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, PORT = _a.PORT, SESSION_SECRET = _a.SESSION_SECRET, JWT_SECRETKEY = _a.JWT_SECRETKEY, JWT_EXPIREIN = _a.JWT_EXPIREIN, KAKAO_ID = _a.KAKAO_ID, KAKAO_CALLBACK = _a.KAKAO_CALLBACK, ACCESS_KEY = _a.ACCESS_KEY, SECRET_ACCESS_KEY = _a.SECRET_ACCESS_KEY, REGION = _a.REGION, BUCKET = _a.BUCKET;
var config = {
    port: PORT,
    sessionSecret: SESSION_SECRET,
};
exports.config = config;
var jwtwebtoken = {
    secretKey: JWT_SECRETKEY,
    expiresIn: JWT_EXPIREIN,
};
exports.jwtwebtoken = jwtwebtoken;
var kakao = {
    kakaoId: KAKAO_ID,
    kakaoUrl: KAKAO_CALLBACK,
};
exports.kakao = kakao;
var s3Bucket = {
    bucket: BUCKET,
    accesskey: ACCESS_KEY,
    secretAcesskey: SECRET_ACCESS_KEY,
    region: REGION,
};
exports.s3Bucket = s3Bucket;
//# sourceMappingURL=constants.js.map