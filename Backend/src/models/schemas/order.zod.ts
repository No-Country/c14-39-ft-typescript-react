// validation order schema with zod
import { z } from "zod";

export const OrderSchemaValidator = z.object({
  /* en español */
  fecha: z.string({
    invalid_type_error: "La fecha debe ser un string",
    required_error: "La fecha es requerida",
  }),
  hora: z.string({
    invalid_type_error: "La hora debe ser un string",
    required_error: "La hora es requerida",
  }),
  precio: z.number({
    invalid_type_error: "El precio debe ser un numero",
    required_error: "El precio es obligatorio",
  }),
  user_id: z
    .string({
      invalid_type_error: "El id usuario tiene que ser un string",
      required_error: "El id usuario es obligatorio",
    })
    .min(5, {
      message: "El id de usuario debe contener un id",
    }),
  camp_id: z
    .string({
      invalid_type_error: "El id del campo debe ser un string.",
      required_error: "El id del campo es obligatorio.",
    })
    .min(5, {
      message: "El id de usuario debe contener un id",
    }),
  sc_id: z
    .string({
      invalid_type_error: "El id del sportcenter tiene que ser un string",
      required_error: "El id del sportcenter es obligatorio",
    })
    .min(5, {
      message: "El id de usuario debe contener un id",
    }),
});
