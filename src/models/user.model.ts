import { Schema, model, Document } from "mongoose";

const nameSchema = new Schema({
  title: String,
  first: String,
  last: String,
});

interface IUser extends Document {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: string;
  email: {
    type: string;
    unique: boolean;
  };
  phone: string;
  isProcessed: boolean;
}

const userSchema = new Schema<IUser>({
  gender: String,
  name: nameSchema,
  location: String,
  email: {
    type: String,
    unique: true,
  },
  phone: String,
  isProcessed: Boolean,
});

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
