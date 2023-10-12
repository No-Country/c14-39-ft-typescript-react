import swaggerJsdoc from "swagger-jsdoc";
import { routeAPIPath, routeAPIValue } from "./api";

const paths: Record<string, any> = {
  [routeAPIPath]: { ...routeAPIValue },
};

const options = {
  definition: {
    openapi: "3.0.0", // Versión de Swagger
    info: {
      title: "API de reserva tu campo", // Título de tu API
      version: "1.0.0", // Versión de tu API
      description: "Documentación de la API de reserva tu campo", // Descripción de tu API
    },
    servers: [
      {
        url: "http://localhost:3000", // URL base de tu API
      },
    ],
    paths: {
      ...paths,
    },
  },
  apis: ["../src/routes/*.js"], // Ruta a tus archivos de definición de rutas
};

const specs = swaggerJsdoc(options);
export { specs };
