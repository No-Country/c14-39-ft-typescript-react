import {
  IRerservationController,
  IReservation,
  IReservationResponse,
} from "../interface";
import { User } from "../models";
import { ReservationModel } from "../models/Revervation";

export class ReservationController implements IRerservationController {
  public async getReservationsByUser(userId: string): Promise<IReservationResponse[]> {
    try {
      const user = await User.findById(userId)

      if (!user) throw new Error('User not found')

      const reservations = await ReservationModel.find({
        user_id: user._id
      })

      return reservations
    } catch (error) {
      throw error
    }
  }

  // Create reservation
  public async createReservation(
    reservationData: IReservation
  ): Promise<IReservationResponse> {
    // Convertir las fechas y horas a objetos Date para poder compararlas
    const dateReservation = new Date(reservationData.fr_date_reservation);
    const dateReservedParts = reservationData.fr_date_reserved.split("-");
    const dateReserved = new Date(
      `${dateReservedParts[2]}-${dateReservedParts[1]}-${dateReservedParts[0]}`
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

    return {
      _id: "adfasda",
      ...reservationData,
    };
  }
}
