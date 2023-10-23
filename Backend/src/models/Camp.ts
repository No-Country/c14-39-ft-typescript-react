import { Schema, model } from "mongoose";

const campSchema = new Schema({
  sca_num: { type: Number, required: true },
  sca_description: { type: String, required: true },
  sca_capacity: { type: Number, required: true },
  sca_width: { type: Number, required: true },
  sca_height: { type: Number, required: true },
  sca_active: { type: String, required: true },
  sca_imgs: [
    {
      type: String,
      required: true,
    },
  ],
  campType_id: {
    type: Schema.Types.ObjectId,
    ref: "CampType",
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    requuired: true,
  },
});

campSchema.set("toJSON", {
  transform: (document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const Camp = model("Camp", campSchema);
