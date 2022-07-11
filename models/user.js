import Mongoose from "mongoose";

const userSchema = Mongoose.Schema({
  nickname: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
  },
  email: {
    type: String,
  },
});

userSchema.virtual("userId").get(function () {
  return this._id.toHexString();
});
userSchema.set("toJSON", {
  virtuals: true,
});

module.exports = Mongoose.model("User", userSchema);
