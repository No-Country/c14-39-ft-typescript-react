import mongoose from "mongoose";
import {
  IRerservationController,
  IReservation,
  IReservationResponse,
} from "../interface";
import { Camp, SportCenterModel, User } from "../models";
import { ReservationModel } from "../models/Revervation";

export class ReservationController implements IRerservationController {
  // Create reservation
  public async createReservation(
    reservationData: IReservation
  ): Promise<IReservationResponse | any> {
    try {
      // Convertir las fechas y horas a objetos Date para poder compararlas
      const dateReservation = new Date(reservationData.fr_date_reservation);
      const dateReserved = new Date(
        reservationData.fr_schedule.s_date_reserved
      );

      const startTime: number | any = new Date(
        `1970-01-01T${reservationData.fr_schedule.s_start}Z`
      );
      const endTime: number | any = new Date(
        `1970-01-01T${reservationData.fr_schedule.s_end}Z`
      );

      // Verificar que fr_date_reserved es mayor o igual que fr_date_reservation
      if (dateReserved < dateReservation) {
        throw new Error(
          "La fecha reservada es anterior a la fecha de la reserva"
        );
      }

      // Verificar que la diferencia entre las horas de s_start y s_end es de al menos una hora
      const timeDiff = endTime - startTime;
      const oneHourInMilliseconds = 60 * 60 * 1000; // Una hora en milisegundos
      if (timeDiff < oneHourInMilliseconds) {
        throw new Error(
          "La diferencia entre las horas de inicio y fin es menor a una hora"
        );
      }

      const [user, sport_center, sport_camp] = await Promise.all([
        User.findById(reservationData.user_id),
        SportCenterModel.findById(reservationData.sc_id),
        Camp.findById(reservationData.sca_id),
      ]);

      if (!user) {
        throw new Error("El usuario no existe");
      }

      if (!sport_center) {
        throw new Error("El centro deportivo no existe");
      }

      if (!sport_camp) {
        throw new Error("El campo deportivo no existe");
      }

      const objectIdCamp = new mongoose.Types.ObjectId(reservationData.sca_id);
      const existCamInCenter = sport_center?.list_sport_camps.find(
        (camp: any) => camp.equals(objectIdCamp)
      );
      if (!existCamInCenter) {
        throw new Error("El campo deportivo no pertenece al centro deportivo");
      }

      const newReservation = new ReservationModel(reservationData);

      await newReservation.save();

      return newReservation;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async getReservationById(id: string): Promise<IReservationResponse> {
    try {
      const reservation = await ReservationModel.findById(id)
        .populate("user_id", {
          name: 1,
          lastname: 1,
          email: 1,
          city: 1,
          address: 1,
        })
        .populate("sc_id", {
          sc_info: 1,
          sc_name: 1,
          sc_description: 1,
          sc_phone: 1,
        })
        .populate("sca_id", {
          sca_num: 1,
          sca_description: 1,
          sca_price: 1,
          sca_capacity: 1,
          sca_price_ISO: 1,
        });

      if (!reservation) {
        throw new Error("La reserva no existe");
      }
      return reservation;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
