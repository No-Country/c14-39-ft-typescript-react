// Tipado para express
import express, { Express } from "express";
import { initServer } from "./db";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import { specs } from "./doc/swaggerConfig";
// Rutas principal
import indexRoutes from "../src/routes/indexRoutes";

// dependencias node
const app: Express = express();
import cors from "cors";

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

initServer(app);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
); // Ruta para la documentación
app.use("/api", indexRoutes);

export default app;
