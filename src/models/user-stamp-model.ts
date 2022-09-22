import mongoose from "mongoose";

const UserStampSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  stamps: {
    type: Array,
    required: true,
  },
});

UserStampSchema.virtual("stampId").get(function () {
  return this._id.toHexString();
});

UserStampSchema.set("toJSON", {
  virtuals: true,
});

const UserStamp = mongoose.model("UserStamp", UserStampSchema);
export default UserStamp;
