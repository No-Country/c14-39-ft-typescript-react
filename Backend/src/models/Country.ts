import { Schema, model } from "mongoose";

const countrySchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  list_sport_centers: [
    { type: Schema.Types.ObjectId, required: false, ref: "sportcenters" },
  ],
});

countrySchema.set("toJSON", {
  transform: (document: any, returnedObject: any) => {
    delete returnedObject.__v;
  },
});

export const Country = model("Country", countrySchema);
