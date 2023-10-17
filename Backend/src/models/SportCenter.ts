import { Schema, model } from "mongoose";

const sportCenterSchema = new Schema({
  // falta añadir validacion name, email unique true con mongoose-unique-validator o Unique Indexes de mongodb u otro
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  lat: { type: Number, required: true },
  alt: { type: Number, required: true },
  open: { type: Boolean, required: true },
  close: { type: Boolean, required: true },
  active: { type: Boolean, required: true },
  imgs: [
    {
      type: String,
      required: true
    }
  ],
  camps_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Camp",
      required: true,
    }
  ],
  country_id: {
    type: Schema.Types.ObjectId,
    ref: "Country",
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
});

sportCenterSchema.set("toJSON", {
  transform: (document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const SportCenter = model("SportCenter", sportCenterSchema);
