const properties = {
    name: {
      type: "string",
      example: "Juan"
    },
    lastname: {
      type: "string",
      example: "Perez"
    },
    email: {
      type: "string",
      example: "3U9pZ@example.com"
    },
    city: {
      type: "string",
      example: "Bogota"
    },
    address: {
      type: "string",
      example: "Calle 123"
    },
    image: {
      type: "string",
      example: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    },
    country_id: {
      type: "string",
      example: "652ff7625e95f355a0630cd9"
    },
    type_id: {
      type: "string",
      example: "652ff8405e95f355a0630cdc"
    },
  }

  const propSportCenter = {
    name: {
      type: "string",
      example: "sportcenter 2"
    },
    description: {
      type: "string",
      example: "Description 2"
    },
    phone: {
      type: "number",
      example: 123456789
    },
    email: {
      type: "string",
      example: "email2@example.com"
    },
    address: {
      type: "string",
      example: "address1"
    },
    lat: {
      type: "number",
      example: 1
    },
    alt: {
      type: "number",
      example: 1
    },
    open: {
      type: "boolean",
      example: true
    },
    close: {
      type: "boolean",
      example: true
    },
    active: {
      type: "boolean",
      example: true
    },
    imgs: {
      type: "array",
      items: {
        type: "string",
        example: "https://donpotrero.com/img/posts/2/medidas_lg.jpg"
      }
    },
    country_id: {
      type: "string",
      example: "652ff7625e95f355a0630cd9"
    },
    user_id: {
      type: "string",
      example: "652ff85a5e95f355a0630ce0"
    }
  }
  
  export const components = {
    "schemas": {
      User: {
        type: "object",
        properties: {
          id: {
            type: "string",
            example: "652ff85a5e95f355a0630ce0"
          },
          ...properties
        },
      },
      UserLogin: {
        type: "object",
        properties: {
          email: properties.email,
           password: {
            type: "string",
            example: "123456789"
          }
        },
    },
      UserData: {
        type: "object",
        properties: {
          ...properties,
          password: {
            type: "string",
            example: "123456789"
          }
        },
      },
      UserUpdate: {
        type: "object",
        properties: {
          ...properties,
          userId: {
            type: "string",
            example: "652ff85a5e95f355a0630ce0"
          },
          password: {
            type: "string",
            example: "123456789"
          }
        },
        SportCenter: {
          type: "object",
          properties: {
            id: {
              type: "string",
              example: "652ff8775e95f355a0630ce4"
            },
            ...propSportCenter
          },
        },
        SportCenterData: {
          type: "object",
          properties: {
            ...propSportCenter,
          },
        },
        SportCenterUpdate: {
          type: "object",
          properties: {
            ...propSportCenter,
            sportCenterId: {
              type: "string",
              example: "652ff8775e95f355a0630ce4"
            },
          },
        }
      }
    }
  }


