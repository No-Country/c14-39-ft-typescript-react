import mongoose, { Schema, model } from "mongoose";

const sportCenterSchema = new Schema({
  sc_name: { type: String, required: true },
  sc_description: { type: String, required: true },
  sc_phone: { type: String, required: true },
  sc_info: {
    sc_email: { type: String, required: true, unique: true },
    sc_address: { type: String, required: true },
    sc_lat: { type: Number, required: true },
    sc_alt: { type: Number, required: true },
    sc_open: { type: String, required: true },
    sc_close: { type: String, required: true },
  },
  sc_active: { type: Boolean, required: true },
  list_sport_camps: [
    {
      type: Schema.Types.ObjectId,
      ref: "camps",
      required: false,
    },
  ],
  sc_imgs: [
    {
      type: String,
      required: true,
    },
  ],
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

sportCenterSchema.set("toJSON", {
  transform: (document: any, returnedObject: any) => {
    delete returnedObject.__v;
  },
});

export const SportCenterModel =
  mongoose.models.sportcenters || model("sportcenters", sportCenterSchema);
