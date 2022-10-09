"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var passport_1 = __importDefault(require("passport"));
var auth_middleware_1 = __importDefault(require("../middlewares/auth-middleware/auth-middleware"));
var auth_controller_1 = require("../controllers/auth-controller");
router.get("/kakao", auth_controller_1.kakaoCallback);
router.get("/kakao/callback", passport_1.default.authenticate("kakao"));
router.get("/me", auth_middleware_1.default, auth_controller_1.findUser);
exports.default = router;
//# sourceMappingURL=auth-router.js.map