import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  //Porque seria necesario el city_id?
  city: { type: String },
  //Porque seria necesario el address_id?
  address: { type: String },
  image: { type: String},
  //Porque seria necesario el country_id?
  country_id: {
    type: Schema.Types.ObjectId,
    ref: "Country",
    
  },
  type_id: {
    type: Schema.Types.ObjectId,
    ref: "Type",
  },
  //Porque seria necesario el sporcenter_id?
  sportCenter_id: {
    type: Schema.Types.ObjectId,
    ref: "SportCenter",
  }
});

userSchema.set("toJSON", {
  transform: (document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

export const User = model("User", userSchema);
