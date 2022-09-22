import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
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
});

UserSchema.virtual("userId").get(function () {
  return this._id.toHexString();
});

UserSchema.set("toJSON", {
  virtuals: true,
});

const User = mongoose.model("UserRepository", UserSchema);
export default User;
