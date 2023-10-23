import { z } from "zod";
import { isValidObjectId } from "mongoose";

export const campSchemaValidation = z.object({
  sca_num: z
    .number({
      invalid_type_error: "El numero de campo debe ser un numero.",
      required_error: "El numero de campo es requerido.",
    })
    .min(1, {
      message: "El numero minimo es uno.",
    })
    .max(50, {
      message: "El numero maximo es 50.",
    }),
  sca_description: z.string({
    invalid_type_error: "La descripcion debe ser un texto.",
    required_error: "La descripcion es requerida.",
  }),
  sca_capacity: z.number({
    invalid_type_error: "La capacidad debe ser un numero.",
    required_error: "La capacidad es requerida.",
  }),
  sca_width: z.number({
    invalid_type_error: "La anchura debe ser un numero.",
    required_error: "La anchura es requerida.",
  }),
  sca_height: z.number({
    invalid_type_error: "La altura debe ser un numero.",
    required_error: "La altura es requerida.",
  }),
  sca_active: z
    .string({
      invalid_type_error: "El campo activo debe ser un texto.",
      required_error: "El campo activo es requerido.",
    })
    .optional(),
  sca_imgs: z.array(
    z
      .string({
        invalid_type_error: "Las imagenes deben ser un texto.",
        required_error: "Las imagenes son requeridas.",
      })
      .url({
        message: "Las imagenes deben ser una URL.",
      })
  ),
  sportCenter_id: z
    .string({
      invalid_type_error: "El campo tipo debe ser un texto.",
    })
    .refine(isValidObjectId, {
      message: "id del centro deportivo es invalido",
    }),
  user_id: z
    .string({
      invalid_type_error: "El campo usuario debe ser un texto.",
    })
    .refine(isValidObjectId, { message: "id del usuario es invalido" }),
});
