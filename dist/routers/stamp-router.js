"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var auth_middleware_1 = __importDefault(require("../middlewares/auth-middleware/auth-middleware"));
var stamp_controller_1 = require("../controllers/stamp-controller");
var upload_1 = require("../middlewares/s3/upload");
router.get("/", auth_middleware_1.default, stamp_controller_1.findAllStamps);
router.post("/:stampId", auth_middleware_1.default, upload_1.imageUploader.single("stampImage"), stamp_controller_1.certifyStamp);
exports.default = router;
//# sourceMappingURL=stamp-router.js.map