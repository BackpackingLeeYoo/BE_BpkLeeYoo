"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = require("../config/config");
var connect = function () {
    mongoose_1.default.connect(config_1.development.db, { ignoreUndefined: true }).catch(function (err) {
        console.error(err);
    });
};
exports.connect = connect;
