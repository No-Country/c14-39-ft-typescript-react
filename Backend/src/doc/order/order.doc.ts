export const routeOrderDoc = {
  "/api/createorder": {
    post: {
      tags: ["Order Payment"],
      summary: "Crear una orden",
      description: "Crear una orden",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/propsOrder",
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Respuesta exitosa",
        },
        "400": {
          description: "Error en la solicitud",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example:
                      "Error en la solicitud",
                  },
                },
              },
            },
          },
        },
      },
    }
  }
};
