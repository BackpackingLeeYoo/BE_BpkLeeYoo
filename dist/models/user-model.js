"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var UserSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    profileImg: {
        type: String,
    },
    refreshToken: {
        type: String,
    },
    stamps: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Stamp",
        },
    ],
});
UserSchema.virtual("userId").get(function () {
    return this._id.toHexString();
});
UserSchema.set("toJSON", {
    virtuals: true,
});
var User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
//# sourceMappingURL=user-model.js.map