// validation user schema width zod
import { z, ZodError } from "zod";

// user schema validate
export const UserSchemaValidator = z.object({
  name: z
    .string({
      invalid_type_error: "El nombre debe ser un string",
    })
    .min(3, {
      message: "El nombre debe tener al menos 3 caracteres",
    })
    .max(20, {
      message: "El nombre debe tener menos de 20 caracteres",
    }),
  lastname: z
    .string({
      invalid_type_error: "El apellido debe ser un string",
    })
    .min(3, {
      message: "El apellido debe tener al menos 3 caracteres",
    })
    .max(20, {
      message: "El apellido debe tener menos de 20 caracteres",
    }),
  email: z
    .string({
      invalid_type_error: "El email debe ser un string",
    })
    .email({
      message: "El email debe ser válido",
    }),
  password: z.string({
    invalid_type_error: "La contraseña debe ser un string",
  }),
  city: z.string({
    invalid_type_error: "Tiene que ser un texto",
  }),
  address: z.string({
    invalid_type_error: "Tiene que ser un texto",
  }),
  image: z.string({
    invalid_type_error: "Tiene que ser un texto",
  }),
  country_id: z.string({
    invalid_type_error: "Tiene que ser un texto",
  }),
  type_id: z.string({
    invalid_type_error: "Tiene que ser un texto",
  }),
});

// country schema validate
export const CountrySchemaValidator = z.object({
  name: z.string().min(3).max(50),
  image: z.string().min(3).max(50),
});

// type user schema validate
export const TypeUserSchemaValidator = z.object({
  name: z.string().min(3).max(50),
  description: z.string().min(3).max(50),
});

/**
 * funcion para validar
 * data: object
 *  */
export const validateSchema = ({
  data,
  schema,
}: {
  data: any;
  schema: z.ZodTypeAny;
}) => {
  try {
    const validatedData = schema.parse(data);
    return { isValid: true, data: validatedData };
  } catch (error) {
    if (error instanceof ZodError) {
      return { isValid: false, errors: error.errors };
    }

    throw error;
  }
};