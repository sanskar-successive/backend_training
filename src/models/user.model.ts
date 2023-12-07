import { Schema, model } from "mongoose";
import IUser from "../interfaces/IUser.js";

const userSchema: Schema<IUser> = new Schema({
  userId : {
    type : String,
    required : [true, "userId is required"],
    unique : true
  },
  username: {
    type: String,
    required: [true, "username is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password : {
    type : String,
    required : [true, "password is required"]
  }
});

const User = model<IUser>("User", userSchema);
export default User;
