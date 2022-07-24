import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "normal",
  },
  registeredAt: {
    type: Date,
    default: Date.now(),
  },
});

const user = mongoose.model("users", userSchema);
export default user;
