import mongoose, { Schema, model } from "mongoose";

const campSchema = new Schema({
  sca_price: { type: Number, required: true },
  sca_price_ISO: { type: String, default: "COP" },
  sca_num: { type: Number, required: true },
  sca_description: { type: String, required: true },
  sca_capacity: { type: Number, required: true },
  sca_width: { type: Number, required: true },
  sca_height: { type: Number, required: true },
  sca_active: { type: Boolean, required: true },
  sca_imgs: [
    {
      type: String,
      required: true,
    },
  ],
  camp_type_id: {
    type: Schema.Types.ObjectId,
    ref: "CampType",
    required: true,
  },
  sport_center_id: {
    type: Schema.Types.ObjectId,
    ref: "sportcenters",
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  order_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
  ],
});

campSchema.set("toJSON", {
  transform: (document: any, returnedObject: any) => {
    delete returnedObject.__v;
  },
});

export const Camp = mongoose.models.camps || model("camps", campSchema);
