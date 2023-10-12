import { Schema, model } from "mongoose";

const typeSchema = new Schema({
  name: {
    type: String,
    required: true,
    enum: ["User", "Admin", "Owner"],
  },
  description: { type: String, required: true },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    }
  ],
});

typeSchema.set("toJSON", {
  transform: (document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Type = model("Type", typeSchema);

export default Type