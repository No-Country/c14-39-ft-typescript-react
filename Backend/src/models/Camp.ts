import { Schema, model } from "mongoose";

const campSchema = new Schema({
  num: { type: Number, required: true },
  description: { type: String, required: true },
  capacity: { type: Number, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  status: { type: String, required: true },
  imgs: [
    {
      type: String,
      required: true
    }
  ],
  campType_id: {
    type: Schema.Types.ObjectId,
    ref: "CampType",
    required: true
  },
  sportCenter_id: {
    type: Schema.Types.ObjectId,
    ref: "SportCenter",
    required: true
  }
});

campSchema.set("toJSON", {
  transform: (document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const Camp = model("Camp", campSchema);
