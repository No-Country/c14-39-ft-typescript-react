import {
    validateSchema,
    UserSchemaValidator,
    CountrySchemaValidator,
    TypeUserSchemaValidator,
    loginSchemaValidator
  } from "../models/schemas";
  
  // refactorizado validacion
  const validate = (schema: any) => {
    return function (body: any) {
      const { isValid, data, errors } = validateSchema({
        data: body,
        schema,
      });
  
      if (!isValid || errors) {
        const errorString: string | any = errors
          ?.map((error) => error.message)
          .join(" , ");
        throw new Error(errorString);
      }
  
      return {
        data
      };
    }
  }
  
  export const validateUser = validate(UserSchemaValidator)
  export const validateCountry = validate(CountrySchemaValidator)
  export const validateType = validate(TypeUserSchemaValidator)
  export const validateSportCenter = validate(loginSchemaValidator)