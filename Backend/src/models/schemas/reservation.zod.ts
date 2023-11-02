import { z } from "zod";
import { AppString } from "../../utils";

const timeFormatRegex = /^(0[0-9]|1[0-9]|2[0-3]):00:00$/;

const scheduleSchemaValidator = z.object({
  s_date_reserved: z.coerce
    .date({
      invalid_type_error: "La fecha debe ser una fecha",
      required_error: "La fecha de reserva  es requerida",
    })
    .refine(
      (value) => {
        console.log(value);

        const regex = /^\d{4}-\d{2}-\d{2}$/;
        return regex.test(value.toISOString().split("T")[0]);
      },
      {
        message: "La fecha de reserva debe ser una fecha",
      }
    ),
  s_start: z.string().regex(timeFormatRegex, {
    message:
      "La hora de inicio debe ser exacta y en punto (por ejemplo: 09:00:00)",
  }),
  s_end: z.string().regex(timeFormatRegex, {
    message:
      "La hora de fin debe ser exacta y en punto (por ejemplo: 09:00:00)",
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

  fr_status: z.enum(AppString.FR_STATUS).optional(),
  fr_schedule: scheduleSchemaValidator.pick({
    s_date_reserved: true,
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
