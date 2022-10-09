"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.development = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var DB_URL = process.env.DB_URL;
var development = {
    db: DB_URL,
};
exports.development = development;
//# sourceMappingURL=config.js.map