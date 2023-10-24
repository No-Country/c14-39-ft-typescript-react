import {
  validateSchema,
  UserSchemaValidator,
  UserUpdateSchema,
  CountrySchemaValidator,
  TypeUserSchemaValidator,
  SportCenterSchemaValidator,
  SportCenterUpdateSchema,
} from "../models/schemas";

// refactorizado validacion
const validate = (schema: any) => {
  return function (body: any) {
    const { isValid, data, errors } = validateSchema({
      data: body,
      schema,
    });

    if (!isValid || errors) {
      console.log(errors);

      const errorString: string | any = errors
        ?.map((error: any) => error.message)
        .join(" , ");
      throw new Error(errorString);
    }

    return {
      data,
    };
  };
};

export const validateUser = validate(UserSchemaValidator);
export const validateUserUpdate = validate(UserUpdateSchema);
export const validateCountry = validate(CountrySchemaValidator);
export const validateType = validate(TypeUserSchemaValidator);
export const validateSportCenter = validate(SportCenterSchemaValidator);
export const validateUpdateSport = validate(SportCenterUpdateSchema);
