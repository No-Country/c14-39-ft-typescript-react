export interface IFrschedule {
  s_date_reserved: string | Date;
  s_start: string;
  s_end: string;
}

export interface IReservation {
  fr_date_reservation: string;
  fr_status?: string;
  fr_schedule: IFrschedule;
  user_id: string;
  sc_id: string;
  sca_id: string;
}

export interface IReservationResponse extends IReservation {
  _id: string;
}

export interface IRerservationController {
  createReservation(
    reservationData: IReservation
  ): Promise<IReservationResponse>;
  getReservationById(id: string): Promise<IReservationResponse>;
}
