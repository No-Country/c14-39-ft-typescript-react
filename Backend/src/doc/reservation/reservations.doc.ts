export const routeReservationDoc = {
  "api/reservation": {
    post: {
      sumary: "Crear reservación de canchas",
      tags: ["Reservaciones"],
      description: "Crear reservación de canchas",
      requestBody: {
        required: true,
        content: {
          "aplication/json": {
            schema: {
              $ref: "#/components/schemas/propsReservation",
            },
          },
        },
      },
    },
  },
};
