import swaggerJsdoc from "swagger-jsdoc";
import { components } from './api/schemas.doc';
import {
  routeUserAPIPath,
  routeUserAPIValue,
  routeUserByIdAPIPath,
  routeUserByIdAPIValue,
  routeSportAPIPath,
  routeSportAPIValue,
  routeSportByIdAPIPath,
  routeSportByIdAPIValue
} from "./api";

const paths: Record<string, any> = {
  [routeUserAPIPath]: { ...routeUserAPIValue },
  [routeUserByIdAPIPath]: { ...routeUserByIdAPIValue },
  [routeSportAPIPath]: { ...routeSportAPIValue },
  [routeSportByIdAPIPath]: { ...routeSportByIdAPIValue },
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
    components,
  },
  apis: ["../src/routes/*.js"], // Ruta a tus archivos de definición de rutas
};

const specs = swaggerJsdoc(options);
export { specs };
