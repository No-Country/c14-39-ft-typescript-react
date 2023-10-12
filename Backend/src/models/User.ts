import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  image: { type: String, required: true },
  country: {
    type: Schema.Types.ObjectId,
    ref: "Country",
  },
  type: {
    type: Schema.Types.ObjectId,
    ref: "Type"
  }
});

userSchema.set("toJSON", {
  transform: (document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id;

    const { _id, __v, ...restOfReturnedObject } = returnedObject
    restOfReturnedObject.id = _id

    returnedObject = restOfReturnedObject
  },
});

const User = model("User", userSchema);

export default User