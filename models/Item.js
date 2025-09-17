import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    location: { type: String, required: true },
    status: { type: String, enum: ["lost", "found"], required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);
export default Item;

