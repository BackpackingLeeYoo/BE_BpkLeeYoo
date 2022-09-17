"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kakaoCallback = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var passport_1 = __importDefault(require("passport"));
var constants_1 = require("../config/constants");
var kakaoCallback = function (req, res, next) {
    passport_1.default.authenticate("kakao", { failureRedirect: "/" }, function (err, user) {
        console.log("userInfo", user);
        if (err)
            return next(err);
        var payload = { userId: user.userId }; //TODO 체크
        var options = {
            expiresIn: constants_1.jwtwebtoken.expiresIn,
        };
        var token = jsonwebtoken_1.default.sign(payload, constants_1.jwtwebtoken.secretKey, options);
        console.log("kakao-token", token);
        res.json({
            token: token,
            user: user,
        });
    })(req, res, next);
};
exports.kakaoCallback = kakaoCallback;
