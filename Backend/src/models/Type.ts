import { Schema, model } from "mongoose";

const typeSchema = new Schema({
  name: { type: String, required: true },
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

    const { _id, __v, ...restOfReturnedObject } = returnedObject
    restOfReturnedObject.id = _id

    returnedObject = restOfReturnedObject
  },
});

const Type = model("Type", typeSchema);

export default Type