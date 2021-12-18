import mongoose from "mongoose";

export default mongoose.models.History || mongoose.model("History", {
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
});
