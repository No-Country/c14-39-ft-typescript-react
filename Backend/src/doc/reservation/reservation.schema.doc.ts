export const propsReservation = {
  fr_date_reservation: {
    type: "string",
    example: "2021-01-01T00:00:00.000Z",
    description: "Fecha exacta de la operacion reserva",
  },
  fr_date_reserved: {
    type: "string",
    example: "2021-01-01",
    description: "Fecha de reserva",
  },
  fr_status: {
    type: "string",
    example: "RESERVADO",
    description: "Estado de la reserva",
  },
  fr_schedule: {
    type: "object",
    description: "Horario de reserva",
    properties: {
      s_start: {
        type: "string",
        example: "2021-01-01T00:00:00.000Z",
        description: "Hora de inicio de la reserva",
      },
      s_end: {
        type: "string",
        example: "2021-01-01T00:00:00.000Z",
        description: "Hora de fin de la reserva",
      },
    },
  },
  user_id: {
    type: "string",
    example: "1xxxxxxxxxxx",
    description: "Id del usuario",
  },
  sc_id: {
    type: "string",
    example: "1xxxxxxxxxxx",
    description: "Id del centro deportivo",
  },
  sca_id: {
    type: "string",
    example: "1xxxxxxxxxxx",
    description: "Id de la cancha",
  },
};
