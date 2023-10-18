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
    }
  }
}