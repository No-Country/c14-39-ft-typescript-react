import { Schema, model } from "mongoose";

const campTypeSchema = new Schema({
  name: { type: Number, required: true },
  description: { type: String, required: true },
  camp_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Camp",
      required: true
    }
  ]
});

campTypeSchema.set("toJSON", {
  transform: (document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const CampType = model("CampType", campTypeSchema);
