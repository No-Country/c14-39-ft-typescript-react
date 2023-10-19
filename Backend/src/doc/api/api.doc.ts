
export const routeAPIPath = "/api";
export const routeAPIValue = {
  get: {
    summary: "Obtener datos",
    description: "Obtener datos de la API",
    responses: {
      "200": {
        description: "Respuesta exitosa",
      },
    },
  },
};

export const routesAuthControllerAPIValue ={
  '/api/register': {
    post: {
      tags: ['Auth Controller'],
      summary: 'Registrar un nuevo usuario',
      description: 'Crea un nuevo usuario y devuelve un token de autenticación',
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
        '200': {
          description: "Respuesta exitosa",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                user: {
                  type: "object",
                  $ref: "#/components/schemas/UserData",
                },
                message: {
                  type: "string",
                  example: "Usuario registrado con exito",
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
                  example:{
                    "Case 1": "El email ya esta en uso",
                    "Case 2": "Pais invalido",
                    "Case 3": "Validacion del SchemaValidator, ejemplo: La contraseña debe contener al menos 6 caracteres, La contraseña es requerida, etc",
                  },
                },
              },
            },
          },
        },
      },
        '500': {
          description: 'Error del servidor'
        }
      }
    }
  },
  '/api/login': {
    post: {
      tags: ['Auth Controller'],
      summary: 'Iniciar sesión como usuario',
      description: 'Autentica al usuario y devuelve un token',
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UserLogin",
            },
          },
        }
      },
      responses: {
        '200': {
          description: 'Respuesta exitosa',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  user: {
                    type: 'object',
                    $ref: '#/components/schemas/UserLogin'
                  },
                  message: {
                    type: 'string',
                    example: 'Login exitoso'
                  }
                }
              }
            }
          } 
        },
        '400': {
          description: 'Error en la solicitud',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: {
                      'Case 1': 'Email incorrecto',
                      'Case 2': 'Contraseña incorrecta'
                    }
                  }
                }
              }
            }
          }
        },
        '500': {
          description: 'Error del servidor'
        }
      }
    }
  },
  '/api/logout': {
    post: {
      tags: ['Auth Controller'],
      summary: 'Cerrar la sesión del usuario',
      description: 'Invalida el token del usuario y cierra la sesión',
      responses: {
        '200': {
          description: 'Cierre de sesión exitoso',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'Logout exitoso'
                  }
                }
              }
            }
          }
        },
        '400': {
          description: 'Error en la solicitud',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'No hay ninguna sesion activa'
                  }
                }
              }
            }
          }
        },
        '500': {
          description: 'Error del servidor'
        }
      }
    }
  },
  '/api/verify': {
    get: {
      tags: ['Auth Controller'],
      summary: 'Verificar token',
      description: 'Verifica si el token proporcionado es válido',
      responses: {
        '200': {
          description: 'Token válido'
        },
        '401': {
          description: 'No autorizado'
        },
        '500': {
          description: 'Error del servidor'
        }
      }
    }
  }
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
