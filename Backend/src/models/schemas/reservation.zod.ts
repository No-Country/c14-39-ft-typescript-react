import { z, ZodError } from "zod";
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

export const frStatusSchemaValidator = z.object({
  fr_status: z.enum(AppString.FR_STATUS),
});

export const fieldReservationSchemaValidator = z.object({
  fr_date: z.date({
    invalid_type_error: "El campo fecha tiene que ser válido.",
    required_error: "El campo fecha es obligatorio",
  }),
  fr_status: frStatusSchemaValidator.pick({ fr_status: true }).optional(),
  fr_schedule: scheduleSchemaValidator.pick({
    s_start: true,
    s_end: true,
  }),
  user_id: z.string({
    invalid_type_error: "El campo usuario tiene que ser un texto",
    required_error: "El campo usuario es obligatorio",
  }),
  sc_id: z.string({
    invalid_type_error: "El campo centro deportivo tiene que ser un texto",
    required_error: "El campo centro deportivo es obligatorio",
  }),
  sca_id: z.string({
    invalid_type_error: "El campo  de cancha tiene que ser un texto",
    required_error: "El campo  de cancha es obligatorio",
  }),
});
