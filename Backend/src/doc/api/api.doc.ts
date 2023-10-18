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

export const paths = {
  '/register': {
    post: {
      tags: ['Auth Controller'],
      summary: 'Registrar un nuevo usuario',
      description: 'Crea un nuevo usuario y devuelve un token de autenticación',
      responses: {
        '200': {
          description: 'Usuario registrado con éxito'
        },
        '400': {
          description: 'Datos de entrada no válidos'
        },
        '500': {
          description: 'Error del servidor'
        }
      }
    }
  },
  '/login': {
    post: {
      tags: ['Auth Controller'],
      summary: 'Iniciar sesión como usuario',
      description: 'Autentica al usuario y devuelve un token',
      responses: {
        '200': {
          description: 'Inicio de sesión exitoso'
        },
        '400': {
          description: 'Datos de entrada no válidos'
        },
        '500': {
          description: 'Error del servidor'
        }
      }
    }
  },
  '/logout': {
    post: {
      tags: ['Auth Controller'],
      summary: 'Cerrar la sesión del usuario',
      description: 'Invalida el token del usuario y cierra la sesión',
      responses: {
        '200': {
          description: 'Cierre de sesión exitoso'
        },
        '500': {
          description: 'Error del servidor'
        }
      }
    }
  },
  '/profile': {
    get: {
      tags: ['Auth Controller'],
      summary: 'Obtener perfil del usuario',
      description: 'Devuelve los detalles del perfil del usuario autenticado',
      responses: {
        '200': {
          description: 'Perfil recuperado con éxito'
        },
        '404': {
          description: 'Usuario no encontrado'
        },
        '500': {
          description: 'Error del servidor'
        }
      }
    }
  },
  '/verify': {
    get: {
      tags: ['Auth Controller'],
      summary: 'Verificar token',
      description: 'Verifica si el token proporcionado es válido',
      responses: {
        '200': {
          description: 'Token válido'
        },
        '401': {
          description: 'Token no válido o expirado'
        },
        '500': {
          description: 'Error del servidor'
        }
      }
    }
  }
};
