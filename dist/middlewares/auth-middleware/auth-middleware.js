"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var user_model_1 = __importDefault(require("../../models/user-model"));
var constants_1 = require("../../config/constants");
var type_1 = require("../../common/type");
var UNAUTHORIZED = type_1.StatusCodeEnum.UNAUTHORIZED;
var UNAUTHORIZED_ERROR = type_1.ErrorMessageEnum.UNAUTHORIZED_ERROR, NOT_FOUND_USER = type_1.ErrorMessageEnum.NOT_FOUND_USER;
var AuthMiddleware = function (req, res, next) {
    var authorization = req.headers.authorization;
    var _a = (authorization || "").split(" "), authType = _a[0], authToken = _a[1];
    if (!authToken || authType !== "Bearer") {
        return res.status(UNAUTHORIZED).send({
            message: UNAUTHORIZED_ERROR,
        });
    }
    try {
        var payload = jsonwebtoken_1.default.verify(authToken, constants_1.jwtwebtoken.secretKey);
        var userId = payload.userId;
        user_model_1.default.findById(userId).then(function (user) {
            res.locals.user = user;
            next();
        });
    }
    catch (err) {
        return res.status(UNAUTHORIZED).send({
            message: NOT_FOUND_USER,
        });
    }
};
exports.default = AuthMiddleware;
//# sourceMappingURL=auth-middleware.js.map