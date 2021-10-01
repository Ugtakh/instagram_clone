import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface IUser {
  lastname?: string;
  firstname?: string;
  email: string;
  password: string;
  avatar?: string;
  createdAt?: Date;
  lastLogin?: Date;
}

//Create user schema
const UserScheme = new Schema<IUser>({
  lastname: { type: String, required: true },
  firstname: { type: String, required: true },
  email: {
    type: String,
    required: [true, "Email address must be."],
    unique: true,
    lowercase: true,
  },
  password: { type: String, required: true, select: false },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
});

//Before user saves to mongoDB is work
UserScheme.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserScheme.methods.getJsonWebToken = function () {
  const token = jwt.sign({ id: this.id }, "SECRET123456789@@@", {
    expiresIn: "12h",
  });
  return token;
};

UserScheme.methods.checkPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("User", UserScheme);
