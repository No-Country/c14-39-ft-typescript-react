// validation sportCenter schema with zod
import { z } from "zod";

const infoSchema = z.object({
  sc_address: z.string({
    invalid_type_error: "La dirección debe ser un string",
    required_error: "La dirección es requerido",
  }),
  sc_lat: z.number({
    invalid_type_error: "La latitud debe ser un numero",
    required_error: "La latitud es requerido",
  }),
  sc_alt: z.number({
    invalid_type_error: "La altitud debe ser un numero",
    required_error: "La altitud es requerido",
  }),
  sc_open: z.string({
    invalid_type_error: "Open debe ser un boolean",
    required_error: "Open es requerido",
  }),
  sc_close: z.string({
    invalid_type_error: "Close debe ser un boolean",
    required_error: "Close es requerido",
  }),
  sc_email: z
    .string({
      invalid_type_error: "Email debe ser un string",
      required_error: "Email es requerido",
    })
    .email({
      message: "El email debe ser válido",
    }),
});

export const SportCenterSchemaValidator = z.object({
  sc_name: z
    .string({
      invalid_type_error: "El nombre debe ser un string",
      required_error: "El nombre es requerido",
    })
    .min(3, {
      message: "El nombre debe tener al menos 3 caracteres",
    })
    .max(60, {
      message: "El nombre debe tener menos de 20 caracteres",
    }),
  sc_description: z
    .string({
      invalid_type_error: "La descripción debe ser un string",
      required_error: "La descripción es requerido",
    })
    .min(3, {
      message: "La descripción debe tener al menos 3 caracteres",
    })
    .max(255, {
      message: "La descripción debe tener menos de 100 caracteres",
    }),
  sc_phone: z.string({
    invalid_type_error: "El teléfono debe ser un string",
    required_error: "El teléfono es requerido",
  }),
  sc_info: infoSchema,
  sc_active: z
    .boolean({
      invalid_type_error: "Active debe ser un boolean",
      required_error: "Active es requerido",
    })
    .optional(),
  sc_imgs: z.array(
    z.string().url({
      message: "La imagen debe ser una URL válida",
    })
  ),
  country_id: z.string({
    invalid_type_error: "Country_id debe ser un string",
    required_error: "Country_id es requerido",
  }),
  user_id: z.string({
    invalid_type_error: "User_id debe ser un string",
    required_error: "User_id es requerido",
  }),
});

// sportCenter update schema validate
export const SportCenterUpdateSchema =
  SportCenterSchemaValidator.partial().merge(
    z.object({
      sportCenterId: z.string({
        invalid_type_error: "El id debe ser un string",
        required_error: "El id es requerido",
      }),
    })
  );
