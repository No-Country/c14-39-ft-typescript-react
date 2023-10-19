export const routeSportAPIPath = "/api/sportCenter";
export const routeSportAPIValue = {
  get: {
    summary: "Obtener datos de los sport centers",
    description: "Obtener datos de la API",
    tags: ["SportCenter"],
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
                    $ref: "#/components/schemas/User/SportCenter",
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
    summary: "Crear un sport center",
    description: "Crear un sport center",
    tags: ["SportCenter"],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SportCenterData",
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
                  $ref: "#/components/schemas/SportCenter",
                },
                message: {
                  type: "string",
                  example: "Sport Center Created",
                }
              }
            },
          },
        }
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
  },
  put: {
    summary: "Actualizar un sport center",
    description: "Actualizar un sport center",
    tags: ["SportCenter"],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SportCenterUpdate",
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
              $ref: "#/components/schemas/SportCenter",
            }
          }
        }
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
  },
};

export const routeSportByIdAPIPath = "/api/sportCenter/{id}";
export const routeSportByIdAPIValue = {
  get: {
    summary: "Obtener datos de un sport center",
    description: "Obtener datos de un sport center",
    tags: ["SportCenter"],
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
              $ref: "#/components/schemas/SportCenter",
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
  delete: {
    summary: "Eliminar un sport center",
    description: "Eliminar un sport center",
    tags: ["SportCenter"],
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
              $ref: "#/components/schemas/SportCenter",
            }
          }
        }
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
};