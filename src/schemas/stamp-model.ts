import mongoose from "mongoose";

const StampSchema = new mongoose.Schema({
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
    default: new Date(),
  },
  updatedAt: {
    type: String,
    default: new Date(),
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

StampSchema.virtual("stampId").get(function () {
  return this._id.toHexString();
});

StampSchema.set("toJSON", {
  virtuals: true,
});

const Stamp = mongoose.model("Stamp", StampSchema);
export default Stamp;
