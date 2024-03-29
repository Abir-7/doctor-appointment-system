import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  image:{ type: String, required: false },
  role:{ type: String, required: true }
});

const UserModel = mongoose.models.Users || mongoose.model("Users", userSchema);

export default UserModel;
