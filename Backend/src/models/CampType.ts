import { Schema, model } from "mongoose";

const campTypeSchema = new Schema({
  sca_type_name: { type: String, required: true },
  sca_type_description: { type: String, required: true },
});

campTypeSchema.set("toJSON", {
  transform: (document: any, returnedObject: any) => {
    delete returnedObject.__v;
  },
});

export const CampType = model("CampType", campTypeSchema);
