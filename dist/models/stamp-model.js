"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var StampSchema = new mongoose_1.default.Schema({
    stampName: {
        type: String,
        required: true,
    },
    stampImage: {
        type: String,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    isStamp: {
        type: Boolean,
        default: false,
    },
    stampComment: {
        type: String,
    },
    weatherTemp: {
        type: String,
    },
    weatherIcon: {
        type: String,
    },
    createdAt: {
        type: String,
    },
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
});
StampSchema.virtual("stampId").get(function () {
    return this._id.toHexString();
});
StampSchema.set("toJSON", {
    virtuals: true,
});
var Stamp = mongoose_1.default.model("Stamp", StampSchema);
exports.default = Stamp;
//# sourceMappingURL=stamp-model.js.map