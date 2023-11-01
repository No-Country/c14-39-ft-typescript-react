// validation user schema with zod
import { z, ZodError } from "zod";

// user schema validate
export const UserSchemaValidator = z.object({
  name: z
    .string({
      invalid_type_error: "El nombre debe ser un string",
    }).nonempty("El nombre es requerido")
    .min(3, {
      message: "El nombre debe tener al menos 3 caracteres",
    })
    .max(20, {
      message: "El nombre debe tener menos de 20 caracteres",
    }),
  lastname: z
    .string({
      invalid_type_error: "El apellido debe ser un string",
    }).nonempty("El apellido es requerido")
    .min(3, {
      message: "El apellido debe tener al menos 3 caracteres",
    })
    .max(20, {
      message: "El apellido debe tener menos de 20 caracteres",
    }),
  email: z
    .string({
      invalid_type_error: "El email debe ser un string",
    }).nonempty("El email es requerido")
    .email({
      message: "El email debe ser válido",
    }),
  password: z
    .string({
      invalid_type_error: "La contraseña debe ser un string",
    }).nonempty("La contraseña es requerida")
    .min(6, {
      message: "La contraseña debe contener al menos 6 caracteres",
    }),
  city: z.string({
    invalid_type_error: "Tiene que ser un texto",
    // required_error: "La ciudad es requerida",
  }).optional(),
  address: z.string({
    invalid_type_error: "Tiene que ser un texto",
    // required_error: "La dirección es requerida",
  }).optional(),
  image: z
    .string({
      invalid_type_error: "Tiene que ser un texto",
    })
    .optional(),
  country_id: z.string({
    invalid_type_error: "Tiene que ser un texto",
    // required_error: "El país es requerido",
  }).optional(),
  type_id: z.string({
    invalid_type_error: "Tiene que ser un texto",
    // required_error: "El tipo de usuario es requerido",
  }).optional(),
});

export const loginSchemaValidator = z.object({
  email: z.string()
    .nonempty("El email es requerido"),
  password: z.string()
    .nonempty("La contraseña es requerida"),
});

// user update schema validate
export const UserUpdateSchema = z.object({
  name: z.string().min(3, {
    message: "El nombre debe tener al menos 3 caracteres",
  }).max(20, {
    message: "El nombre debe tener menos de 20 caracteres",
  }).optional(),
  lastname: z.string().min(3, {
    message: "El apellido debe tener al menos 3 caracteres",
  }).max(20, {
    message: "El apellido debe tener menos de 20 caracteres",
  }).optional(),
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
      const errorString: string | any = error.errors
        ?.map((error) => error.message)
        .join(" , ");
      return { isValid: false, errors: errorString };
    }

    throw error;
  }
};
