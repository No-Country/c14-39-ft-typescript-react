import { z } from "zod";
import { AppString } from "../../utils";

const scheduleSchemaValidator = z.object({
  s_start: z
    .string({
      invalid_type_error: "La hora de inicio debe ser un texto",
      required_error: "La hora de inicio es requerida",
    })
    .regex(/^\d{2}:\d{2}:00$/, {
      message: "La hora de inicio debe ser válida",
    }),
  s_end: z
    .string({
      invalid_type_error: "La hora de fin debe ser un texto",
      required_error: "La hora de fin es requerida",
    })
    .regex(/^\d{2}:\d{2}:00$/, {
      message: "La hora de fin debe ser válida",
    }),
});

export const fieldReservationSchemaValidator = z.object({
  fr_date_reservation: z
    .string({
      required_error: "La fecha de reserva es requerida",
      invalid_type_error: "La fecha de reserva debe ser una fecha",
      description: "La fecha de reserva",
    })
    .datetime(),
  fr_date_reserved: z
    .string({
      invalid_type_error: "La fecha debe ser un texto",
      required_error: "La fecha es requerida",
    })
    .regex(/^(0[1-9]|[12][0-9]|3[01])[-\/](0[1-9]|1[012])[-\/](19|20)\d\d$/, {
      message: "La fecha debe ser válida",
    }),
  fr_status: z.enum(AppString.FR_STATUS).optional(),
  fr_schedule: scheduleSchemaValidator.pick({
    s_start: true,
    s_end: true,
  }),
  user_id: z
    .string({
      invalid_type_error: "El id usuario tiene que ser un texto",
      required_error: "El id usuario es obligatorio",
    })
    .min(5, {
      message: "El id de usuario debe contener un id",
    }),
  sc_id: z
    .string({
      invalid_type_error: "El id centro deportivo tiene que ser un texto",
      required_error: "El id centro deportivo es obligatorio",
    })
    .min(5, {
      message: "El id de centro deportivo debe contener un id",
    }),
  sca_id: z
    .string({
      invalid_type_error: "El id  de cancha tiene que ser un texto",
      required_error: "El id  de cancha es obligatorio",
    })
    .min(5, {
      message: "El id de cancha debe contener un id",
    }),
});
