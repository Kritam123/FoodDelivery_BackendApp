import mongoose from "mongoose";

type User = {
  auth0Id: string;
  username: string;
  email: string;
  addressLine1: string;
  city: string;
  country: string;
};

const userSchema = new mongoose.Schema<User>({
  auth0Id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required: true,
  },
  addressLine1: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
});


export default mongoose.model("User",userSchema);