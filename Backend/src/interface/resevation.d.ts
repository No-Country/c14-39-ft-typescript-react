export interface IReservation {
  fr_date_reservation: string;
  fr_date_reserved: string;
  fr_status?: string;
  fr_schedule: IFrschedule;
  user_id: string;
  sc_id: string;
  sca_id: string;
}

export interface IReservationResponse extends IReservation {
  _id: string;
}

export interface IFrschedule {
  s_start: string;
  s_end: string;
}

export interface IRerservationController {
  createReservation(
    reservationData: IReservation
  ): Promise<IReservationResponse>;
}
