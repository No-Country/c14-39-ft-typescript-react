import swaggerJsdoc from "swagger-jsdoc";
import { components } from "./api/schemas.doc";
import {
  routeUserAPIValue,
  routesAuthControllerAPIValue,
  routeSportAPI,
} from "./api";
import { routeReservationDoc } from "./reservation";
import { routeOrderDoc } from "./order";

const paths: Record<string, any> = {
  ...routeUserAPIValue,
  ...routeSportAPI,
  ...routesAuthControllerAPIValue,
  ...routeReservationDoc,
  ...routeOrderDoc,
};

const options = {
  definition: {
    openapi: "3.0.0", // Versión de Swagger
    info: {
      title: "API de reserva tu campo", // Título de tu API
      version: "1.0.0", // Versión de tu API
      description: "Documentación de la API de reserva tu campo", // Descripción de tu API
      contact: {
        name: "Reserva tu campo",
        url: "https://reservatucampo.com",
        email: "inforeservatucampo@email.com",
      },
    },

    servers: [
      {
        url: "http://localhost:3000", // URL base de tu API
      },
    ],
    paths: {
      ...paths,
    },
    components,
  },
  apis: ["../src/routes/*.js"], // Ruta a tus archivos de definición de rutas
};

const specs = swaggerJsdoc(options);
export { specs };
