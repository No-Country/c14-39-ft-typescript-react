import mongoose, { Schema, model } from "mongoose";

const orderSchema = new Schema({
  order_id: {
    type: String,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  camp_id: {
    type: Schema.Types.ObjectId,
    ref: "camps",
    required: true,
  },
  sc_id: {
    type: Schema.Types.ObjectId,
    ref: "sportcenters",
    required: true,
  }
});

orderSchema.set("toJSON", {
  transform: (document: any, returnedObject: any) => {
    delete returnedObject.__v;
  },
});

export const Order = mongoose.models.orderSchema || model("Order", orderSchema);
