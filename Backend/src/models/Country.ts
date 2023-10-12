import { Schema, model } from "mongoose";

const countrySchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    }
  ],
});

countrySchema.set("toJSON", {
  transform: (document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Country = model("Country", countrySchema);

export default Country