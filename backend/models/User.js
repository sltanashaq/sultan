import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  image: String,
  money: {
    type: Number,
    default: 0
  }
});

export default mongoose.model("User", UserSchema);