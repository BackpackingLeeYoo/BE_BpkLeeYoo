"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var passport_1 = __importDefault(require("passport"));
var auth_controller_1 = require("../controllers/auth-controller");
router.get("/kakao", auth_controller_1.kakaoCallback);
router.get("/kakao/callback", passport_1.default.authenticate("kakao"));
exports.default = router;
