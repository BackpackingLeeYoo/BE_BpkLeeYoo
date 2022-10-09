"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessageEnum = exports.StatusCodeEnum = void 0;
var StatusCodeEnum;
(function (StatusCodeEnum) {
    StatusCodeEnum[StatusCodeEnum["OK"] = 200] = "OK";
    StatusCodeEnum[StatusCodeEnum["NO_CONTENT"] = 204] = "NO_CONTENT";
    StatusCodeEnum[StatusCodeEnum["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCodeEnum[StatusCodeEnum["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    StatusCodeEnum[StatusCodeEnum["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCodeEnum[StatusCodeEnum["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(StatusCodeEnum = exports.StatusCodeEnum || (exports.StatusCodeEnum = {}));
var ErrorMessageEnum;
(function (ErrorMessageEnum) {
    ErrorMessageEnum["INTERNAL_SERVER_ERROR"] = "\uC11C\uBC84\uBB38\uC81C\uB85C \uC751\uB2F5\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    ErrorMessageEnum["UNAUTHORIZED_ERROR"] = "\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uD1A0\uD070\uC785\uB2C8\uB2E4.";
    ErrorMessageEnum["BAD_REQUEST_ERROR"] = "\uC798\uBABB\uB41C \uC694\uCCAD\uC785\uB2C8\uB2E4.";
    ErrorMessageEnum["NOT_FOUND_USER"] = "\uC0AC\uC6A9\uC790 \uC815\uBCF4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    ErrorMessageEnum["NOT_FOUND_ERROR"] = "\uC694\uCCAD\uD55C \uC815\uBCF4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.";
    ErrorMessageEnum["WRONG_EXTENSION"] = "\uC798\uBABB\uB41C \uD30C\uC77C \uD615\uC2DD\uC785\uB2C8\uB2E4.";
})(ErrorMessageEnum = exports.ErrorMessageEnum || (exports.ErrorMessageEnum = {}));
//# sourceMappingURL=type.js.map