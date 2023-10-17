import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  // falta añadir validacion email unique true con mongoose-unique-validator o Unique Indexes de mongodb u otro
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  image: { type: String, required: true },
  country_id: {
    type: Schema.Types.ObjectId,
    ref: "Country",
    required: true,
  },
  type_id: {
    type: Schema.Types.ObjectId,
    ref: "Type",
    required: true,
  },
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
