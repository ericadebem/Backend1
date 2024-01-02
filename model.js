import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
},{
    versionKey: false,
    collection: "users"
});
export const Users = mongoose.model("Users", UserSchema);



