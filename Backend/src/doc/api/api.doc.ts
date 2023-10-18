import { components } from './schemas.doc';
export const routeAPIPath = "/api";
export const routeAPIValue = {
  get: {
    summary: "Obtener datos",
    description: "Obtener datos de la API",
    tags: ["Api"],
    responses: {
      "200": {
        description: "Respuesta exitosa",
      },
    },
  },
};

export const routeUserAPIPath = "/api/users";
export const routeUserAPIValue = {
  get: {
    summary: "Obtener datos de los usuarios",
    description: "Obtener datos de la API",
    tags: ["User"],
    responses: {
      "200": {
        description: "Respuesta exitosa",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                users: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/User",
                  }
                },
              },
            },
          },
        },
      },
      "404": {
        description: "Error en la solicitud. No encontrado",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "Not found",
                },
              },
            },
          },
        },
      },
    },
  },
  post: {
    summary: "Crear un usuario",
    description: "Crear un usuario",
    tags: ["User"],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/UserData",
          },
        },
      }
    },
    responses: {
      "201": {
        description: "Respuesta exitosa",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                user: {
                  type: "object",
                  $ref: "#/components/schemas/User",
                },
                message: {
                  type: "string",
                  example: "User Created",
                }
              }
            },
          },
        }
      },
      "400": {
        description: "Error en la solicitud. No encontrado",
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
  },
  put: {
    summary: "Actualizar un usuario",
    description: "Actualizar un usuario",
    tags: ["User"],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/UserUpdate",
          },
        },
      }
    },
    responses: {
      "200": {
        description: "Respuesta exitosa",
        content: {
          "application/json": {
            schema: {
              type: "object",
              $ref: "#/components/schemas/User",
            }
          }
        }
      },
      "400": {
        description: "Error en la solicitud. No encontrado",
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
  },
};

export const routeUserByIdAPIPath = "/api/users/{id}";
export const routeUserByIdAPIValue = {
  get: {
    summary: "Obtener datos de un usuario",
    description: "Obtener datos de un usuario",
    tags: ["User"],
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          type: "string",
        },
        required: true,
      }
    ],
    responses: {
      "200": {
        description: "Respuesta exitosa",
        content: {
          "application/json": {
            schema: {
              type: "object",
              $ref: "#/components/schemas/User",
            }
          }
        }
      },
      "404": {
        description: "Error en la solicitud. No encontrado",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "Not found",
                },
              },
            },
          },
        },
      },
    },
  },
};