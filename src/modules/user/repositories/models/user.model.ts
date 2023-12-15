import { Schema, model } from "mongoose";
import { ILibrary, IUser } from "../../entities/IUser";

const librarySchema: Schema<ILibrary> = new Schema({
  books: { type: [String] },
  datePurchased: { type: Date },
  readingStatus: {
    type: {
      percentCompleted: { type: Number },
      lastActivity: { type: Date },
    },
  },
});

const userSchema: Schema<IUser> = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  contact: {
    type: {
      email: { type: String, required: true, unique: true },
      phone: { type: String, unique: true },
    },
  },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  profilePic: { type: String },
  library: librarySchema,
});

const User = model<IUser>("User", userSchema);
export default User;
