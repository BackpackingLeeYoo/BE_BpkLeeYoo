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
  stamps: [
    {
      type: mongoose.Schema.Types.ObjectId,
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

const User = mongoose.model("User", UserSchema);
export default User;
