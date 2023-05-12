import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

// step2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },

  dateOfBirth: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    enum: ["male", "female"],
  },

  email: {
    type: String,
  },
  contactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
});
// step3. Create a Model.
const User = model<IUser>("User", userSchema);

export default User;
