"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiImageUploader = exports.imageUploader = void 0;
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var multer_1 = __importDefault(require("multer"));
var multer_s3_1 = __importDefault(require("multer-s3"));
var path_1 = __importDefault(require("path"));
var dayjs_1 = __importDefault(require("dayjs"));
var type_1 = require("../../common/type");
var constants_1 = require("../../config/constants");
aws_sdk_1.default.config.update({
    accessKeyId: constants_1.s3Bucket.accesskey,
    secretAccessKey: constants_1.s3Bucket.secretAcesskey,
    region: constants_1.s3Bucket.region,
});
var s3 = new aws_sdk_1.default.S3();
var fileFilter = function (req, file, cb) {
    if (file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg") {
        cb(null, true);
    }
    else {
        return cb(new Error(type_1.ErrorMessageEnum.WRONG_EXTENSION));
    }
};
exports.imageUploader = multer_1.default({
    storage: multer_s3_1.default({
        s3: s3,
        bucket: constants_1.s3Bucket.bucket,
        acl: "public-read",
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            cb(null, "stampImage/" + dayjs_1.default().format("YYYY/MM/DD") + "_" + path_1.default.basename(file.originalname));
        },
    }),
    fileFilter: fileFilter,
});
exports.multiImageUploader = multer_1.default({
    storage: multer_s3_1.default({
        s3: s3,
        bucket: constants_1.s3Bucket.bucket,
        acl: "public-read",
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            cb(null, "reveiwImage/" + dayjs_1.default().format("YYYY/MM/DD") + "_" + path_1.default.basename(file.originalname));
        },
    }),
    fileFilter: fileFilter,
});
//# sourceMappingURL=upload.js.map