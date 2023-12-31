import mongoose, { Schema } from "mongoose";
import { AppString } from "../utils";

const fr_scheduleItem = {
  s_date_reserved: {
    type: String,
    required: true,
  },
  s_start: {
    type: String,
    required: true,
  },
  s_end: {
    type: String,
    required: true,
  },
};

const ResevationSchema = new Schema({
  fr_date_reservation: {
    type: Date,
    required: true,
  },
  fr_status: {
    type: String,
    enum: AppString.FR_STATUS,
    default: AppString.FR_STATUS[0],
  },
  fr_schedule: fr_scheduleItem,
  price_total: {
    type: Number,
    required: true,
    default: 0,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  sc_id: {
    type: Schema.Types.ObjectId,
    ref: "sportcenters",
    required: true,
  },
  sca_id: {
    type: Schema.Types.ObjectId,
    ref: "camps",
    required: true,
  },
});

export const ReservationModel =
  mongoose.models.Reservations ||
  mongoose.model("Reservatios", ResevationSchema);
