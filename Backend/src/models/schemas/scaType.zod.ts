import { z } from "zod";

export const sportCampTypeSchemaValidator = z.object({
  sca_type_name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  sca_type_description: z.string({
    required_error: "Description is required",
    invalid_type_error: "Description must be a string",
  }),
});
