import mongoose from "mongoose";

const postScheme = new mongoose.Schema({
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  caption: { type: String, required: false },
  photoPath: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Post", postScheme);
