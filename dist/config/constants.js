"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kakao = exports.jwtwebtoken = exports.config = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, PORT = _a.PORT, JWT_SECRETKEY = _a.JWT_SECRETKEY, JWT_EXPIREIN = _a.JWT_EXPIREIN, KAKAO_ID = _a.KAKAO_ID, KAKAO_CALLBACK = _a.KAKAO_CALLBACK;
var config = {
    port: PORT,
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
