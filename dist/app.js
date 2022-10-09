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
var app = express_1.default();
index_1.connect();
passport_1.default(app);
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(morgan_1.default("tiny"));
app.use(helmet_1.default());
app.use(index_2.default);
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   res
//     .sendStatus(StatusCodeEnum.INTERNAL_SERVER_ERROR)
//     .json({ ErrorMessageEnum: ErrorMessageEnum.INTERNAL_SERVER_ERROR });
// });
var port = constants_1.config.port;
app.listen(port, function () {
    console.log(port, "Server is listening...");
});
//# sourceMappingURL=app.js.map