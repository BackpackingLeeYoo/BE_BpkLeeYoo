import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  to: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    default: new Date(),
  },
});

CardSchema.virtual("stampId").get(function () {
  return this._id.toHexString();
});

CardSchema.set("toJSON", {
  virtuals: true,
});

const Card = mongoose.model("Card", CardSchema);
export default Card;
