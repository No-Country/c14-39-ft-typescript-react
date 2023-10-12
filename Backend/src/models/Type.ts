import { Schema, model } from "mongoose";

const typeSchema = new Schema({
  name: {
    type: String,
    required: true,
    enum: ["User", "Admin", "Owner"],
  },
  description: { type: String, required: true },
});

typeSchema.set("toJSON", {
  transform: (document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Type = model("Type", typeSchema);

export default Type;
