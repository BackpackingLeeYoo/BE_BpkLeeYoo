"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var index_1 = require("./models/index");
var passport_1 = __importDefault(require("./middlewares/passport"));
var index_2 = __importDefault(require("./routers/index"));
var constants_1 = require("./config/constants");
var app = (0, express_1.default)();
(0, index_1.connect)();
(0, passport_1.default)(app);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, morgan_1.default)("tiny"));
app.use((0, helmet_1.default)());
app.use(index_2.default);
var port = constants_1.config.port;
app.listen(port, function () {
    console.log(port, "Server is listening...");
});
