"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var constants_1 = require("../../config/constants");
module.exports = function (req, res, next) {
    var authorization = req.headers.authorization;
    var _a = (authorization || "").split(" "), authType = _a[0], authToken = _a[1];
    if (!authToken || authType !== "Bearer") {
        res.status(401).send({
            errorMessage: "로그인 후 이용 가능한 기능입니다.",
        });
        return;
    }
    try {
        var payload = jsonwebtoken_1.default.verify(authToken, constants_1.jwtwebtoken.secretKey);
        console.log(payload);
        // User.findById(userId).then((user) => {
        //   res.locals.user = user;
        //   next();
        // });
    }
    catch (err) {
        res.status(401).send({
            errorMessage: "로그인 후 이용 가능한 기능입니다.",
        });
    }
};
