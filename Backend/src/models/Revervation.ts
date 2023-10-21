import mongoose, { Schema } from "mongoose";
import { AppString } from "../utils";

const fr_scheduleItem = {
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
  fr_date: {
    type: Date,
    required: true,
  },
  fr_status: {
    type: String,
    enum: AppString.FR_STATUS,
    default: AppString.FR_STATUS[0],
  },
  fr_schedule: fr_scheduleItem,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  sc_id: {
    type: Schema.Types.ObjectId,
    ref: "SportCenter",
    required: true,
  },
  sca_id: {
    type: Schema.Types.ObjectId,
    ref: "SportCenterArea",
    required: true,
  },
});

export const ReservationModel =
  mongoose.models.reservations ||
  mongoose.model("reservatios", ResevationSchema);
